# Modern Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features a dark mode design with smooth animations and micro-interactions.

## Features

- ⚡ **Next.js 14** - Latest features from Next.js
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 📱 **Responsive Design** - Mobile-first approach
- 🌙 **Dark Mode** - Sleek dark theme
- 🎭 **Animations** - Smooth transitions and effects using Framer Motion
- 🔍 **SEO Optimized** - Meta tags and structured data
- 📊 **Performance Optimized** - Optimized for Core Web Vitals
- 🛠️ **TypeScript** - Type-safe code
- 📝 **Content Config** - Easy content management
- 🚀 **Easy Deployment** - Ready for Netlify deployment

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/yourusername/portfolio.git
```

2. Install dependencies:

```bash
cd portfolio
npm install
```

3. Configure your content:

- Edit `src/config/content.config.ts` with your information
- Add your profile image at `public/images/profile.jpg`
- Update project screenshots in `public/images/projects/`

4. Start the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) to see your portfolio.

## Project Structure

```
src/
├── app/               # Next.js app directory
├── components/        # React components
│   ├── common/       # Reusable components
│   ├── layout/       # Layout components
│   └── sections/     # Page sections
├── config/           # Configuration files
├── hooks/            # Custom React hooks
├── styles/           # Global styles
├── types/            # TypeScript types
└── utils/            # Utility functions
```

## Customization

### Content

Edit `src/config/content.config.ts` to update:

- Personal information
- Skills and expertise
- Projects showcase
- Work experience
- Education details
- Contact information

### Styling

- Customize colors in `tailwind.config.ts`
- Modify global styles in `src/app/globals.css`
- Update components' styles in their respective files

### Images

Replace the following images with your own:

- `public/images/profile.jpg` - Profile picture
- `public/images/projects/*` - Project screenshots
- `public/images/testimonials/*` - Testimonial avatars

## Deployment

This portfolio is configured for easy deployment on Netlify:

1. Push your repository to GitHub
2. Create a new site on Netlify
3. Connect your GitHub repository
4. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React](https://reactjs.org/)
