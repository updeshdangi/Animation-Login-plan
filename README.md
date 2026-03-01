# Scroll-Driven Hero Section Animation

A premium scroll-driven hero section animation built with Next.js, Tailwind CSS, and GSAP. This project recreates an engaging hero section with letter-spaced headline, animated statistics, and smooth scroll-based interactions.

![Hero Animation Preview](https://via.placeholder.com/1200x600/0a0a0a/ff4d4d?text=Scroll+Animation+Demo)

## 🌟 Features

- **Letter-spaced headline**: "W E L C O M E I T Z F I Z Z" with staggered reveal animation
- **Impact statistics**: Four animated stat cards with glassmorphism effect
- **Scroll-driven animations**: Smooth parallax effects using GSAP ScrollTrigger
- **Responsive design**: Works on mobile, tablet, and desktop
- **Performance optimized**: Uses CSS transforms for smooth 60fps animations

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animation**: GSAP + ScrollTrigger
- **Fonts**: Bebas Neue (headlines), Outfit (body)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- GitHub account (for deployment)

### Installation

```
bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/hero-scroll-animation.git

# Navigate to project directory
cd hero-scroll-animation

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the project.

### Building for Production

```
bash
# Build the project
npm run build

# The static files will be in the out/ directory
```

## 📁 Project Structure

```
hero-scroll-animation/
├── app/
│   ├── globals.css      # Global styles and Tailwind
│   ├── layout.js        # Root layout
│   └── page.js          # Main page
├── components/
│   └── HeroSection.jsx  # Hero section component
├── public/              # Static assets
├── package.json
├── tailwind.config.js
├── next.config.js
└── README.md
```

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to change colors:

```
javascript
colors: {
  background: '#0a0a0a',
  accent: '#ff4d4d',
  // ... etc
}
```

### Animation Settings

Modify the GSAP animations in `components/HeroSection.jsx`:

```
javascript
// Change intro animation duration
tl.fromTo(element, {...}, { duration: 0.8 })

// Adjust scroll trigger sensitivity
scrub: 1  // Higher = more delay
```

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px  
- Desktop: > 1024px

## 🔗 Deployment to GitHub Pages

### Option 1: Using GitHub Actions (Recommended)

1. Create a new repository on GitHub
2. Push your code to the repository:
   
```
bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/hero-scroll-animation.git
   git push -u origin main
   
```

3. Go to repository Settings → Pages
4. Under "Build and deployment", select:
   - Source: **Deploy from a branch**
   - Branch: **gh-pages** (after we create it)
   - Folder: **/ (root)**

5. Create a GitHub Actions workflow:
   - Create `.github/workflows/deploy.yml`:

```
yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

6. Push the workflow file:
   
```
bash
   git add .github/workflows/deploy.yml
   git commit -m "Add GitHub Pages deployment workflow"
   git push
   
```

7. After the workflow runs, go to Settings → Pages and select:
   - Branch: **gh-pages**
   - Folder: **/ (root)**

8. Your site will be available at: `https://YOUR_USERNAME.github.io/hero-scroll-animation/`

### Option 2: Manual Deployment

1. Build the project: `npm run build`
2. Go to repository Settings → Pages
3. Select Source: **Deploy from a branch**
4. Branch: **main** → Folder: **/out**
5. Commit the `out` folder to your repository

## 📝 License

MIT License - feel free to use for your projects!

---

Built with ❤️ using Next.js, Tailwind CSS, and GSAP

## 🔗 Live Demo

[View Live Demo](https://your-username.github.io/hero-scroll-animation)
# Animation-Login-plan
