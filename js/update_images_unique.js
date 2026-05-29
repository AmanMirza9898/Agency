const fs = require('fs');
let content = fs.readFileSync('c:/Users/Aman Mirza/Desktop/Agency/js/services.js', 'utf8');

const imageMap = {
    'Web': 'website',
    'Ecommerce': 'ecommerce',
    'Wordpress': 'wordpress',
    'Magento': 'ecommerce',
    'Shopify': 'shopify',
    'UI/UX': 'design',
    'Small Business': 'startup',
    'Corporate': 'corporate',
    'Portfolio': 'portfolio',
    'Branding': 'branding',
    'Dynamic': 'tech',
    'Software': 'software',
    'Mobile': 'mobile',
    'Android': 'android',
    'iPhone': 'iphone',
    'Real Estate': 'realestate',
    'Product': 'product',
    'Logo': 'logo',
    'Graphic': 'design',
    'Packaging': 'packaging',
    'Video': 'video',
    'Advertising': 'advertising',
    'Public Relations': 'pr',
    'Digital Marketing': 'marketing',
    'SEO': 'seo',
    'PPC': 'advertising',
    'Social Media': 'social',
    'Search Engine': 'seo',
    'Content': 'writing',
    'Email': 'email',
    'Adwords': 'marketing',
    'Online Reputation': 'business',
    'Affiliate': 'marketing',
    'SMS': 'mobile',
};

let globalIndex = 1;

content = content.replace(/titlePart1:\s*"([^"]+)"[\s\S]*?image:\s*"([^"]+)"/g, (match, title, oldImage) => {
    let keyword = 'business';
    for (const key of Object.keys(imageMap)) {
        if (title.toLowerCase().includes(key.toLowerCase())) {
            keyword = imageMap[key];
            break;
        }
    }
    
    // Generate unique loremflickr URL using lock
    const newImg = `https://loremflickr.com/900/600/${keyword}?lock=${globalIndex}`;
    globalIndex++;
    
    return match.replace(oldImage, newImg);
});

fs.writeFileSync('c:/Users/Aman Mirza/Desktop/Agency/js/services.js', content, 'utf8');
console.log('Images updated with unique loremflickr links!');
