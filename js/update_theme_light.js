const fs = require('fs');

try {
    let css = fs.readFileSync('c:/Users/Aman Mirza/Desktop/Agency/css/services.css', 'utf8');

    css = css.replace(/--bg:\s*#0a0a0a;/, '--bg:        #f4f5f7;');
    css = css.replace(/--border:\s*rgba\(255,255,255,0.07\);/, '--border:    rgba(0,0,0,0.08);');
    css = css.replace(/--text-muted:\s*rgba\(255,255,255,0.45\);/, '--text-muted: rgba(0,0,0,0.5);');
    css = css.replace(/--text-desc:\s*rgba\(255,255,255,0.5\);/, '--text-desc:  rgba(0,0,0,0.6);');

    css = css.replace(/color: #ffffff;/g, 'color: #111111;');
    css = css.replace(/filter: brightness\(0\) invert\(1\) !important;/g, 'filter: brightness(0) !important;');
    css = css.replace(/color: #fff !important;/g, 'color: #111 !important;');

    css = css.replace(/background: rgba\(22, 22, 22, 0.45\);/, 'background: rgba(255, 255, 255, 0.6);');
    css = css.replace(/border: 1px solid rgba\(255, 255, 255, 0.08\);/, 'border: 1px solid rgba(0, 0, 0, 0.05);');
    css = css.replace(/box-shadow: 0 24px 50px rgba\(0, 0, 0, 0.4\), inset 0 1px 1px rgba\(255, 255, 255, 0.1\);/, 'box-shadow: 0 12px 30px rgba(0, 0, 0, 0.05), inset 0 1px 1px rgba(255, 255, 255, 0.5);');

    css = css.replace(/color: rgba\(255,255,255,0.45\);/g, 'color: rgba(0,0,0,0.5);');
    css = css.replace(/\.tab-btn:hover\s*{ color: #fff; }/, '.tab-btn:hover   { color: #000; }');

    css = css.replace(/box-shadow: 0 28px 70px rgba\(0,0,0,0.6\), 0 0 0 1px rgba\(255,184,0,0.3\);/, 'box-shadow: 0 28px 70px rgba(0,0,0,0.08), 0 0 0 1px rgba(255,184,0,0.4);');

    css = css.replace(/border: 1px solid rgba\(255,255,255,0.18\);/, 'border: 1px solid rgba(0,0,0,0.1);');
    css = css.replace(/color: rgba\(255,255,255,0.8\);/, 'color: rgba(0,0,0,0.7);');
    css = css.replace(/background: rgba\(255,255,255,0.04\);/, 'background: rgba(0,0,0,0.03);');

    css = css.replace(/background: linear-gradient\(180deg, #dfdfdf 0%, #888888 100%\);/, 'background: linear-gradient(180deg, #555 0%, #999 100%);');

    css = css.replace(/background: #ffffff;\s*border-radius: 50%;\s*display: flex;\s*align-items: center;\s*justify-content: center;\s*color: #000000;/, 'background: #111111;\n    border-radius: 50%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: #ffffff;');

    css = css.replace(/\.premium-card\.variant-a \{ background: #111111; \}/, '.premium-card.variant-a { background: #ffffff; }');
    css = css.replace(/\.premium-card\.variant-b \{ background: #151515; \}/, '.premium-card.variant-b { background: #fbfbfb; }');
    css = css.replace(/\.premium-card\.variant-c \{ background: #0f0f0a; border-color: rgba\(255,184,0,0.15\); \}/, '.premium-card.variant-c { background: #f4f4f4; border-color: rgba(255,184,0,0.25); }');

    css = css.replace(/\.svc-cta-dark \{\s*background: #0a0a0a;/, '.svc-cta-dark {\n    background: #ffffff;');
    css = css.replace(/\.svc-footer-dark \{\s*background: #080808;/, '.svc-footer-dark {\n    background: #f9f9f9;');

    css = css.replace(/background: rgba\(8,8,8,0.97\);/, 'background: rgba(255,255,255,0.95);');
    css = css.replace(/background: #131313;/, 'background: #ffffff;');
    css = css.replace(/box-shadow: 0 40px 100px rgba\(0,0,0,0.8\);/, 'box-shadow: 0 40px 100px rgba(0,0,0,0.15);');
    css = css.replace(/background: #1d1d1f;/, 'background: #f0f0f0;');
    css = css.replace(/color: #fff;/g, 'color: #111;');
    css = css.replace(/color: rgba\(255,255,255,0.55\);/, 'color: rgba(0,0,0,0.65);');

    css = css.replace(/background: #1c1c1e; color: #fff;/, 'background: #f0f0f0; color: #111;');

    fs.writeFileSync('c:/Users/Aman Mirza/Desktop/Agency/css/services.css', css, 'utf8');

    let js = fs.readFileSync('c:/Users/Aman Mirza/Desktop/Agency/js/services.js', 'utf8');
    js = js.replace(/fadeColor: "#111111"/g, 'fadeColor: "#ffffff"');
    js = js.replace(/fadeColor: "#151515"/g, 'fadeColor: "#fbfbfb"');
    js = js.replace(/fadeColor: "#0f0f0a"/g, 'fadeColor: "#f4f4f4"');
    fs.writeFileSync('c:/Users/Aman Mirza/Desktop/Agency/js/services.js', js, 'utf8');

    console.log('Theme changed to light mode successfully!');
} catch(e) {
    console.error(e);
}
