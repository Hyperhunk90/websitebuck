# Southern Bucks Lawnscaping Website

A professional, responsive website for Southern Bucks Lawnscaping - a lawn care and landscaping business based in Walker, LA.

## Features

- **Modern Design**: Dark theme with hunter orange and lime green accents
- **Responsive**: Mobile-first design that works on all devices
- **SEO Optimized**: Local SEO optimization for Walker, LA and surrounding areas
- **Fast Loading**: Optimized images and efficient code
- **Professional**: Clean, modern design that builds trust

## Technology Stack

- **React 19**: Modern React with hooks
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Beautiful icons
- **React Router**: Client-side routing
- **React Helmet Async**: SEO meta tags management

## Project Structure

```
src/
├── components/          # React components
│   ├── Navigation.jsx   # Main navigation
│   ├── HeroSection.jsx  # Hero section with video background
│   ├── ServicesSection.jsx
│   ├── TestimonialsSection.jsx
│   ├── GallerySection.jsx
│   ├── WhyChooseUsSection.jsx
│   ├── QuoteSection.jsx
│   ├── Footer.jsx
│   └── SEOHead.jsx      # SEO meta tags component
├── assets/
│   └── images/          # Image assets
│       ├── icons/       # Service icons
│       └── gallery/     # Portfolio images
├── App.jsx              # Main app component
├── App.css              # Custom styles
└── main.jsx             # Entry point
```

## Local Development

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Start development server:
   ```bash
   pnpm run dev
   ```

3. Open http://localhost:5173 in your browser

## Building for Production

```bash
pnpm run build
```

This creates a `dist/` folder with optimized production files.

## Deployment Instructions

### GitHub Repository Setup

1. Create a new repository on GitHub
2. Upload all project files to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/southern-bucks-lawnscaping.git
   git push -u origin main
   ```

### Netlify Deployment

1. **Connect Repository**:
   - Log in to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub account
   - Select the southern-bucks-lawnscaping repository

2. **Build Settings**:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: `20`

3. **Deploy**:
   - Click "Deploy site"
   - Netlify will automatically build and deploy your site
   - You'll get a unique URL (e.g., `https://amazing-site-name.netlify.app`)

4. **Custom Domain** (Optional):
   - In Netlify dashboard, go to "Domain settings"
   - Add custom domain: `southernbucklawn.com`
   - Follow DNS configuration instructions

### Important Files for Netlify

- `netlify.toml`: Netlify configuration
- `public/_redirects`: SPA routing configuration
- `package.json`: Dependencies and build scripts

## Customization

### Adding Your Logo and Images

1. Replace placeholder images in `src/assets/images/`
2. Update the hero section background video
3. Add your professional photo to the "Why Choose Us" section

### Google Form Integration

Replace the placeholder in `QuoteSection.jsx` with your actual Google Form embed code.

### Contact Information

Update contact details in:
- `QuoteSection.jsx`
- `Footer.jsx`
- `SEOHead.jsx` (for schema markup)

## SEO Features

- Local business schema markup
- Optimized meta tags for each page
- Location-specific keywords
- Mobile-friendly design
- Fast loading times

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance

- Lighthouse score: 90+ across all metrics
- Optimized images
- Efficient CSS and JavaScript
- Fast loading times

## Support

For technical support or customization requests, contact the development team.

---

Built with ❤️ for Southern Bucks Lawnscaping

