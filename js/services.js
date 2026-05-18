document.addEventListener('DOMContentLoaded', () => {
    // Register GSAP Plugins
    gsap.registerPlugin(ScrollTrigger);

    initEnvelopeAnimation();
    // Refresh ScrollTrigger after a small delay to ensure layout is ready
    window.addEventListener('load', () => {
        setTimeout(() => {
            ScrollTrigger.refresh();
        }, 500);
    });
});

function initEnvelopeAnimation() {
    const section = document.querySelector('#service-delivery');
    const wrapper = document.querySelector('.envelope-wrapper');
    const flap = document.querySelector('.envelope-top-flap');
    const seal = document.querySelector('.envelope-seal');
    const cards = document.querySelectorAll('.service-card-v2');
    const introText = document.querySelector('.intro-text');

    // Reset initial states for reliability
    gsap.set(cards, { y: 0, rotation: 0, opacity: 1, scale: 0.95 });
    // Envelope starts fully visible now
    gsap.set(wrapper, { scale: 1, y: 0, opacity: 1 });

    // Create Main Timeline
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=400%", 
            scrub: 1, 
            pin: true,
            anticipatePin: 1,
            onLeave: () => {
                container.classList.add('grid-active');
                gsap.set(cards, { clearProps: "all" });
            },
            onEnterBack: () => {
                container.classList.remove('grid-active');
            }
        },
        defaults: { force3D: true } // Performance boost
    });

    // 0. Background Parallax
    tl.to('.svc-parallax-bg', { y: -400, scale: 1.5, ease: "none", duration: 5 }, 0);

    // 1. Intro Fade Out & Seal Pop
    tl.to(introText, { opacity: 0, y: -100, duration: 1.5, ease: "power2.out" }, 0);

    tl.from(seal, { 
        scale: 0, 
        rotate: -180, 
        duration: 1, 
        ease: "back.out(1.5)" 
    }, 0);

    // 2. Opening Phase
    gsap.set(flap, { transformOrigin: "top center" });
    
    tl.to(flap, { 
        rotateX: 180, 
        duration: 2,
        ease: "power2.inOut" 
    }, "+=0.1");
    
    // Move envelope down to make room for the opened flap and cards
    tl.to(wrapper, {
        y: window.innerWidth < 768 ? 80 : 120,
        duration: 2,
        ease: "power2.inOut"
    }, "<");
    
    // Fix Overlap: drop flap behind cards exactly halfway through opening (when it's pointing straight up)
    tl.set(flap, { zIndex: 5 }, "<1");

    // Seal drops off beautifully
    tl.to(seal, {
        y: 150,
        rotate: 45,
        opacity: 0,
        scale: 0.8,
        duration: 1.5,
        ease: "back.in(1.5)"
    }, "<"); // starts at the same time as the z-index drop (t=1.1)

    // 3. Card Pop-Out Phase (Realistic Pull & Fan)
    const isMobile = window.innerWidth < 768;
    
    // Step 3a: Pull straight up out of envelope (Wait until flap is fully behind)
    tl.to(cards, {
        y: -250,
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        stagger: 0.05
    }, "-=0.5"); // Starts 0.5s before seal drop finishes, so t=2.1. By this time flap is fully behind!

    // Step 3b: Fan out elegantly
    cards.forEach((card, index) => {
        const angle = (index - 2.5) * 8; 
        const popX = (index - 2.5) * (isMobile ? 40 : 120); 
        const popY = -350 - (Math.abs(index - 2.5) * 15); 

        tl.to(card, {
            x: popX,
            y: popY,
            rotate: angle,
            duration: 2,
            ease: "expo.out"
        }, "-=1"); // Start fanning while still moving up
    });

    // 4. Envelope Close & Fade Out
    tl.set(flap, { zIndex: 30 }, "+=0.5"); // bring flap back to front before closing
    tl.to(flap, {
        rotateX: 0,
        duration: 1.5,
        ease: "power2.inOut"
    }, "<");

    tl.to(seal, {
        y: 0,
        rotate: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power2.out"
    }, "-=1");

    tl.to(wrapper, { 
        scale: 0.8, 
        opacity: 0, 
        y: 300,
        duration: 1.5,
        ease: "power3.in"
    }, "+=0.2");

    // 5. Final Grid Settlement (Readable Layout with 3D Entrance)
    tl.set('.envelope-cards-container', { zIndex: 40 }, "-=3"); // Bring cards fully in front of envelope pocket
    
    cards.forEach((card, i) => {
        let gridX, gridY;

        if (isMobile) {
            // Mobile: 1 column
            gridX = 0;
            gridY = -600 + (i * 470);
        } else {
            // Desktop: 3 columns, 2 rows
            const row = Math.floor(i / 3); 
            const col = i % 3; 
            gridX = (col - 1) * 340; 
            gridY = row === 0 ? -500 : -30; 
        }

        // 3D Flip & Deal Entrance
        tl.to(card, {
            x: gridX,
            y: gridY,
            rotateX: 360, // Full 3D Flip
            rotateY: 0,
            rotateZ: 0,
            scale: 1,
            duration: 2.5,
            ease: "expo.inOut"
        }, `-=${3 - (i * 0.15)}`); // Staggered dealing
    });

    // --- INTERACTIVE CARDS LOGIC ---
    const cardElements = document.querySelectorAll('.service-card-v2');
    let topZIndex = 50;

    cardElements.forEach(card => {
        const inner = card.querySelector('.card-inner');
        
        // Hover effects: Straighten up and scale
        card.addEventListener('mouseenter', () => {
            const baseRot = parseFloat(card.dataset.rot) || 0;
            // To straighten, we rotate the inner content by the opposite of the outer card's rotation
            gsap.to(inner, { 
                scale: 1.08, 
                rotation: -baseRot, 
                boxShadow: "0 30px 60px rgba(0,0,0,0.4)",
                duration: 0.5, 
                ease: "back.out(1.5)", 
                overwrite: "auto" 
            });
        });
        
        card.addEventListener('mouseleave', () => {
            gsap.to(inner, { 
                scale: 1, 
                rotation: 0, 
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                duration: 0.4, 
                ease: "power2.out", 
                overwrite: "auto" 
            });
        });

        // Click to animate to front of stack
        card.addEventListener('click', () => {
            if (gsap.isTweening(card)) return; // Prevent spam clicking

            topZIndex++;
            
            // Step 1: Slide card out (upwards)
            gsap.to(card, {
                y: "-=100", // slide up
                scale: 1.05,
                duration: 0.3,
                ease: "power2.out",
                onComplete: () => {
                    // Step 2: Change Z-index while it's "out"
                    card.style.zIndex = topZIndex;
                    
                    // Step 3: Slide it back into place
                    gsap.to(card, {
                        y: "+=100", // slide back down
                        scale: 1,
                        duration: 0.4,
                        ease: "back.out(1.5)"
                    });
                }
            });
        });
    });

    // Initialize Scroll Reveal for new sections
    setTimeout(() => {
        const revealElements = document.querySelectorAll('.reveal-elem');
        revealElements.forEach(el => {
            gsap.fromTo(el, 
                { y: 60, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });
    }, 1000);
}
