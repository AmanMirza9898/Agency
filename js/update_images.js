const fs = require('fs');
let content = fs.readFileSync('c:/Users/Aman Mirza/Desktop/Agency/js/services.js', 'utf8');

const imageMap = {
    'Web': 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=900&auto=format&fit=crop',
    'Ecommerce': 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=900&auto=format&fit=crop',
    'Wordpress': 'https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=900&auto=format&fit=crop',
    'Magento': 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=900&auto=format&fit=crop',
    'Shopify': 'https://images.unsplash.com/photo-1563013544-824ae1d704d3?q=80&w=900&auto=format&fit=crop',
    'UI/UX': 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=900&auto=format&fit=crop',
    'Small Business': 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=900&auto=format&fit=crop',
    'Corporate': 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=900&auto=format&fit=crop',
    'Portfolio': 'https://images.unsplash.com/photo-1507238692062-5a042e9e5e6e?q=80&w=900&auto=format&fit=crop',
    'Branding': 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=900&auto=format&fit=crop',
    'Dynamic': 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=900&auto=format&fit=crop',
    'Software': 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=900&auto=format&fit=crop',
    'Mobile': 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=900&auto=format&fit=crop',
    'Android': 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?q=80&w=900&auto=format&fit=crop',
    'iPhone': 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=900&auto=format&fit=crop',
    'Real Estate': 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=900&auto=format&fit=crop',
    'Product': 'https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=900&auto=format&fit=crop',
    'Logo': 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=900&auto=format&fit=crop',
    'Graphic': 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=900&auto=format&fit=crop',
    'Packaging': 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?q=80&w=900&auto=format&fit=crop',
    'Video': 'https://images.unsplash.com/photo-1535016120720-40c7467652ff?q=80&w=900&auto=format&fit=crop',
    'Advertising': 'https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=900&auto=format&fit=crop',
    'Public Relations': 'https://images.unsplash.com/photo-1432888117426-14b2d3080c35?q=80&w=900&auto=format&fit=crop',
    'Digital Marketing': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=900&auto=format&fit=crop',
    'SEO': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=900&auto=format&fit=crop',
    'PPC': 'https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=900&auto=format&fit=crop',
    'Social Media': 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=900&auto=format&fit=crop',
    'Search Engine': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=900&auto=format&fit=crop',
    'Content': 'https://images.unsplash.com/photo-1455309036818-600021fac5fc?q=80&w=900&auto=format&fit=crop',
    'Email': 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?q=80&w=900&auto=format&fit=crop',
    'Adwords': 'https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=900&auto=format&fit=crop',
    'Online Reputation': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=900&auto=format&fit=crop',
    'Affiliate': 'https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=900&auto=format&fit=crop',
    'SMS': 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=900&auto=format&fit=crop',
};

const defaultImages = [
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=900&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=900&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=900&auto=format&fit=crop',
];

let fallbackIndex = 0;

content = content.replace(/titlePart1:\s*"([^"]+)"[\s\S]*?image:\s*"([^"]+)"/g, (match, title, oldImage) => {
    let matchedImg = null;
    for (const key of Object.keys(imageMap)) {
        if (title.toLowerCase().includes(key.toLowerCase())) {
            matchedImg = imageMap[key];
            break;
        }
    }
    
    if (!matchedImg) {
        matchedImg = defaultImages[fallbackIndex % defaultImages.length];
        fallbackIndex++;
    }
    
    return match.replace(oldImage, matchedImg);
});

fs.writeFileSync('c:/Users/Aman Mirza/Desktop/Agency/js/services.js', content, 'utf8');
console.log('Images updated based on titles!');
