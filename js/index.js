/**
 * Index Page Specific Interactions
 * Handles Hero Ripples and Work Stack Parallax
 */

$(document).ready(function() {
    try {
        const $hero = $('#home');
        const $content = $('.hero-content');
        const displacementMap = document.querySelector('#liquid-wave-fe');

        // 1. Hero Water Ripples Initialization
        $hero.ripples({
            resolution: 128,
            dropRadius: 20,
            perturbance: 0.03,
            interactive: true
        });

        // 2. Automatic Water Drop (Ambient Effect)
        setInterval(function() {
            const x = Math.random() * $hero.outerWidth();
            const y = Math.random() * $hero.outerHeight();
            $hero.ripples('drop', x, y, 15, 0.02);
        }, 4000);

        // 3. Smooth Mouse-Parallax (Hero Text)
        $hero.on('mousemove', function(e) {
            const x = (e.clientX - window.innerWidth / 2) / 80;
            const y = (e.clientY - window.innerHeight / 2) / 80;
            gsap.to($content, { x: x, y: y, duration: 1.5, ease: "sine.out", overwrite: "auto" });
        });

        // 4. Liquid Distortion Trigger (SVG Filter)
        $hero.on('mouseenter', function() {
            if (displacementMap) {
                gsap.to(displacementMap, { attr: { scale: 30 }, duration: 0.6, ease: "power2.out" });
            }
            gsap.to(['#cursor', '#cursor-follower'], { opacity: 0, duration: 0.3 });
        });

        $hero.on('mouseleave', function() {
            if (displacementMap) {
                gsap.to(displacementMap, { attr: { scale: 0 }, duration: 0.8, ease: "power2.inOut" });
            }
            gsap.to(['#cursor', '#cursor-follower'], { opacity: 1, duration: 0.3 });
        });

        // 5. Work Stack Interactions (3D Depth + Subtle Lift)
        // 5. Work Stack Interactions (Static Stack + Hover Popup)
        const $cards = $('.work-card');
        const $stackContainer = $('#stack-container');

        if ($stackContainer.length) {
            $cards.on('mouseenter', function() {
                $(this).addClass('is-active');
                
                // Get current transform from style or computed
                const currentTransform = $(this).css('transform');
                
                gsap.to(this, {
                    y: "-=60", // Lift relative to its base diagonal position
                    translateZ: 150, 
                    scale: 1.05,
                    duration: 0.5,
                    ease: "power2.out",
                    overwrite: true,
                    zIndex: 50
                });
            });

            $cards.on('mouseleave', function() {
                $(this).removeClass('is-active');
                const index = $(this).index();
                const zIndex = 10 - index;
                
                gsap.to(this, {
                    y: 0, // Return to base diagonal position
                    translateZ: 0,
                    scale: 1,
                    duration: 0.5,
                    ease: "power2.inOut",
                    overwrite: true,
                    zIndex: zIndex
                });
            });
        }

    } catch (e) {
        console.warn("Index initialization notice:", e.message);
    }
});
