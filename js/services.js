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
        previewImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
        intro: "Our website design and development services in Gurgaon transform how clients meet you, creating aesthetically functional websites that open your business to new possibilities. We love bringing artistic vision to life, going beyond limits to fulfill our clients' digital dreams, and exceeding expectations every time.",
        items: [
            {
                titlePart1: "Web ",
                titlePart2: "Designing",
                badges: ["UI/UX Design", "Creative"],
                subtitle: "Interactive & Branding Interfaces",
                desc: "When your audience can easily guide, they will want to stay, engage, and enjoy the journey through your content. We are an interactive web designing agency in Gurgaon, passionate about branding your business.",
                image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=900&auto=format&fit=crop",
                fadeColor: "#111111"
            },
            {
                titlePart1: "Ecommerce ",
                titlePart2: "Development",
                badges: ["E-Commerce", "Development"],
                subtitle: "High-Converting Retail Solutions",
                desc: "At our full-service eCommerce web development agency in Gurgaon, we focus on human-centered digital solutions powered by e-commerce. Our team of creative knuckleheads is dedicated to identifying problems and delivering future-ready products that polish your brand.",
                image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=900&auto=format&fit=crop",
                fadeColor: "#151515"
            },
            {
                titlePart1: "Web ",
                titlePart2: "Development",
                badges: ["Full Stack", "Engineering"],
                subtitle: "Pixel-Perfect Code & Deployments",
                desc: "Our digital natives understand the evolving landscape of technology and design, creating pixel-perfect experiences cut according to your needs while providing full-stack support across all platforms.",
                image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=900&auto=format&fit=crop",
                fadeColor: "#111111"
            },
            {
                titlePart1: "Wordpress ",
                titlePart2: "Web Design",
                badges: ["WordPress", "Custom Themes"],
                subtitle: "SEO-friendly Content Management",
                desc: "We take pride in converting websites into profit-making portals by offering WordPress web design services in Gurgaon that streamline your digital presence. From transforming brands into web masterpieces to making sure future-proof designs, we deliver solutions that make the internet a better place for your customers.",
                image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=900&auto=format&fit=crop",
                fadeColor: "#151515"
            },
            {
                titlePart1: "Wordpress ",
                titlePart2: "Development",
                badges: ["WordPress", "Plugins"],
                subtitle: "Custom Plugins & Integrations",
                desc: "Our commitment at our WordPress web development company, to excellence and innovation means you can trust us to deliver high-quality, user-friendly websites that power up your brand and bring unimaginable results.",
                image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=900&auto=format&fit=crop",
                fadeColor: "#111111"
            },
            {
                titlePart1: "Magento ",
                titlePart2: "Development",
                badges: ["Magento", "Enterprise"],
                subtitle: "Enterprise-Grade Commerce Platforms",
                desc: "Our Magento development agency stands out because our values are evident in business practices. We provide Magento development services in India that are designed for businesses of all sizes, with a focus on websites that go the extra mile.",
                image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=900&auto=format&fit=crop",
                fadeColor: "#151515"
            },
            {
                titlePart1: "Shopify ",
                titlePart2: "Development",
                badges: ["Shopify", "Store Setup"],
                subtitle: "High-End Shopify Customization",
                desc: "Our Shopify development services in India focus on building solutions that reduce friction, making shopping easy for your customers and driving your business forward. With shopisticated development and a strategic mindset, we help you achieve your eCommerce goals efficiently, without breaking the bank.",
                image: "https://images.unsplash.com/photo-1563013544-824ae1d704d3?q=80&w=900&auto=format&fit=crop",
                fadeColor: "#111111"
            },
            {
                titlePart1: "UI/UX ",
                titlePart2: "Design",
                badges: ["UI/UX", "User Research"],
                subtitle: "Human-Centered Product Design",
                desc: "As a trusted UI/UX design company, we focus on creating human-centered digital products that not only meet client needs but also increase customer retention. Our expertise lies in uncovering hidden insights and delivering visionary solutions that consistently exceed expectations, helping your brand thrive in a competitive digital landscape.",
                image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=900&auto=format&fit=crop",
                fadeColor: "#151515"
            },
            {
                titlePart1: "Small Business ",
                titlePart2: "Website",
                badges: ["Small Business", "Startup"],
                subtitle: "Aesthetic Launchpads for Startups",
                desc: "When your company has to survive mounting pressure from both longtime competitors and new market entrants, our small business website design agency equips you with the tools to stay ahead.",
                image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=900&auto=format&fit=crop",
                fadeColor: "#111111"
            },
            {
                titlePart1: "Ecommerce ",
                titlePart2: "Services",
                badges: ["B2C", "B2B", "D2C"],
                subtitle: "Full-Spectrum Commerce Solutions",
                desc: "If your focus is B2C, B2B, or D2C, our ecommerce digital marketing services empower you to expand your footprint and capture new opportunities in your industry. Our team brings the best ecommerce web development practices to every project, focusing on scalability, security, and superior design.",
                image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=900&auto=format&fit=crop",
                fadeColor: "#151515"
            },
            {
                titlePart1: "Ecommerce ",
                titlePart2: "Selling",
                badges: ["Digital Commerce", "Growth"],
                subtitle: "Seamless Shopping Experiences",
                desc: "Our digital marketing and ecommerce team specializes in creating ecommerce environments that enhance your product offerings, improve customer experiences, and provide a seamless shopping journey. As an ecommerce service provider committed to excellence, we're equipped with a tech-driven team ready to guide you through every stage of your digital journey.",
                image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=900&auto=format&fit=crop",
                fadeColor: "#111111"
            },
            {
                titlePart1: "Ecommerce Products ",
                titlePart2: "Selling",
                badges: ["Products", "Ecommerce"],
                subtitle: "Product-Led Digital Commerce",
                desc: "At our ecommerce company, we're passionate about delivering the tools, strategies, and solutions needed for our clients to thrive in the competitive world of digital commerce. Our commitment to empowering your ecommerce journey with customized solutions guarantees that you can drive sustainable growth, reach new customers, and enhance your operational efficiency.",
                image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=900&auto=format&fit=crop",
                fadeColor: "#151515"
            },
            {
                titlePart1: "Ecommerce Customer ",
                titlePart2: "Product",
                badges: ["Customer", "Product"],
                subtitle: "Customer-Centric Product Platforms",
                desc: "At our ecommerce company, we're passionate about delivering the tools, strategies, and solutions needed for our clients to thrive in the competitive world of digital commerce. Our commitment to empowering your ecommerce journey with customized solutions, whether it's through e-commerce website design or ecommerce app development, guarantees sustainable growth.",
                image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=900&auto=format&fit=crop",
                fadeColor: "#111111"
            },
            {
                titlePart1: "Ecommerce Stock ",
                titlePart2: "Management",
                badges: ["Inventory", "Stock"],
                subtitle: "Smart Inventory Control Systems",
                desc: "Inventory management involves the entire process of tracking, managing, and optimizing stock levels to ensure products are available when customers need them. By leveraging a highly intuitive ecommerce mobile app and platform, we enable businesses to track inventory across all stages, from receipt to storage and fulfillment.",
                image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=900&auto=format&fit=crop",
                fadeColor: "#151515"
            },
            {
                titlePart1: "Ecommerce Payment ",
                titlePart2: "Gateway",
                badges: ["Payments", "Integration"],
                subtitle: "Recurring Billing & Gateway Setup",
                desc: "One of the most essential aspects of running a modern ecommerce website is the ability to process recurring payments. With our expertise in payment gateway integration, we help you integrate systems that support automated, recurring billing, allowing businesses to easily manage subscriptions, memberships, and regular transactions.",
                image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=900&auto=format&fit=crop",
                fadeColor: "#111111"
            },
            {
                titlePart1: "Ecommerce Logistic ",
                titlePart2: "Management",
                badges: ["Logistics", "Order"],
                subtitle: "End-to-End Logistics Integration",
                desc: "The modern ecommerce website design isn't just about showcasing products; it's about creating an experience that is as smooth for the business as it is for the customer. We create ecommerce websites that ensure smooth integration between payments, order management, inventory tracking, and logistics.",
                image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=900&auto=format&fit=crop",
                fadeColor: "#151515"
            },
            {
                titlePart1: "Ecommerce ",
                titlePart2: "Products",
                badges: ["Product Photos", "SEO"],
                subtitle: "Product Showcasing & Photography",
                desc: "In ecommerce, photos are the first thing that grab a customer's attention. Research shows that product photography can have a serious impact on your company's bottom line. Picture perfect shots can boost conversion rates, foster brand trust, and even improve your SEO rankings.",
                image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=900&auto=format&fit=crop",
                fadeColor: "#111111"
            },
            {
                titlePart1: "E-Commerce ",
                titlePart2: "Maintenance",
                badges: ["Maintenance", "Support"],
                subtitle: "Long-Term Store Health & Uptime",
                desc: "Investing in ecommerce website maintenance is more than just a 'good-to-have', it's a necessity for building long-term customer relationships and sustaining consistent sales. Frequent maintenance on your ecommerce web page helps prevent issues that could unexpectedly impact your business.",
                image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=900&auto=format&fit=crop",
                fadeColor: "#151515"
            },
            {
                titlePart1: "B2C Designing ",
                titlePart2: "Website",
                badges: ["B2C", "Consumer Brand"],
                subtitle: "Engaging Consumer-Facing Sites",
                desc: "Getting online shouldn't be a hassle or a time consuming process. We offer you convenience and quality, allowing you to get up and running with a stunning website in seconds. With our design process and advanced tools, you can go from concept to launch without the usual delays associated with traditional web development.",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=900&auto=format&fit=crop",
                fadeColor: "#111111"
            },
            {
                titlePart1: "Corporate Profile ",
                titlePart2: "Website",
                badges: ["Corporate", "B2B Brand"],
                subtitle: "Professional Business Showcases",
                desc: "As a business profile design company, we understand your business to the core, helping you build a digital profile that speaks volumes about your brand, values, and vision.",
                image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=900&auto=format&fit=crop",
                fadeColor: "#151515"
            },
            {
                titlePart1: "B2B Designing ",
                titlePart2: "Website",
                badges: ["B2B", "Enterprise"],
                subtitle: "High-Value Business Lead Gen",
                desc: "Our website design services are built on the premise that every organization deserves a website that feels like a million-dollar asset. With lightning-fast load times, flawless navigation, and intelligence embedded in every corner, we design B2B websites that set the pace in an ever-evolving industry.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=900&auto=format&fit=crop",
                fadeColor: "#111111"
            },
            {
                titlePart1: "Portfolio ",
                titlePart2: "Website",
                badges: ["Showcase", "Creative"],
                subtitle: "Stunning Personal & Agency Work",
                desc: "Our approach to portfolio website design revolves around understanding your unique story and translating it into a digital space that engages, inspires, and converts. We're committed to creating an online hub that reflects your brand's essence, making it easier for visitors to navigate, explore, and connect with your offerings.",
                image: "https://images.unsplash.com/photo-1507238692062-5a042e9e5e6e?q=80&w=900&auto=format&fit=crop",
                fadeColor: "#151515"
            },
            {
                titlePart1: "Informative ",
                titlePart2: "Website",
                badges: ["Education", "Content"],
                subtitle: "Resourceful Knowledge Centers",
                desc: "A great branding or informative website doesn't only look appealing, it strategically integrates your brand's unique identity into every element, from visuals to messaging, creating a cohesive experience.",
                image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=900&auto=format&fit=crop",
                fadeColor: "#111111"
            },
            {
                titlePart1: "Branding ",
                titlePart2: "Website",
                badges: ["Branding", "Creative"],
                subtitle: "Brand Identity Driven Layouts",
                desc: "A great branding website doesn't only look appealing, it strategically integrates your brand's unique identity into every element, from visuals to messaging, creating a cohesive digital experience.",
                image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=900&auto=format&fit=crop",
                fadeColor: "#151515"
            },
            {
                titlePart1: "Dynamic ",
                titlePart2: "Website",
                badges: ["Dynamic", "Web App"],
                subtitle: "Real-Time Interactive Platforms",
                desc: "As a web design company in Gurugram with a team of experienced designers and developers, we focus on the latest technologies, tools, and trends to bring your vision to life. Every website we design is more than just a collection of pages, it's a platform that empowers brands and connects them with their audiences.",
                image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=900&auto=format&fit=crop",
                fadeColor: "#111111"
            }
        ]
    },
    software: {
        previewImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop",
        intro: "We build custom, scalable software and mobile applications that optimize business operations and offer rich, interactive user experiences. From enterprise platforms to native mobile applications, we cover all layers of design and development.",
        items: [
            {
                titlePart1: "Custom Software ",
                titlePart2: "Development",
                badges: ["Custom Software", "Enterprise"],
                subtitle: "Enterprise-grade platforms and MVPs",
                desc: "Looking to build the next big thing? From enterprise-grade platforms to lean MVPs, Prettify Creative stands tall among India's top software development companies. Partner with Prettify Creative, your reliable custom software development company in India. Let's build something incredible together.",
                image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=900&auto=format&fit=crop",
                fadeColor: "#111111"
            },
            {
                titlePart1: "Mobile App ",
                titlePart2: "Development",
                badges: ["iOS", "Android"],
                subtitle: "Stand out from the rest",
                desc: "Partner with our mobile app developer agency to stand out from the rest. An app from the right mobile app developer company gives your brand an edge, pushing you ahead of the competition.",
                image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=900&auto=format&fit=crop",
                fadeColor: "#151515"
            },
            {
                titlePart1: "Android Application ",
                titlePart2: "Development",
                badges: ["Android", "Native", "Hybrid"],
                subtitle: "Data and performance-centered solutions",
                desc: "With our android application development company, we transform digital ideas into real business results. Whether you need a native or hybrid app, our hand-chosen team delivers solutions that are data and performance-centered. From initial concepts to a polished final product, we're defining the way forward in mobile app development with our mission-critical approach to your success.",
                image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?q=80&w=900&auto=format&fit=crop",
                fadeColor: "#111111"
            },
            {
                titlePart1: "iPhone Application ",
                titlePart2: "Development",
                badges: ["iOS", "Apple"],
                subtitle: "Thrive in a tightly controlled environment",
                desc: "The first wave of users brings invaluable data, helping your business gain user traction. Our team offers unmatched flexibility, ensuring you can adapt without breaking the bank. With our expertise, your app thrives in a tightly controlled environment.",
                image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=900&auto=format&fit=crop",
                fadeColor: "#151515"
            },
            {
                titlePart1: "Real Estate Software ",
                titlePart2: "Development",
                badges: ["Real Estate", "PropTech"],
                subtitle: "User-friendly, innovative platforms",
                desc: "We design custom property management software and real estate management software that boost sales and enhance client experiences. Whether you need the property management software or real estate software, our expert team delivers user-friendly, innovative platforms built to drive growth.",
                image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=900&auto=format&fit=crop",
                fadeColor: "#111111"
            },
            {
                titlePart1: "Real Estate CRM ",
                titlePart2: "Software",
                badges: ["CRM", "Automation"],
                subtitle: "Seamless integration and analytics",
                desc: "Boost your real estate productivity with Real Estate CRM Software by Prettify Creative. Tailored for realtors, our CRM system offers seamless integration, automation, and real-time analytics to enhance client relationships and business performance. Try the best CRM for real estate today!",
                image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=900&auto=format&fit=crop",
                fadeColor: "#151515"
            }
        ]
    },
    branding: {
        previewImage: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=600&auto=format&fit=crop",
        intro: "Our branding services establish strong visual foundations that help businesses connect with their target audience on an emotional level. We build memorable designs, logo guidelines, packaging details, and full brand books.",
        items: [
            {
                titlePart1: "Branding and ",
                titlePart2: "Design Agency",
                badges: ["Branding", "Design"],
                subtitle: "Big brand experience",
                desc: "Why settle for ordinary? We specialize in releasing brands from the limits of traditional design, delivering the 'big brand experience' branding and design services that make your business unforgettable.",
                image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=900&auto=format&fit=crop",
                fadeColor: "#111111"
            },
            {
                titlePart1: "Best Creative ",
                titlePart2: "Agency in India",
                badges: ["Creative", "Agency"],
                subtitle: "Experiences worthy of attention",
                desc: "Our product design agency is known to create experiences that are worthy of the public's attention. With packages so stunning, your product is sure to get picked from the shelves.",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=900&auto=format&fit=crop",
                fadeColor: "#151515"
            },
            {
                titlePart1: "Product Design ",
                titlePart2: "Company",
                badges: ["Product Design", "Packaging"],
                subtitle: "Impactful packaging & apps",
                desc: "Our specialised product design services make sure that your packaging not only attracts attention but also communicates your brand's value effectively. As a leading product design company, we specialise in creating impactful apps that drive engagement and user satisfaction.",
                image: "https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=900&auto=format&fit=crop",
                fadeColor: "#111111"
            },
            {
                titlePart1: "India's Top Logo ",
                titlePart2: "Design Company",
                badges: ["Logo Design", "Identity"],
                subtitle: "Logos with life and meaning",
                desc: "Beyond aesthetics lies purpose. Our logo design services in India go beyond aesthetics, designing logos that bring life and meaning to your brand. We love empowering brands, making them hypergrow with our creative logos.",
                image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=900&auto=format&fit=crop",
                fadeColor: "#151515"
            },
            {
                titlePart1: "Graphic Design ",
                titlePart2: "Company",
                badges: ["Graphic Design", "Brand Identity"],
                subtitle: "Vibrant brand identities",
                desc: "We co-create with you, combining colors, fonts, and design elements to build a vibrant brand identity. Let's join hands with our graphic design company and soar high.",
                image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=900&auto=format&fit=crop",
                fadeColor: "#111111"
            },
            {
                titlePart1: "Packaging Design ",
                titlePart2: "Company",
                badges: ["Packaging", "Creativity"],
                subtitle: "Visually compelling packaging",
                desc: "We make design tangible by blending creativity and functionality. Our package design agency crafts visually compelling packaging that tells your brand's story and leaves a lasting impression.",
                image: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?q=80&w=900&auto=format&fit=crop",
                fadeColor: "#151515"
            },
            {
                titlePart1: "Video Production ",
                titlePart2: "Company in Gurgaon",
                badges: ["Video", "Production"],
                subtitle: "Removing friction through amazing shots",
                desc: "Our video production company makes your brand relevant by removing friction from the buying process through amazing shots.",
                image: "https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=900&auto=format&fit=crop",
                fadeColor: "#111111"
            },
            {
                titlePart1: "Advertising ",
                titlePart2: "Agency",
                badges: ["Advertising", "Expertise"],
                subtitle: "Purpose-built advertising solutions",
                desc: "As an advertising company, we're purpose-built to meet your exact needs. Our breadth of services is strengthened by the depth of expertise behind them.",
                image: "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=900&auto=format&fit=crop",
                fadeColor: "#151515"
            },
            {
                titlePart1: "Brochure-",
                titlePart2: "Design",
                badges: ["Brochure", "Design"],
                subtitle: "Enhance your brand's voice",
                desc: "As a boundary-pushing brochure design company, we use every fold, from the classic parallel to the surprising accordion, to enhance your brand's voice. Our brochure design services turn simple layouts into complex narratives, folding creativity into every corner of the page.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=900&auto=format&fit=crop",
                fadeColor: "#111111"
            }
        ]
    },
    marketing: {
        previewImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
        intro: "Drive traffic, generate leads, and capture search intent through data-driven campaigns. We design content strategies, optimize visibility, and run engaging social media ad funnels.",
        items: [
            {
                titlePart1: "Public Relations ",
                titlePart2: "Agency",
                badges: ["PR", "Reputation"],
                subtitle: "Cultivating curiosity",
                desc: "At Prettify Creative we love cultivating curiosity that leads to innovative solutions, and protecting your reputation through every change.",
                image: "https://images.unsplash.com/photo-1432888117426-14b2d3080c35?q=80&w=900&auto=format&fit=crop",
                fadeColor: "#111111"
            },
            {
                titlePart1: "Digital Marketing ",
                titlePart2: "Agency",
                badges: ["Digital", "Marketing"],
                subtitle: "Memorable experiences",
                desc: "Our digital marketing services focus on turning everyday interactions into memorable experiences. We prosper by helping brands through identity crises and guiding them toward a stronger digital presence.",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=900&auto=format&fit=crop",
                fadeColor: "#151515"
            },
            {
                titlePart1: "Best SEO Company ",
                titlePart2: "in Gurgaon",
                badges: ["SEO", "Ranking"],
                subtitle: "Revenue-generating solutions",
                desc: "Our SEO services offer revenue-generating digital marketing solutions fit for your needs. We understand that every client's journey is unique, and our only focus is to push your brand to the above fold region.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=900&auto=format&fit=crop",
                fadeColor: "#111111"
            },
            {
                titlePart1: "Best PPC Agency ",
                titlePart2: "in Gurgaon",
                badges: ["PPC", "Ads"],
                subtitle: "Line up brand promises",
                desc: "Our PPC services focus on line up your brand promises with performance, helping you reach mass-market consumers and build relationships that last. You're in good company with us as we drive growth in the digital space.",
                image: "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=900&auto=format&fit=crop",
                fadeColor: "#151515"
            },
            {
                titlePart1: "Social Media ",
                titlePart2: "Marketing Agency",
                badges: ["Social", "Media"],
                subtitle: "Disruptive difference",
                desc: "Our social media marketing agency doesn't settle for average results. We help your brand defy norms and deliver a proactive, responsive strategy. With a focus creating a disruptive difference.",
                image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=900&auto=format&fit=crop",
                fadeColor: "#111111"
            },
            {
                titlePart1: "Search Engine ",
                titlePart2: "Marketing Agency",
                badges: ["SEM", "Analytics"],
                subtitle: "Effective strategies",
                desc: "At our search engine marketing agency, we understand that effective strategies involve more than just visibility. We use analytics to provide insights that allow you to refine your approach continually.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=900&auto=format&fit=crop",
                fadeColor: "#151515"
            },
            {
                titlePart1: "Video Marketing ",
                titlePart2: "Agency",
                badges: ["Video", "Marketing"],
                subtitle: "Lasting impact",
                desc: "Our DNA is rooted in premium content and a network of experienced talent. We are a video marketing agency that makes a lasting impact to revamp your brand's presence.",
                image: "https://images.unsplash.com/photo-1535016120720-40c7467652ff?q=80&w=900&auto=format&fit=crop",
                fadeColor: "#111111"
            },
            {
                titlePart1: "Ecommerce ",
                titlePart2: "Marketing Agency",
                badges: ["Ecommerce", "Marketing"],
                subtitle: "Category leader",
                desc: "Our Ecommerce marketing agency gets your business seen and empowers you with tools that make selling less daunting. We deliver results that push you to become a category leader.",
                image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=900&auto=format&fit=crop",
                fadeColor: "#151515"
            },
            {
                titlePart1: "Content Marketing ",
                titlePart2: "Agency",
                badges: ["Content", "Phygital"],
                subtitle: "Phygital experiences",
                desc: "We specialize in creating phygital experiences that change how people connect with brands. Our content marketing agency shines a light on what makes your brand unique.",
                image: "https://images.unsplash.com/photo-1455309036818-600021fac5fc?q=80&w=900&auto=format&fit=crop",
                fadeColor: "#111111"
            },
            {
                titlePart1: "Email Marketing ",
                titlePart2: "Agency",
                badges: ["Email", "Marketing"],
                subtitle: "Primary source of success",
                desc: "Our Email marketing agency believes everyone has an email, even if they don't have a website! So, let us be your primary source of marketing success and soar the highest.",
                image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?q=80&w=900&auto=format&fit=crop",
                fadeColor: "#151515"
            },
            {
                titlePart1: "Local SEO ",
                titlePart2: "Agency",
                badges: ["Local", "SEO"],
                subtitle: "Maximize your visibility",
                desc: "Let us help you navigate the complexities of local search marketing and maximize your visibility. Our goal is to provide you with the best local response, giving your business the edge it needs to thrive in a competitive environment.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=900&auto=format&fit=crop",
                fadeColor: "#111111"
            },
            {
                titlePart1: "Adwords ",
                titlePart2: "Agency",
                badges: ["Adwords", "Google"],
                subtitle: "Beyond the basics",
                desc: "Our Adword services love to go beyond the basics.With us, your search is over because we help you publicize your business the way Google wants you to.",
                image: "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=900&auto=format&fit=crop",
                fadeColor: "#151515"
            },
            {
                titlePart1: "Ecommerce ",
                titlePart2: "Digital Marketing",
                badges: ["Ecommerce", "Digital"],
                subtitle: "Measurable growth",
                desc: "For ecommerce companies, the goal is clear: boost sales and drive measurable growth. With digital marketing in ecommerce, you don't have to rely on guesswork. Instead, we provide actionable analytics that guide your strategy, allowing you to understand customer behavior, identify high-conversion opportunities, and track ROI.",
                image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=900&auto=format&fit=crop",
                fadeColor: "#111111"
            },
            {
                titlePart1: "E-Commerce ",
                titlePart2: "Content Writing",
                badges: ["Content", "Writing"],
                subtitle: "Unique content strategy",
                desc: "Our journey begins with self-awareness. We understand that every business is unique, and that means your content should be as well. Before we begin creating your ecommerce content strategy, we take the time to understand your goals, vision, and audience.",
                image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=900&auto=format&fit=crop",
                fadeColor: "#151515"
            },
            {
                titlePart1: "Enterprise SEO ",
                titlePart2: "Marketing",
                badges: ["Enterprise", "SEO"],
                subtitle: "Dominate search engine results",
                desc: "At Prettify Creative, we specialize in offering customized solutions that help businesses like yours dominate search engine results and achieve long-term success. Our focus on data-driven strategies, high-impact moves, and scalable solutions makes us the best enterprise SEO agency to help you meet your goals.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=900&auto=format&fit=crop",
                fadeColor: "#111111"
            },
            {
                titlePart1: "Small Business ",
                titlePart2: "Owner SEO",
                badges: ["Small Business", "SEO"],
                subtitle: "White hat approach",
                desc: "At Prettify Creative, we specialize in white hat SEO services designed to help businesses improve their rankings without compromising on integrity or long-term success. Our white hat approach ensures that your website remains compliant with search engine guidelines while achieving high, sustainable rankings.",
                image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=900&auto=format&fit=crop",
                fadeColor: "#151515"
            },
            {
                titlePart1: "White Hat SEO ",
                titlePart2: "Marketing",
                badges: ["White Hat", "SEO"],
                subtitle: "High, sustainable rankings",
                desc: "At Prettify Creative, we specialize in white hat SEO services designed to help businesses improve their rankings without compromising on integrity or long-term success. Our white hat approach ensures that your website remains compliant with search engine guidelines while achieving high, sustainable rankings.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=900&auto=format&fit=crop",
                fadeColor: "#111111"
            },
            {
                titlePart1: "Guaranteed SEO ",
                titlePart2: "Marketing",
                badges: ["Guaranteed", "SEO"],
                subtitle: "Secure top rankings",
                desc: "At Prettify Creative, we specialize in Guaranteed SEO Marketing Services, offering a comprehensive suite of services designed to secure top rankings for your website and drive measurable results.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=900&auto=format&fit=crop",
                fadeColor: "#151515"
            },
            {
                titlePart1: "Local SEO ",
                titlePart2: "Marketing",
                badges: ["Local", "SEO"],
                subtitle: "Measurable results that drive growth",
                desc: "Our guaranteed local SEO marketing services are designed to deliver measurable results that drive growth. If you want your business to dominate local search engine results and convert visitors into clients, look no further than our expert services.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=900&auto=format&fit=crop",
                fadeColor: "#111111"
            },
            {
                titlePart1: "Global SEO ",
                titlePart2: "Marketing",
                badges: ["Global", "SEO"],
                subtitle: "Attract qualified traffic",
                desc: "Our global SEO services are tailored to help you rise above the noise, gain visibility, and attract qualified traffic from around the world. We employ advanced SEO techniques to improve your website's visibility on global search engines, driving more leads and increasing organic growth.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=900&auto=format&fit=crop",
                fadeColor: "#151515"
            },
            {
                titlePart1: "E Commerce ",
                titlePart2: "SEO",
                badges: ["Ecommerce", "SEO"],
                subtitle: "Revenue-generating powerhouse",
                desc: "At our ecommerce SEO agency, we specialize in transforming your online store into a revenue-generating powerhouse through customized ecommerce search engine optimization techniques. With a proven track record of success, we help businesses improve visibility, boost traffic, and drive conversions.",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=900&auto=format&fit=crop",
                fadeColor: "#111111"
            },
            {
                titlePart1: "Video SEO ",
                titlePart2: "Marketing",
                badges: ["Video", "SEO"],
                subtitle: "YouTube optimization",
                desc: "At our video SEO agency, we specialize in YouTube SEO services that help businesses like yours increase visibility, reach, and engagement. With our video optimization for YouTube, we make sure your content gets the attention it deserves by improving its ranking on YouTube search results.",
                image: "https://images.unsplash.com/photo-1535016120720-40c7467652ff?q=80&w=900&auto=format&fit=crop",
                fadeColor: "#151515"
            },
            {
                titlePart1: "Multilingual SEO ",
                titlePart2: "Marketing",
                badges: ["Multilingual", "SEO"],
                subtitle: "Speak to customers globally",
                desc: "As businesses expand beyond borders, reaching a global audience becomes essential. One of the most effective ways to ensure your brand speaks to customers in different regions is through multilingual SEO marketing.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=900&auto=format&fit=crop",
                fadeColor: "#111111"
            },
            {
                titlePart1: "Online Reputation ",
                titlePart2: "Management",
                badges: ["ORM", "Reputation"],
                subtitle: "Navigate the media landscape",
                desc: "At Prettify Creative, we specialize in crafting, managing, and enhancing your brand's online presence to make sure it reflects the excellence you deserve. As a leading online reputation management agency, we offer personalized, effective, and impactful services that help businesses and individuals navigate the ever evolving media landscape with confidence.",
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=900&auto=format&fit=crop",
                fadeColor: "#151515"
            },
            {
                titlePart1: "SMO ",
                titlePart2: "Marketing",
                badges: ["SMO", "Viral"],
                subtitle: "Human centric experiences",
                desc: "At Prettify Creative, we specialize in crafting human centric experiences that deeply connect with people, making sure your brand reflects its audience. Our expertise lies in not just creating content but curating it to perfection to help you stand out in the ever changing landscape of viral marketing.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=900&auto=format&fit=crop",
                fadeColor: "#111111"
            },
            {
                titlePart1: "Affiliate ",
                titlePart2: "Marketing",
                badges: ["Affiliate", "Ecosystem"],
                subtitle: "Ahead of the curve",
                desc: "At Prettify Creative, we specialize in crafting strategies that help brands not just survive but thrive in the affiliate marketing ecosystem. Whether you're an established brand looking to expand your digital footprint or a new entrant aiming to make a mark, our expertise ensures you're always ahead of the curve.",
                image: "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=900&auto=format&fit=crop",
                fadeColor: "#151515"
            },
            {
                titlePart1: "Viral ",
                titlePart2: "Marketing",
                badges: ["Viral", "Content"],
                subtitle: "Curating content to perfection",
                desc: "At Prettify Creative, we specialize in crafting human centric experiences that deeply connect with people, making sure your brand reflects its audience. Our expertise lies in not just creating content but curating it to perfection to help you stand out in the ever changing landscape of viral marketing.",
                image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=900&auto=format&fit=crop",
                fadeColor: "#111111"
            },
            {
                titlePart1: "Pay Per ",
                titlePart2: "Click",
                badges: ["PPC", "Ads"],
                subtitle: "Maximize returns",
                desc: "It allows you to focus on what truly matters, your core operations, while professionals handle the intricacies of lead generation and ad management. A PPC agency like ours ensures your advertising budget is spent wisely, implementing the strategies that deliver the highest returns. Our expertise lies in crafting campaigns that minimize wasteful spending and maximize results. With advanced tools and precise bidding strategies, we create campaigns that propel your business toward success.",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=900&auto=format&fit=crop",
                fadeColor: "#151515"
            },
            {
                titlePart1: "SMS ",
                titlePart2: "Marketing",
                badges: ["SMS", "Communication"],
                subtitle: "Direct, meaningful communication",
                desc: "SMS marketing has emerged as one of the most powerful tools in driving engagement and ensuring direct, meaningful communication. At Prettify Creative, we specialize in providing top notch SMS marketing services that help businesses streamline their communication, automate multichannel marketing, and reach a large audience seamlessly.",
                image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=900&auto=format&fit=crop",
                fadeColor: "#111111"
            },
            {
                titlePart1: "Google Business ",
                titlePart2: "Listing & Profile Management",
                badges: ["Google Business", "Listing"],
                subtitle: "Flow seamlessly across local search",
                desc: "Prettify Creative specializes in Google Business Listing & Profile Management, helping your brand flow seamlessly across local search results. We ensure your profile is fully optimized and engaging so your audience finds you easily and converts confidently.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=900&auto=format&fit=crop",
                fadeColor: "#151515"
            }
        ]
    }
};

const VARIANTS = ['variant-a', 'variant-b', 'variant-c'];

/* ─────────────────────────────────────────────────────
   INIT ENGINE (Smooth Matrix)
   ───────────────────────────────────────────────────── */
function initTabbedServices() {
    const tabs      = document.querySelectorAll('.tab-btn');
    const bubble    = document.querySelector('.tab-active-bubble');
    const introText = document.getElementById('tab-intro-text');
    const cardsList = document.getElementById('services-cards-list');
    const hoverPreview = document.getElementById('tab-hover-preview');
    const previewImg = hoverPreview?.querySelector('img');

    let activeTab = document.querySelector('.tab-btn.active') || tabs[0];

    function updateBubble(el, animate = true) {
        if (!el || !bubble) return;
        gsap.to(bubble, {
            left: el.offsetLeft, 
            width: el.offsetWidth,
            height: el.offsetHeight, 
            top: el.offsetTop,
            duration: animate ? 0.35 : 0,
            ease: "power2.out"
        });
    }

    /* Floating Arrow Setup */
    const arrowWrap = document.createElement('div');
    arrowWrap.style.cssText = 'position:fixed;top:0;left:0;pointer-events:none;z-index:9000;will-change:transform;transform:translate3d(-100px, -100px, 0);';

    const floatingArrow = document.createElement('div');
    floatingArrow.className = 'card-arrow-btn';
    floatingArrow.innerHTML = '&#8599;';
    floatingArrow.style.cssText = 'position:relative;opacity:0;transform:scale(0.3);transition: opacity 0.15s ease, transform 0.2s cubic-bezier(0.25, 1, 0.5, 1);';

    arrowWrap.appendChild(floatingArrow);
    document.body.appendChild(arrowWrap);

    const ARROW_HALF = 36;
    let mouseX = -100, mouseY = -100;
    let ticking = false;

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX - ARROW_HALF;
        mouseY = e.clientY - ARROW_HALF;

        if (!ticking) {
            requestAnimationFrame(() => {
                arrowWrap.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });

    setTimeout(() => updateBubble(activeTab, false), 150);
    window.addEventListener('resize', () => updateBubble(activeTab, false));

    function renderTabContent(category) {
        tabs.forEach(t => t.classList.remove('active'));
        const targetTab = document.querySelector(`.tab-btn[data-tab="${category}"]`);
        if (targetTab) { 
            targetTab.classList.add('active'); 
            activeTab = targetTab; 
            updateBubble(activeTab, true); 
        }

        const data = servicesData[category];
        if (!data) return;

        if (introText) introText.innerHTML = data.intro;

        if (cardsList) {
            const fragment = document.createDocumentFragment();
            cardsList.innerHTML = '';

            data.items.forEach((item, index) => {
                const variant = VARIANTS[index % VARIANTS.length];
                const isReverse = index % 2 !== 0;
                const card = document.createElement('div');
                card.className = `premium-card ${variant}`;
                if (isReverse) {
                    card.style.gridTemplateColumns = '58% 42%';
                }

                const leftContent = `
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
                `;
                
                const rightContent = `
                    <div class="premium-card-right">
                        <div class="premium-card-image-wrapper">
                            <img class="premium-card-image" src="${item.image}" alt="${item.titlePart1}${item.titlePart2}" loading="lazy">
                            <div class="premium-card-image-mask" style="background:linear-gradient(${isReverse ? '-90deg' : '90deg'},${item.fadeColor} 0%,transparent 55%)"></div>
                        </div>
                    </div>
                `;
                
                const arrowContent = `
                    <div class="premium-card-arrow" ${isReverse ? 'style="right: auto; left: 48px;"' : ''}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                    </div>
                `;

                card.innerHTML = isReverse 
                    ? rightContent + leftContent + arrowContent
                    : leftContent + rightContent + arrowContent;

                card.addEventListener('click', () => {
                    openServiceModal(item.titlePart1 + item.titlePart2, item.desc, item.image);
                });

                card.addEventListener('mouseenter', () => {
                    const mainCursor = document.getElementById('cursor');
                    const followerCursor = document.getElementById('cursor-follower');
                    
                    if (mainCursor) mainCursor.style.opacity = '0';
                    if (followerCursor) followerCursor.style.opacity = '0';

                    floatingArrow.style.transition = 'opacity 0.15s ease, transform 0.2s cubic-bezier(0.25, 1, 0.5, 1)';
                    floatingArrow.style.opacity = '1';
                    floatingArrow.style.transform = 'scale(1)';
                });

                card.addEventListener('mouseleave', () => {
                    const mainCursor = document.getElementById('cursor');
                    const followerCursor = document.getElementById('cursor-follower');
                    
                    if (mainCursor) mainCursor.style.opacity = '';
                    if (followerCursor) followerCursor.style.opacity = '';

                    floatingArrow.style.transition = 'opacity 0.12s ease, transform 0.15s ease';
                    floatingArrow.style.opacity = '0';
                    floatingArrow.style.transform = 'scale(0.3)';
                });

                fragment.appendChild(card);
            });

            cardsList.appendChild(fragment);

            gsap.fromTo(cardsList.children,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.4, stagger: 0.05, ease: "power2.out" }
            );
        }
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', () => renderTabContent(tab.getAttribute('data-tab')));
        
        tab.addEventListener('mouseenter', () => {
            updateBubble(tab, true);
            
            const category = tab.getAttribute('data-tab');
            if (hoverPreview && previewImg && servicesData[category]?.previewImage) {
                previewImg.src = servicesData[category].previewImage;
                
                const rect = tab.getBoundingClientRect();
                const capsuleRect = tab.parentElement.getBoundingClientRect();
                
                const exactX = (rect.left - capsuleRect.left) + (rect.width / 2) - 140;
                
                hoverPreview.style.left = `${exactX}px`;
                hoverPreview.style.top = `70px`; 
                
                hoverPreview.style.opacity = '1';
                hoverPreview.style.transform = 'translate3d(0, 0, 0) scale(1)';
            }
        });

        tab.addEventListener('mouseleave', () => {
            if (hoverPreview) {
                hoverPreview.style.opacity = '0';
                hoverPreview.style.transform = 'scale(0.8)';
            }
        });
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
        { opacity: 0, scale: 0.95, y: 30 },
        { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: "power2.out" }
    );
}

window.openServiceModal = openServiceModal;

function closeServiceModal() {
    const modal = document.getElementById('service-detail-view');
    if (!modal) return;
    gsap.to(modal.querySelector('.detail-container'), {
        opacity: 0, scale: 0.95, y: 30, duration: 0.3, ease: "power2.in",
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