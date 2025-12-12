# TreeMaster Pro Services - Landing Page

A stunning, modern single-page hero landing page for a professional tree cutting service company built with React and Tailwind CSS.

## Features

- 🎨 **Modern Design**: Clean, professional interface optimized for conversions
- 📱 **Fully Responsive**: Perfect viewing experience on desktop, tablet, and mobile
- 🖼️ **Image Carousel**: Auto-rotating background with 5 high-quality images
- ⚡ **Smooth Animations**: Staggered entrance animations and smooth transitions
- 🎯 **Clear CTAs**: Prominent call-to-action buttons for quotes and phone calls
- ♿ **Accessible**: ARIA labels and keyboard navigation support
- 🚀 **Performance Optimized**: Lazy loading, efficient rendering

## Tech Stack

- **React 18** - Modern functional components with hooks
- **Tailwind CSS 3** - Utility-first styling
- **Lucide React** - Beautiful, consistent icons
- **Vite** - Lightning-fast build tool

## Quick Start

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:3000` to view the site.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
PROYECTO 35/
├── App.jsx              # Main React component
├── main.jsx            # React entry point
├── index.html          # HTML template
├── index.css           # Global styles + Tailwind directives
├── tailwind.config.js  # Tailwind configuration
├── vite.config.js      # Vite configuration
├── package.json        # Dependencies
└── README.md          # Documentation
```

## Key Components

### Navigation Bar
- Fixed top position with backdrop blur effect
- Responsive mobile menu (hamburger)
- Prominent phone CTA button
- Smooth hover animations

### Hero Section
- Full viewport height (100vh)
- Auto-rotating carousel (5-second intervals)
- Pause on hover functionality
- Navigation dots and arrow controls
- Dark overlay for text readability

### Content Elements
- Compelling headline with text shadow
- Trust-building subheadline
- Feature badges (24/7 service, licensed, free estimates)
- Dual CTA buttons (Get Quote / Call Now)
- Staggered entrance animations

## Customization

### Colors
Edit the color palette in `tailwind.config.js`:
```js
colors: {
  forest: '#065F46',    // Primary green
  orange: '#EA580C',    // CTA buttons
}
```

### Images
Replace Unsplash URLs in `App.jsx` carousel array with your own images.

### Content
Update text, phone number, and links directly in `App.jsx`.

## Performance Features

- **Image lazy loading**: Only first image loads eagerly
- **Efficient state management**: Minimal re-renders
- **CSS animations**: Hardware-accelerated transitions
- **Auto-pause carousel**: On hover to reduce unnecessary updates
- **Optimized bundle**: Vite's production build optimization

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - Free to use for commercial and personal projects.

## Contact

For questions or support, call **213-338-0162**

---

Built with ❤️ using React + Tailwind CSS
