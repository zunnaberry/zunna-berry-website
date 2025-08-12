# Zunna Berry - True Vision Window App Website

A modern, responsive website showcasing the True Vision window app that applies real-time filters to live screens.

## Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Interactive Demo**: Live filter demonstration with real-time controls
- **Smooth Animations**: CSS animations and JavaScript interactions
- **Contact Form**: Functional contact form with validation
- **Cross-browser Compatible**: Works on all modern browsers

## Getting Started

### Prerequisites

- A modern web browser
- Basic knowledge of HTML, CSS, and JavaScript (for customization)

### Installation

1. **Clone or download** the project files
2. **Open `index.html`** in your web browser to view locally
3. **Customize** the content, colors, and styling as needed

### File Structure

```
zunna-berry-website/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
├── 71x71.png          # App icon/favicon
└── README.md           # This file
```

## Hosting Options

### 1. GitHub Pages (Recommended - Free)

**Steps:**
1. Create a new GitHub repository
2. Upload all project files to the repository
3. Go to Settings → Pages
4. Select "Deploy from a branch" and choose "main" branch
5. Your site will be available at `https://yourusername.github.io/repository-name`

**Custom Domain:**
- Purchase a domain from providers like Namecheap, GoDaddy, or Google Domains
- In GitHub Pages settings, add your custom domain
- Update DNS records as instructed by GitHub

### 2. Netlify (Free Tier)

**Steps:**
1. Sign up at [netlify.com](https://netlify.com)
2. Drag and drop your project folder to deploy
3. Your site will be available at a Netlify subdomain
4. Connect your custom domain in the domain settings

### 3. Vercel (Free Tier)

**Steps:**
1. Sign up at [vercel.com](https://vercel.com)
2. Import your project from GitHub or upload files
3. Deploy automatically
4. Connect your custom domain in the project settings

### 4. Traditional Web Hosting

**Providers:**
- **Shared Hosting**: Bluehost, HostGator, SiteGround
- **VPS**: DigitalOcean, Linode, Vultr
- **Cloud**: AWS S3 + CloudFront, Google Cloud Storage

**Steps:**
1. Purchase hosting plan and domain
2. Upload files via FTP or file manager
3. Point domain to hosting provider
4. Configure SSL certificate

## Design System

### Colors
- **Primary**: `#6366f1` (Indigo)
- **Secondary**: `#f59e0b` (Amber)
- **Accent**: `#10b981` (Emerald)
- **Text**: `#1f2937` (Gray-800)
- **Background**: `#ffffff` (White)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

### Components
- **Buttons**: Primary and secondary variants with hover effects
- **Cards**: Feature cards with icons and descriptions
- **Forms**: Contact form with validation
- **Navigation**: Responsive navbar with mobile menu

## Customization

### Changing Colors
Update the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #your-color;
    --secondary-color: #your-color;
    --accent-color: #your-color;
}
```

### Updating Content
- **Company Info**: Edit text in `index.html`
- **Contact Details**: Update email, phone, and address
- **Features**: Modify feature cards in the features section
- **About Section**: Update company description and stats

### Adding New Sections
1. Add HTML structure in `index.html`
2. Add corresponding CSS styles in `styles.css`
3. Add JavaScript functionality in `script.js` if needed

## Performance Optimization

### Current Optimizations
- **Minified CSS**: Consider minifying for production
- **Image Optimization**: Optimize `71x71.png` for web
- **Lazy Loading**: Implement for images if adding more
- **Caching**: Configure server-side caching headers

### Additional Optimizations
- **CDN**: Use a CDN for faster global delivery
- **Compression**: Enable GZIP compression on server
- **Browser Caching**: Set appropriate cache headers

## Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## SEO Optimization

### Current Features
- Semantic HTML structure
- Meta description and title
- Proper heading hierarchy
- Alt text for images
- Mobile-friendly design

### Additional SEO
- **Google Analytics**: Add tracking code
- **Sitemap**: Generate XML sitemap
- **Robots.txt**: Create robots.txt file
- **Schema Markup**: Add structured data
- **Open Graph**: Add social media meta tags

## Security

### Best Practices
- **HTTPS**: Always use HTTPS in production
- **Content Security Policy**: Add CSP headers
- **XSS Protection**: Validate form inputs
- **Regular Updates**: Keep dependencies updated

## Support

For questions or support:
- **Email**: info@zunnaberry.com
- **Phone**: +1 (555) 123-4567
- **Address**: 123 Innovation Drive, Tech City, TC 12345

## License

© 2024 Zunna Berry. All rights reserved.

---

**Note**: This is a static website template. For production use, ensure all contact information, legal details, and business information are accurate and up-to-date.
