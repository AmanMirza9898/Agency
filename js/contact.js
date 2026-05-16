// Hero Reveal
window.addEventListener('load', () => {
    gsap.from(".hero-sub", { opacity: 0, y: 50, duration: 1, delay: 0.5 });
    gsap.from(".hero-main", { opacity: 0, y: 100, duration: 1.5, delay: 0.7, ease: "power4.out" });
    
    ScrollTrigger.refresh();
});

// Scroll Reveals
gsap.utils.toArray('.reveal').forEach(el => {
    gsap.from(el, {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
            trigger: el,
            start: "top 95%",
            toggleActions: "play none none none"
        }
    });
});
