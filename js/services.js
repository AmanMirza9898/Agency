document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);
    initTabbedServices();
    window.addEventListener('load', () => {
        setTimeout(() => ScrollTrigger.refresh(), 500);
    });
});

/* ─────────────────────────────────────────────────────
   SERVICES DATABASE
   ───────────────────────────────────────────────────── */
const servicesData = {
    website: {
        intro: "Our website design and development services in Gurgaon transform how clients meet you, creating aesthetically functional websites that open your business to new possibilities. We love bringing artistic vision to life, going beyond limits to fulfill our clients' digital dreams, and exceeding expectations every time.",
        items: [
            {
                titlePart1: "Web ",
                titlePart2: "Designing",
                badges: ["UI/UX Design", "Creative"],
                subtitle: "Interactive & Branding Interfaces",
                desc: "When your audience can easily guide, they will want to stay, engage, and enjoy the journey through your content. We are an interactive web designing agency in Gurgaon, passionate about branding your business.",
                image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=900&auto=format&fit=crop",
                fadeColor: "#111111"
            },
            {
                titlePart1: "Ecommerce ",
                titlePart2: "Development",
                badges: ["E-Commerce", "Development"],
                subtitle: "High-Converting Retail Solutions",
                desc: "At our full-service eCommerce web development agency in Gurgaon, we focus on human-centered digital solutions powered by e-commerce. Our team of creative knuckleheads is dedicated to identifying problems and delivering future-ready products that polish your brand.",
                image: "https://images.unsplash.com/photo-1563013544-824ae1d704d3?q=80&w=900&auto=format&fit=crop",
                fadeColor: "#151515"
            },
            {
                titlePart1: "Web ",
                titlePart2: "Development",
                badges: ["Full Stack", "Engineering"],
                subtitle: "Pixel-Perfect Code & Deployments",
                desc: "Our digital natives understand the evolving landscape of technology and design, creating pixel-perfect experiences cut according to your needs while providing full-stack support across all platforms.",
                image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=900&auto=format&fit=crop",
                fadeColor: "#111111"
            },
            {
                titlePart1: "Wordpress ",
                titlePart2: "Web Design",
                badges: ["WordPress", "Custom Themes"],
                subtitle: "SEO-friendly Content Management",
                desc: "We take pride in converting websites into profit-making portals by offering WordPress web design services in Gurgaon that streamline your digital presence. From transforming brands into web masterpieces to making sure future-proof designs, we deliver solutions that make the internet a better place for your customers.",
                image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=900&auto=format&fit=crop",
                fadeColor: "#151515"
            },
            {
                titlePart1: "Wordpress ",
                titlePart2: "Development",
                badges: ["WordPress", "Plugins"],
                subtitle: "Custom Plugins & Integrations",
                desc: "Our commitment at our WordPress web development company, to excellence and innovation means you can trust us to deliver high-quality, user-friendly websites that power up your brand and bring unimaginable results.",
                image: "https://images.unsplash.com/photo-1563013544-824ae1d704d3?q=80&w=900&auto=format&fit=crop",
                fadeColor: "#111111"
            },
            {
                titlePart1: "Magento ",
                titlePart2: "Development",
                badges: ["Magento", "Enterprise"],
                subtitle: "Enterprise-Grade Commerce Platforms",
                desc: "Our Magento development agency stands out because our values are evident in business practices. We provide Magento development services in India that are designed for businesses of all sizes, with a focus on websites that go the extra mile.",
                image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=900&auto=format&fit=crop",
                fadeColor: "#151515"
            },
            {
                titlePart1: "Shopify ",
                titlePart2: "Development",
                badges: ["Shopify", "Store Setup"],
                subtitle: "High-End Shopify Customization",
                desc: "Our Shopify development services in India focus on building solutions that reduce friction, making shopping easy for your customers and driving your business forward. With shopisticated development and a strategic mindset, we help you achieve your eCommerce goals efficiently, without breaking the bank.",
                image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=900&auto=format&fit=crop",
                fadeColor: "#111111"
            },
            {
                titlePart1: "UI/UX ",
                titlePart2: "Design",
                badges: ["UI/UX", "User Research"],
                subtitle: "Human-Centered Product Design",
                desc: "As a trusted UI/UX design company, we focus on creating human-centered digital products that not only meet client needs but also increase customer retention. Our expertise lies in uncovering hidden insights and delivering visionary solutions that consistently exceed expectations, helping your brand thrive in a competitive digital landscape.",
                image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=900&auto=format&fit=crop",
                fadeColor: "#151515"
            },
            {
                titlePart1: "Small Business ",
                titlePart2: "Website",
                badges: ["Small Business", "Startup"],
                subtitle: "Aesthetic Launchpads for Startups",
                desc: "When your company has to survive mounting pressure from both longtime competitors and new market entrants, our small business website design agency equips you with the tools to stay ahead.",
                image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=900&auto=format&fit=crop",
                fadeColor: "#111111"
            },
            {
                titlePart1: "Ecommerce ",
                titlePart2: "Services",
                badges: ["B2C", "B2B", "D2C"],
                subtitle: "Full-Spectrum Commerce Solutions",
                desc: "If your focus is B2C, B2B, or D2C, our ecommerce digital marketing services empower you to expand your footprint and capture new opportunities in your industry. Our team brings the best ecommerce web development practices to every project, focusing on scalability, security, and superior design.",
                image: "https://images.unsplash.com/photo-1563013544-824ae1d704d3?q=80&w=900&auto=format&fit=crop",
                fadeColor: "#151515"
            },
            {
                titlePart1: "Ecommerce ",
                titlePart2: "Selling",
                badges: ["Digital Commerce", "Growth"],
                subtitle: "Seamless Shopping Experiences",
                desc: "Our digital marketing and ecommerce team specializes in creating ecommerce environments that enhance your product offerings, improve customer experiences, and provide a seamless shopping journey. As an ecommerce service provider committed to excellence, we're equipped with a tech-driven team ready to guide you through every stage of your digital journey.",
                image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=900&auto=format&fit=crop",
                fadeColor: "#111111"
            },
            {
                titlePart1: "Ecommerce Products ",
                titlePart2: "Selling",
                badges: ["Products", "Ecommerce"],
                subtitle: "Product-Led Digital Commerce",
                desc: "At our ecommerce company, we're passionate about delivering the tools, strategies, and solutions needed for our clients to thrive in the competitive world of digital commerce. Our commitment to empowering your ecommerce journey with customized solutions guarantees that you can drive sustainable growth, reach new customers, and enhance your operational efficiency.",
                image: "https://images.unsplash.com/photo-1563013544-824ae1d704d3?q=80&w=900&auto=format&fit=crop",
                fadeColor: "#151515"
            },
            {
                titlePart1: "Ecommerce Customer ",
                titlePart2: "Product",
                badges: ["Customer", "Product"],
                subtitle: "Customer-Centric Product Platforms",
                desc: "At our ecommerce company, we're passionate about delivering the tools, strategies, and solutions needed for our clients to thrive in the competitive world of digital commerce. Our commitment to empowering your ecommerce journey with customized solutions, whether it's through e-commerce website design or ecommerce app development, guarantees sustainable growth.",
                image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=900&auto=format&fit=crop",
                fadeColor: "#111111"
            },
            {
                titlePart1: "Ecommerce Stock ",
                titlePart2: "Management",
                badges: ["Inventory", "Stock"],
                subtitle: "Smart Inventory Control Systems",
                desc: "Inventory management involves the entire process of tracking, managing, and optimizing stock levels to ensure products are available when customers need them. By leveraging a highly intuitive ecommerce mobile app and platform, we enable businesses to track inventory across all stages, from receipt to storage and fulfillment.",
                image: "https://images.unsplash.com/photo-1563013544-824ae1d704d3?q=80&w=900&auto=format&fit=crop",
                fadeColor: "#151515"
            },
            {
                titlePart1: "Ecommerce Payment ",
                titlePart2: "Gateway",
                badges: ["Payments", "Integration"],
                subtitle: "Recurring Billing & Gateway Setup",
                desc: "One of the most essential aspects of running a modern ecommerce website is the ability to process recurring payments. With our expertise in payment gateway integration, we help you integrate systems that support automated, recurring billing, allowing businesses to easily manage subscriptions, memberships, and regular transactions.",
                image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=900&auto=format&fit=crop",
                fadeColor: "#111111"
            },
            {
                titlePart1: "Ecommerce Logistic ",
                titlePart2: "Management",
                badges: ["Logistics", "Order"],
                subtitle: "End-to-End Logistics Integration",
                desc: "The modern ecommerce website design isn't just about showcasing products; it's about creating an experience that is as smooth for the business as it is for the customer. We create ecommerce websites that ensure smooth integration between payments, order management, inventory tracking, and logistics.",
                image: "https://images.unsplash.com/photo-1563013544-824ae1d704d3?q=80&w=900&auto=format&fit=crop",
                fadeColor: "#151515"
            },
            {
                titlePart1: "Ecommerce ",
                titlePart2: "Products",
                badges: ["Product Photos", "SEO"],
                subtitle: "Product Showcasing & Photography",
                desc: "In ecommerce, photos are the first thing that grab a customer's attention. Research shows that product photography can have a serious impact on your company's bottom line. Picture perfect shots can boost conversion rates, foster brand trust, and even improve your SEO rankings.",
                image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=900&auto=format&fit=crop",
                fadeColor: "#111111"
            },
            {
                titlePart1: "E-Commerce ",
                titlePart2: "Maintenance",
                badges: ["Maintenance", "Support"],
                subtitle: "Long-Term Store Health & Uptime",
                desc: "Investing in ecommerce website maintenance is more than just a 'good-to-have', it's a necessity for building long-term customer relationships and sustaining consistent sales. Frequent maintenance on your ecommerce web page helps prevent issues that could unexpectedly impact your business.",
                image: "https://images.unsplash.com/photo-1563013544-824ae1d704d3?q=80&w=900&auto=format&fit=crop",
                fadeColor: "#151515"
            },
            {
                titlePart1: "B2C Designing ",
                titlePart2: "Website",
                badges: ["B2C", "Consumer Brand"],
                subtitle: "Engaging Consumer-Facing Sites",
                desc: "Getting online shouldn't be a hassle or a time consuming process. We offer you convenience and quality, allowing you to get up and running with a stunning website in seconds. With our design process and advanced tools, you can go from concept to launch without the usual delays associated with traditional web development.",
                image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=900&auto=format&fit=crop",
                fadeColor: "#111111"
            },
            {
                titlePart1: "Corporate Profile ",
                titlePart2: "Website",
                badges: ["Corporate", "B2B Brand"],
                subtitle: "Professional Business Showcases",
                desc: "As a business profile design company, we understand your business to the core, helping you build a digital profile that speaks volumes about your brand, values, and vision.",
                image: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?q=80&w=900&auto=format&fit=crop",
                fadeColor: "#151515"
            },
            {
                titlePart1: "B2B Designing ",
                titlePart2: "Website",
                badges: ["B2B", "Enterprise"],
                subtitle: "High-Value Business Lead Gen",
                desc: "Our website design services are built on the premise that every organization deserves a website that feels like a million-dollar asset. With lightning-fast load times, flawless navigation, and intelligence embedded in every corner, we design B2B websites that set the pace in an ever-evolving industry.",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=900&auto=format&fit=crop",
                fadeColor: "#111111"
            },
            {
                titlePart1: "Portfolio ",
                titlePart2: "Website",
                badges: ["Showcase", "Creative"],
                subtitle: "Stunning Personal & Agency Work",
                desc: "Our approach to portfolio website design revolves around understanding your unique story and translating it into a digital space that engages, inspires, and converts. We're committed to creating an online hub that reflects your brand's essence, making it easier for visitors to navigate, explore, and connect with your offerings.",
                image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=900&auto=format&fit=crop",
                fadeColor: "#151515"
            },
            {
                titlePart1: "Informative ",
                titlePart2: "Website",
                badges: ["Education", "Content"],
                subtitle: "Resourceful Knowledge Centers",
                desc: "A great branding or informative website doesn't only look appealing, it strategically integrates your brand's unique identity into every element, from visuals to messaging, creating a cohesive experience.",
                image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=900&auto=format&fit=crop",
                fadeColor: "#111111"
            },
            {
                titlePart1: "Branding ",
                titlePart2: "Website",
                badges: ["Branding", "Creative"],
                subtitle: "Brand Identity Driven Layouts",
                desc: "A great branding website doesn't only look appealing, it strategically integrates your brand's unique identity into every element, from visuals to messaging, creating a cohesive digital experience.",
                image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=900&auto=format&fit=crop",
                fadeColor: "#151515"
            },
            {
                titlePart1: "Dynamic ",
                titlePart2: "Website",
                badges: ["Dynamic", "Web App"],
                subtitle: "Real-Time Interactive Platforms",
                desc: "As a web design company in Gurugram with a team of experienced designers and developers, we focus on the latest technologies, tools, and trends to bring your vision to life. Every website we design is more than just a collection of pages, it's a platform that empowers brands and connects them with their audiences.",
                image: "https://images.unsplash.com/photo-1563013544-824ae1d704d3?q=80&w=900&auto=format&fit=crop",
                fadeColor: "#111111"
            }
        ]
    },
    software: {
        intro: "We build custom, scalable software and mobile applications that optimize business operations and offer rich, interactive user experiences. From enterprise platforms to native mobile applications, we cover all layers of design and development.",
        items: [
            {
                titlePart1: "App ",
                titlePart2: "Development",
                badges: ["iOS & Android", "Mobile"],
                subtitle: "Scalable Native & Hybrid Apps",
                desc: "Create frictionless mobile experiences with high performance. We construct applications that become indispensable to your users, blending smooth native speed with user-centric micro-interactions.",
                image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=900&auto=format&fit=crop",
                fadeColor: "#111111"
            },
            {
                titlePart1: "Custom ",
                titlePart2: "SaaS",
                badges: ["SaaS", "Cloud"],
                subtitle: "Robust Business Architecture",
                desc: "Empower your operations with custom enterprise tools built for scale. From database design to high-throughput cloud functions, we architect systems that drive efficiency and growth.",
                image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=900&auto=format&fit=crop",
                fadeColor: "#151515"
            }
        ]
    },
    branding: {
        intro: "Our branding services establish strong visual foundations that help businesses connect with their target audience on an emotional level. We build memorable designs, logo guidelines, packaging details, and full brand books.",
        items: [
            {
                titlePart1: "Visual ",
                titlePart2: "Identity",
                badges: ["Logo Design", "Guidelines"],
                subtitle: "Memorable Visual Foundations",
                desc: "A great brand is a promise kept. We craft visual identities that instantly communicate your core values, combining bespoke typography, harmonious palettes, and clean assets that stand out.",
                image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=900&auto=format&fit=crop",
                fadeColor: "#111111"
            },
            {
                titlePart1: "Packaging ",
                titlePart2: "Design",
                badges: ["Print", "Tactile"],
                subtitle: "Tactile Consumer Experiences",
                desc: "Bring your product story to life in the physical world. Our premium packaging layouts prioritize shelf presence, tactile satisfaction, and sustainable materials that resonate with consumers.",
                image: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?q=80&w=900&auto=format&fit=crop",
                fadeColor: "#151515"
            }
        ]
    },
    marketing: {
        intro: "Drive traffic, generate leads, and capture search intent through data-driven campaigns. We design content strategies, optimize visibility, and run engaging social media ad funnels.",
        items: [
            {
                titlePart1: "SEO ",
                titlePart2: "Optimization",
                badges: ["SEO", "Google Ranking"],
                subtitle: "Organic Traffic Acceleration",
                desc: "Dominate search intent and gain high-quality leads. We optimize site speeds, content structures, and backlink authority to place your brand where your customers are looking.",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=900&auto=format&fit=crop",
                fadeColor: "#111111"
            },
            {
                titlePart1: "SMM ",
                titlePart2: "Campaigns",
                badges: ["SMM", "Social Ads"],
                subtitle: "Viral Brand Engagement",
                desc: "Connect with your audience where they hang out. We design engaging media assets, copy, and ad funnels that spark conversations, build community, and increase brand advocacy.",
                image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=900&auto=format&fit=crop",
                fadeColor: "#151515"
            }
        ]
    }
};

/* Card variant cycle */
const VARIANTS = ['variant-a', 'variant-b', 'variant-c'];

/* ─────────────────────────────────────────────────────
   INIT
   ───────────────────────────────────────────────────── */
function initTabbedServices() {
    const tabs      = document.querySelectorAll('.tab-btn');
    const bubble    = document.querySelector('.tab-active-bubble');
    const introText = document.getElementById('tab-intro-text');
    const cardsList = document.getElementById('services-cards-list');

    let activeTab = document.querySelector('.tab-btn.active') || tabs[0];

    function updateBubble(el, animate = true) {
        if (!el || !bubble) return;
        gsap.to(bubble, {
            left: el.offsetLeft, width: el.offsetWidth,
            height: el.offsetHeight, top: el.offsetTop,
            duration: animate ? 0.45 : 0,
            ease: "power3.out"
        });
    }

    /* ─────────────────────────────────────────────────────
       FLOATING ARROW SETUP
       Two-element trick:
       • outer wrapper  → position only (direct style.transform, zero lag)
       • inner .card-arrow-btn → scale / opacity only (GSAP, only on enter/leave)
       ───────────────────────────────────────────────────── */
    const arrowWrap = document.createElement('div');
    arrowWrap.style.cssText =
        'position:fixed;top:0;left:0;pointer-events:none;z-index:9000;will-change:transform;';

    const floatingArrow = document.createElement('div');
    floatingArrow.className = 'card-arrow-btn';
    floatingArrow.innerHTML = '&#8599;';
    floatingArrow.style.cssText = 'position:relative;opacity:0;transform:scale(0);';

    arrowWrap.appendChild(floatingArrow);
    document.body.appendChild(arrowWrap);

    const ARROW_HALF = 36; // 72px arrow → 36px offset to center on cursor

    // ── Global mousemove: direct style.transform = ZERO JS overhead ──
    window.addEventListener('mousemove', (e) => {
        arrowWrap.style.transform =
            `translate(${e.clientX - ARROW_HALF}px, ${e.clientY - ARROW_HALF}px)`;
    }, { passive: true });

    setTimeout(() => updateBubble(activeTab, false), 150);
    window.addEventListener('resize', () => updateBubble(activeTab, false));

    /* ── Render Cards ─────────────────────────────── */
    function renderTabContent(category) {
        tabs.forEach(t => t.classList.remove('active'));
        const targetTab = document.querySelector(`.tab-btn[data-tab="${category}"]`);
        if (targetTab) { targetTab.classList.add('active'); activeTab = targetTab; updateBubble(activeTab, true); }

        const data = servicesData[category];
        if (!data) return;

        if (introText) introText.innerHTML = data.intro;

        if (cardsList) {
            cardsList.innerHTML = '';

            data.items.forEach((item, index) => {
                const variant = VARIANTS[index % VARIANTS.length];
                const card = document.createElement('div');
                card.className = `premium-card ${variant}`;

                card.innerHTML = `
                    <!-- LEFT: text content -->
                    <div class="premium-card-left">
                        <div class="premium-card-badges">
                            ${item.badges.map(b => `<span class="premium-badge">${b}</span>`).join('')}
                        </div>
                        <div>
                            <p class="premium-card-subtitle">${item.subtitle}</p>
                            <h3 class="premium-card-title">
                                ${item.titlePart1}<span class="premium-card-title-muted">${item.titlePart2}</span>
                            </h3>
                        </div>
                    </div>

                    <!-- RIGHT: image -->
                    <div class="premium-card-right">
                        <div class="premium-card-image-wrapper">
                            <img class="premium-card-image"
                                src="${item.image}"
                                alt="${item.titlePart1}${item.titlePart2}"
                                loading="lazy">
                            <div class="premium-card-image-mask"
                                style="background:linear-gradient(90deg,${item.fadeColor} 0%,transparent 55%)">
                            </div>
                        </div>
                    </div>
                `;

                /* Click → open modal */
                card.addEventListener('click', () => {
                    openServiceModal(item.titlePart1 + item.titlePart2, item.desc, item.image);
                });

                // mouseenter → GSAP scale/opacity only (position already at cursor via global listener)
                card.addEventListener('mouseenter', () => {
                    document.getElementById('cursor')?.classList.add('explore-state');
                    document.getElementById('cursor-follower')?.classList.add('explore-state');
                    gsap.killTweensOf(floatingArrow);
                    gsap.to(floatingArrow, {
                        opacity: 1, scale: 1,
                        duration: 0.25, ease: 'back.out(1.7)',
                        overwrite: true
                    });
                });

                // mouseleave → hide only
                card.addEventListener('mouseleave', () => {
                    document.getElementById('cursor')?.classList.remove('explore-state');
                    document.getElementById('cursor-follower')?.classList.remove('explore-state');
                    gsap.killTweensOf(floatingArrow);
                    gsap.to(floatingArrow, {
                        opacity: 0, scale: 0.3,
                        duration: 0.18, ease: 'power2.in',
                        overwrite: true
                    });
                });

                cardsList.appendChild(card);
            });

            /* Entrance animation — force3D prevents GPU flicker */
            gsap.fromTo(cardsList.children,
                { opacity: 0, y: 60, force3D: true },
                { opacity: 1, y: 0,  force3D: true, duration: 0.75, stagger: 0.1, ease: "power3.out" }
            );
        }
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', () => renderTabContent(tab.getAttribute('data-tab')));
        tab.addEventListener('mouseenter', () => updateBubble(tab, true));
    });

    const tabCapsule = document.querySelector('.tab-capsule');
    if (tabCapsule) tabCapsule.addEventListener('mouseleave', () => updateBubble(activeTab, true));

    renderTabContent('website');
}

/* ─────────────────────────────────────────────────────
   MODAL
   ───────────────────────────────────────────────────── */
function openServiceModal(title, desc, image) {
    const modal = document.getElementById('service-detail-view');
    if (!modal) return;

    modal.querySelector('.detail-title').textContent  = title;
    modal.querySelector('.detail-desc').textContent   = desc;
    modal.querySelector('.detail-image-side img').src = image;

    modal.classList.add('active');
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    gsap.fromTo(modal.querySelector('.detail-container'),
        { opacity: 0, scale: 0.9, y: 50 },
        { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: "back.out(1.5)" }
    );
}

function closeServiceModal() {
    const modal = document.getElementById('service-detail-view');
    if (!modal) return;
    gsap.to(modal.querySelector('.detail-container'), {
        opacity: 0, scale: 0.9, y: 50, duration: 0.4, ease: "power2.in",
        onComplete: () => {
            modal.classList.remove('active');
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const modalClose = document.querySelector('.detail-close-btn');
    if (modalClose) modalClose.addEventListener('click', closeServiceModal);

    const modal = document.getElementById('service-detail-view');
    if (modal) modal.addEventListener('click', e => {
        if (e.target === modal) closeServiceModal();
    });
});