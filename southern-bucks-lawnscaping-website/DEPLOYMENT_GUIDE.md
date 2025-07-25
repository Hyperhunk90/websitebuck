# Southern Bucks Lawnscaping - Deployment Guide

## Quick Start for Netlify Deployment

### Step 1: Upload to GitHub

1. **Create a new repository** on GitHub:
   - Go to https://github.com
   - Click "New repository"
   - Name it: `southern-bucks-lawnscaping`
   - Make it public
   - Don't initialize with README (we already have one)

2. **Upload your files**:
   - Download the entire `southern-bucks-lawnscaping` folder
   - Use GitHub's web interface to upload files, or use Git commands:

   ```bash
   cd southern-bucks-lawnscaping
   git init
   git add .
   git commit -m "Initial website commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/southern-bucks-lawnscaping.git
   git push -u origin main
   ```

### Step 2: Deploy on Netlify

1. **Sign up/Login to Netlify**:
   - Go to https://netlify.com
   - Sign up with GitHub account (recommended)

2. **Create new site**:
   - Click "New site from Git"
   - Choose "GitHub"
   - Select your `southern-bucks-lawnscaping` repository

3. **Configure build settings**:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Click "Deploy site"

4. **Wait for deployment**:
   - First deployment takes 2-3 minutes
   - You'll get a URL like `https://amazing-name-123456.netlify.app`

### Step 3: Custom Domain (Optional)

1. **In Netlify dashboard**:
   - Go to "Domain settings"
   - Click "Add custom domain"
   - Enter: `southernbucklawn.com`

2. **Configure DNS**:
   - Point your domain's DNS to Netlify
   - Netlify will provide specific instructions

## Important Notes

### Files You Need to Customize

1. **Replace placeholder video**:
   - The hero section currently uses a placeholder background
   - Add your lawn care video to `src/assets/` and update `HeroSection.jsx`

2. **Add your logo**:
   - Replace the text logo in `Navigation.jsx` with your actual logo image

3. **Add your professional photo**:
   - Add to `src/assets/images/` and update `WhyChooseUsSection.jsx`

4. **Google Form integration**:
   - Replace the placeholder in `QuoteSection.jsx` with your actual Google Form embed

### Pre-configured Features

✅ **SEO Optimized**: All meta tags, schema markup, and local SEO ready
✅ **Mobile Responsive**: Works perfectly on all devices
✅ **Fast Loading**: Optimized for speed and performance
✅ **Professional Design**: Dark theme with your brand colors
✅ **Contact Forms**: Ready for your Google Form integration
✅ **Service Pages**: All your services are listed and described
✅ **Portfolio Gallery**: Ready for your project photos
✅ **Testimonials**: Customer review carousel
✅ **Local SEO**: Optimized for Walker, LA and surrounding areas

### Build Configuration

The website is configured with:
- **React 19**: Latest React version
- **Vite**: Fast build tool
- **Tailwind CSS**: Modern styling
- **All dependencies included**: No additional packages needed

### Netlify Configuration

Pre-configured files:
- `netlify.toml`: Build and redirect settings
- `public/_redirects`: SPA routing
- `package.json`: All dependencies and scripts

## Troubleshooting

### Build Errors

If you get build errors:
1. Check that Node.js version is set to 20 in Netlify
2. Ensure all files were uploaded correctly
3. Check the build logs in Netlify dashboard

### Missing Images

If images don't load:
1. Ensure images are in `src/assets/images/`
2. Check file paths in components
3. Rebuild and redeploy

### Form Not Working

The Google Form placeholder needs to be replaced:
1. Create your Google Form
2. Get the embed code
3. Replace the placeholder in `QuoteSection.jsx`

## Performance Optimization

The website is already optimized for:
- ⚡ Fast loading (< 3 seconds)
- 📱 Mobile performance
- 🔍 SEO ranking
- 🎯 Local search visibility

## Support

If you encounter any issues:
1. Check the build logs in Netlify
2. Ensure all files are uploaded correctly
3. Verify your domain DNS settings (if using custom domain)

## Success Checklist

- [ ] Repository created on GitHub
- [ ] All files uploaded to repository
- [ ] Netlify site created and deployed
- [ ] Website loads correctly at provided URL
- [ ] All pages navigate properly
- [ ] Contact information is correct
- [ ] Ready to add your custom content (logo, video, photos)

Your website is now live and ready for business! 🎉

