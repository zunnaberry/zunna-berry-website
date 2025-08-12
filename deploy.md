# Deployment Guide - Zunna Berry Website

This guide will walk you through deploying your Zunna Berry website to various hosting platforms.

## Quick Start - GitHub Pages (Recommended)

### Step 1: Create GitHub Repository
1. Go to [github.com](https://github.com) and sign in
2. Click "New repository"
3. Name it `zunna-berry-website` (or your preferred name)
4. Make it public
5. Click "Create repository"

### Step 2: Upload Files
1. In your new repository, click "uploading an existing file"
2. Drag and drop all your website files:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `71x71.png`
   - `README.md`
3. Add a commit message: "Initial website upload"
4. Click "Commit changes"

### Step 3: Enable GitHub Pages
1. Go to repository Settings
2. Scroll down to "Pages" section
3. Under "Source", select "Deploy from a branch"
4. Choose "main" branch
5. Click "Save"
6. Your site will be available at: `https://yourusername.github.io/zunna-berry-website`

### Step 4: Custom Domain (Optional)
1. Purchase a domain (e.g., `zunnaberry.com`)
2. In GitHub Pages settings, add your domain
3. Update DNS records as instructed by GitHub
4. Enable HTTPS (automatic with GitHub Pages)

## Alternative Hosting Options

### Netlify (Free Tier)

#### Method 1: Drag & Drop
1. Go to [netlify.com](https://netlify.com)
2. Sign up with GitHub account
3. Drag your website folder to the deploy area
4. Site deploys instantly
5. Customize subdomain or add custom domain

#### Method 2: Git Integration
1. Connect your GitHub repository
2. Netlify automatically deploys on every push
3. Preview deployments for pull requests

### Vercel (Free Tier)

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub account
3. Click "New Project"
4. Import your GitHub repository
5. Deploy automatically
6. Add custom domain in project settings

### Traditional Web Hosting

#### Shared Hosting (Bluehost, HostGator, etc.)
1. Purchase hosting plan and domain
2. Access cPanel or file manager
3. Upload files to `public_html` folder
4. Point domain to hosting provider
5. Install SSL certificate

#### VPS Hosting (DigitalOcean, Linode)
1. Set up VPS server
2. Install web server (Apache/Nginx)
3. Upload files to web directory
4. Configure domain and SSL
5. Set up firewall and security

## Domain Registration

### Popular Domain Registrars
- **Namecheap**: Good prices, free privacy protection
- **GoDaddy**: Widely known, good support
- **Google Domains**: Clean interface, good integration
- **Cloudflare**: Free privacy protection, good security

### Domain Setup Steps
1. Search for available domain name
2. Purchase domain (usually $10-15/year)
3. Configure DNS settings:
   - **A Record**: Point to hosting IP (for traditional hosting)
   - **CNAME**: Point to hosting subdomain (for GitHub Pages, Netlify, etc.)
4. Wait for DNS propagation (up to 48 hours)

## SSL Certificate Setup

### Automatic SSL (Recommended)
- **GitHub Pages**: Automatic HTTPS
- **Netlify**: Automatic SSL certificates
- **Vercel**: Automatic SSL certificates
- **Cloudflare**: Free SSL with proxy

### Manual SSL Setup
1. Generate SSL certificate (Let's Encrypt is free)
2. Install certificate on server
3. Configure web server to use HTTPS
4. Set up redirects from HTTP to HTTPS

## Performance Optimization

### Before Deployment
1. **Minify CSS and JS** (optional for small sites)
2. **Optimize images** (compress 71x71.png)
3. **Enable GZIP compression** (server-side)
4. **Set cache headers** (server-side)

### After Deployment
1. **Test loading speed** with Google PageSpeed Insights
2. **Check mobile responsiveness**
3. **Verify all links work**
4. **Test contact form functionality**

## Monitoring and Maintenance

### Analytics Setup
1. **Google Analytics**: Add tracking code to `index.html`
2. **Google Search Console**: Submit sitemap
3. **Uptime monitoring**: Set up alerts

### Regular Maintenance
1. **Update content** as needed
2. **Check for broken links**
3. **Monitor performance**
4. **Backup files** regularly

## Troubleshooting

### Common Issues

#### Site Not Loading
- Check DNS settings
- Verify file uploads
- Check hosting status

#### Images Not Showing
- Verify file paths
- Check file permissions
- Ensure files are uploaded

#### Contact Form Not Working
- Check JavaScript console for errors
- Verify form validation
- Test on different browsers

#### SSL Issues
- Check certificate installation
- Verify redirects
- Clear browser cache

### Getting Help
- **GitHub Pages**: [GitHub Pages Documentation](https://pages.github.com/)
- **Netlify**: [Netlify Support](https://docs.netlify.com/)
- **Vercel**: [Vercel Documentation](https://vercel.com/docs)
- **General**: Check hosting provider's support documentation

## Security Checklist

- [ ] HTTPS enabled
- [ ] SSL certificate installed
- [ ] Form validation implemented
- [ ] No sensitive data in code
- [ ] Regular backups scheduled
- [ ] Security headers configured
- [ ] Dependencies updated

## Cost Comparison

| Platform | Cost | Features | Best For |
|----------|------|----------|----------|
| GitHub Pages | Free | Basic hosting, custom domain | Simple sites, developers |
| Netlify | Free tier | Advanced features, forms | Modern web apps |
| Vercel | Free tier | Serverless functions | React/Vue apps |
| Shared Hosting | $3-10/month | Full control, databases | Traditional websites |
| VPS | $5-20/month | Complete control | Advanced users |

## Next Steps

After deployment:
1. **Test thoroughly** on different devices
2. **Set up monitoring** and analytics
3. **Create backups** of your files
4. **Plan for updates** and maintenance
5. **Consider SEO optimization**

---

**Need help?** Contact your hosting provider's support or refer to their documentation for platform-specific issues.
