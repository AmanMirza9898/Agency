document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Lenis (Smooth Scroll)
    window.lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
    });

    function raf(time) {
        window.lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // 2. Custom Cursor Logic
    const cursor = document.getElementById('cursor');
    const follower = document.getElementById('cursor-follower');
    
    if (cursor && follower) {
        gsap.set(cursor, { xPercent: -50, yPercent: -50 });
        gsap.set(follower, { xPercent: -50, yPercent: -50 });

        window.addEventListener('mousemove', (e) => {
            gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.1 });
            gsap.to(follower, { x: e.clientX, y: e.clientY, duration: 0.3 });
        });

        const interactives = document.querySelectorAll('a, button, .magnetic, .bento-item, .stack-card, h1, h2, h3, .menu-link');
        interactives.forEach(el => {
            el.addEventListener('mouseenter', () => {
                const fontSize = window.getComputedStyle(el).fontSize;
                const size = parseInt(fontSize);
                let dynamicScale = 1.0; // Default for small text
                
                if (size > 80) dynamicScale = 1.6;
                else if (size > 40) dynamicScale = 1.4;
                else if (size > 20) dynamicScale = 1.2;
                
                follower.classList.add('invert-backdrop');
                gsap.to(follower, { 
                    scale: dynamicScale, 
                    duration: 0.3 
                });
                gsap.to(cursor, { scale: 0, duration: 0.3 });
            });
            el.addEventListener('mouseleave', () => {
                follower.classList.remove('invert-backdrop');
                gsap.to(follower, { scale: 1, duration: 0.3 });
                gsap.to(cursor, { scale: 1, duration: 0.3 });
            });
        });
    }

    // 3. Magnetic Effect Logic
    const magneticElements = document.querySelectorAll('.magnetic');
    magneticElements.forEach(el => {
        el.addEventListener('mousemove', (e) => {
            const bounds = el.getBoundingClientRect();
            const x = e.clientX - bounds.left - bounds.width / 2;
            const y = e.clientY - bounds.top - bounds.height / 2;
            gsap.to(el, { x: x * 0.5, y: y * 0.5, duration: 0.3, ease: "power2.out" });
        });
        el.addEventListener('mouseleave', () => {
            gsap.to(el, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.3)" });
        });
    });

    // 4. Hero Reveal Animation (Safety check for existence)
    if (document.querySelector('.hero-title')) {
        const heroTl = gsap.timeline({ defaults: { ease: "power4.out" } });
        heroTl.from(".hero-title", { y: 150, opacity: 0, duration: 1.5, delay: 0.5 })
              .from(".hero-desc", { y: 50, opacity: 0, duration: 1 }, "-=1")
              .from(".hero-cta", { scale: 0.8, opacity: 0, duration: 1 }, "-=0.8");
    }

    // 5. Card Stacking (Services)
    const cards = document.querySelectorAll('.stack-card');
    cards.forEach((card, index) => {
        if (index === 0) return;
        gsap.to(cards[index - 1], {
            scale: 0.95,
            opacity: 0.3,
            rotateX: -10,
            y: -50,
            filter: "blur(10px)",
            scrollTrigger: {
                trigger: card,
                start: "top 90%",
                end: "top 10%",
                scrub: true,
            }
        });
    });

    // 6. Horizontal Scroll (Projects)
    const horizontalWrapper = document.querySelector('.horizontal-wrapper');
    if (horizontalWrapper) {
        gsap.to(horizontalWrapper, {
            x: () => -(horizontalWrapper.scrollWidth - window.innerWidth),
            ease: "none",
            scrollTrigger: {
                trigger: "#projects",
                start: "top top",
                end: () => `+=${horizontalWrapper.scrollWidth}`,
                scrub: 1,
                pin: true,
                invalidateOnRefresh: true,
            }
        });
    }

    // 7. Process Progress Bar
    const processProgressBar = document.getElementById('process-progress');
    if (processProgressBar) {
        gsap.to(processProgressBar, {
            height: "100%",
            ease: "none",
            scrollTrigger: {
                trigger: "#process",
                start: "top center",
                end: "bottom center",
                scrub: true
            }
        });
    }

    // 8. Promise Hand Parallax Animation
    const promiseHand = document.querySelector('.promise-hand');
    if (promiseHand) {
        gsap.to(promiseHand, {
            y: -150,
            rotation: -5,
            ease: "none",
            scrollTrigger: {
                trigger: "#home",
                start: "top top",
                end: "bottom top",
                scrub: 1
            }
        });
    }

    // 9. Smart Header Color Toggle (Intersection Observer - High Performance)
    const header = document.getElementById('main-header');
    const darkSections = document.querySelectorAll('section.bg-dark, section.bg-zinc-900, footer.bg-dark, .svc-footer-dark, .svc-cta-dark, footer');
    
    if (header && darkSections.length > 0) {
        const observerOptions = {
            root: null,
            rootMargin: '-60px 0px -90% 0px', // Precise detection at the header area
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    header.classList.add('text-invert');
                } else {
                    // Only remove if no other dark section is intersecting
                    const stillOverDark = Array.from(entries).some(e => e.target !== entry.target && e.isIntersecting);
                    if (!stillOverDark) {
                        // Double check with all sections
                        let currentlyOver = false;
                        darkSections.forEach(s => {
                            const rect = s.getBoundingClientRect();
                            if (rect.top <= 80 && rect.bottom >= 0) currentlyOver = true;
                        });
                        if (!currentlyOver) header.classList.remove('text-invert');
                    }
                }
            });
        }, observerOptions);

        darkSections.forEach(section => observer.observe(section));

        // Fallback for ScrollTrigger sync
        ScrollTrigger.create({
            start: 0,
            end: "max",
            onUpdate: () => {
                let overDark = false;
                darkSections.forEach(s => {
                    const rect = s.getBoundingClientRect();
                    if (rect.top <= 80 && rect.bottom >= 0) overDark = true;
                });
                if (overDark) header.classList.add('text-invert');
                else header.classList.remove('text-invert');
            }
        });
    }

    // 10. Menu Toggle Logic
    const menu = document.getElementById('menu');
    const menuToggle = document.getElementById('menu-toggle');
    const menuLinks = document.querySelectorAll('.menu-link');
    let isMenuOpen = false;
    let headerOriginalState = false;

    function closeMenu() {
        if (!isMenuOpen) return;
        isMenuOpen = false;
        
        // Restore header logo if it wasn't inverted before
        if (header && !headerOriginalState) {
            header.classList.remove('text-invert');
        }

        gsap.to(menu, { 
            clipPath: "circle(0% at 95% 5%)", 
            duration: 1.2, 
            ease: "power4.inOut",
            onComplete: () => {
                menu.classList.add('hidden');
                menu.classList.remove('flex');
            }
        });
        menuToggle.innerText = "MENU";
        window.lenis.start();
    }

    if (menu && menuToggle) {
        menuToggle.addEventListener('click', () => {
            if (!isMenuOpen) {
                isMenuOpen = true;
                // Force white logo for dark menu
                if (header) {
                    headerOriginalState = header.classList.contains('text-invert');
                    header.classList.add('text-invert');
                }
                menu.classList.remove('hidden');
                menu.classList.add('flex');
                gsap.fromTo(menu, 
                    { clipPath: "circle(0% at 95% 5%)" }, 
                    { clipPath: "circle(150% at 95% 5%)", duration: 1.2, ease: "power4.inOut" }
                );
                // Animate links
                gsap.fromTo('.menu-link', 
                    { y: "100%" }, 
                    { y: "0%", duration: 1.2, ease: "power4.out", stagger: 0.15, delay: 0.4 }
                );
                menuToggle.innerText = "CLOSE";
                window.lenis.stop();
            } else {
                if (header && !headerOriginalState) {
                    header.classList.remove('text-invert');
                }
                closeMenu();
            }
        }); 

        menuLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const targetId = link.getAttribute('href');
                if (targetId && targetId.startsWith('#')) {
                    e.preventDefault();
                    closeMenu();
                    // We use Lenis to scroll to the target section smoothly
                    window.lenis.scrollTo(targetId);
                } else if (targetId) {
                    e.preventDefault();
                    window.location.href = targetId;
                }
            });
        });
    }

    // 9. Bento Grid Hover Effects
    const bentoItems = document.querySelectorAll('.bento-item');
    bentoItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            gsap.to(item, { scale: 1.02, duration: 0.3, ease: "power2.out" });
        });
        item.addEventListener('mouseleave', () => {
            gsap.to(item, { scale: 1, duration: 0.3, ease: "power2.out" });
        });
    });

    // 10. Reveal Animations for sections
    const reveals = document.querySelectorAll('section');
    reveals.forEach(section => {
        gsap.from(section.querySelectorAll('h2, .bento-grid, .process-step, .testimonial-card'), {
            y: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            scrollTrigger: {
                trigger: section,
                start: "top 85%",
                toggleActions: "play none none none"
            }
        });
    });

    // 11. Floating Animation for Tag Bento Items
    const tagBentoItems = document.querySelectorAll('.tag-bento-item');
    tagBentoItems.forEach((item, index) => {
        gsap.to(item, {
            y: "random(-10, 10)",
            x: "random(-5, 5)",
            rotation: "random(-1, 1)",
            duration: "random(2, 4)",
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: index * 0.1
        });
    });
});
