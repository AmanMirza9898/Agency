window.addEventListener('load', () => {
    // Hero Animations
    gsap.from(".work-hero-text", {
        y: 200,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
        delay: 0.2
    });
    gsap.from(".hero-sub", {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.8
    });

    // Parallax Images
    gsap.utils.toArray('.parallax-img').forEach(img => {
        gsap.to(img, {
            y: "10%",
            ease: "none",
            scrollTrigger: {
                trigger: img.parentElement,
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        });
    });

    // Reveal Project Info
    gsap.utils.toArray('.project-info').forEach(info => {
        gsap.from(info, {
            y: 40,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: info,
                start: "top 95%",
                toggleActions: "play none none none"
            }
        });
    });

    // Filter Buttons Interaction
    const filters = document.querySelectorAll('.filter-btn');
    filters.forEach(btn => {
        btn.addEventListener('click', () => {
            filters.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Simple Filter Logic (Visual Only for now)
            gsap.to('.project-card', {
                opacity: 0.3,
                scale: 0.98,
                duration: 0.4,
                onComplete: () => {
                    gsap.to('.project-card', { opacity: 1, scale: 1, duration: 0.6, stagger: 0.1 });
                }
            });
        });
    });
});
