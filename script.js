document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Lenis (Smooth Scroll)
    const lenis = new Lenis({
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
        lenis.raf(time);
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
                let dynamicScale = 1.2; // Default for small text
                
                if (size > 80) dynamicScale = 2.2;
                else if (size > 40) dynamicScale = 1.8;
                else if (size > 20) dynamicScale = 1.5;
                
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

    // 4. Hero Reveal Animation
    const heroTl = gsap.timeline({ defaults: { ease: "power4.out" } });
    heroTl.from(".hero-title", { y: 150, opacity: 0, duration: 1.5, delay: 0.5 })
          .from(".hero-desc", { y: 50, opacity: 0, duration: 1 }, "-=1")
          .from(".hero-cta", { scale: 0.8, opacity: 0, duration: 1 }, "-=0.8");

    // 5. Card Stacking (Services)
    const cards = document.querySelectorAll('.stack-card');
    cards.forEach((card, index) => {
        if (index === 0) return;
        gsap.to(cards[index - 1], {
            scale: 0.9,
            opacity: 0.5,
            scrollTrigger: {
                trigger: card,
                start: "top 80%",
                end: "top 20%",
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

    // 9. Smart Header Color Toggle
    const header = document.getElementById('main-header');
    const darkSections = document.querySelectorAll('section.bg-dark, section.bg-zinc-900, footer.bg-dark');
    
    if (header && darkSections.length > 0) {
        darkSections.forEach(section => {
            ScrollTrigger.create({
                trigger: section,
                start: "top 50px", // When the dark section reaches near the top (header area)
                end: "bottom 50px",
                onEnter: () => header.classList.add('text-invert'),
                onLeave: () => header.classList.remove('text-invert'),
                onEnterBack: () => header.classList.add('text-invert'),
                onLeaveBack: () => header.classList.remove('text-invert'),
            });
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
        lenis.start();
    }

    if (menu && menuToggle) {
        menuToggle.addEventListener('click', () => {
            if (!isMenuOpen) {
                isMenuOpen = true;
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
                gsap.fromTo('.menu-link', 
                    { y: "100%" }, 
                    { y: "0%", duration: 1.2, ease: "power4.out", stagger: 0.15, delay: 0.4 }
                );
                menuToggle.innerText = "CLOSE";
                lenis.stop();
            } else {
                if (header && !headerOriginalState) {
                    header.classList.remove('text-invert');
                }
                closeMenu();
            }
        });

        // Close menu when a link is clicked
        menuLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const targetId = link.getAttribute('href');
                if (targetId && targetId.startsWith('#')) {
                    e.preventDefault();
                    closeMenu();
                    // We use Lenis to scroll to the target section smoothly
                    lenis.scrollTo(targetId);
                } else if (targetId) {
                    e.preventDefault(); // Ensure no conflict
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
                start: "top 80%",
                toggleActions: "play reverse play reverse"
            }
        });
    });
});
