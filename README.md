# Darshan Gopani - Portfolio Website

A production-grade, multi-page portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features a modern design system, smooth animations, and comprehensive SEO optimization.

## 🚀 Features

- **Multi-page Architecture**: Dedicated pages for Home, About, Projects, Experience, Skills, Blog, and Contact
- **Modern Design System**: Custom Tailwind CSS configuration with dark/light theme support
- **Smooth Animations**: Framer Motion for tasteful micro-interactions and page transitions
- **Type Safety**: Full TypeScript implementation with comprehensive type definitions
- **SEO Optimized**: Next.js metadata, sitemap.xml, robots.txt, and JSON-LD structured data
- **Responsive Design**: Mobile-first approach with responsive breakpoints
- **Accessibility**: WCAG compliant with proper focus management and reduced motion support
- **Performance**: Optimized for Lighthouse scores with lazy loading and image optimization

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 + Custom Design System
- **UI Components**: Custom components with shadcn/ui patterns
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod validation
- **Fonts**: DM Sans (headings) + JetBrains Mono (code)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── projects/          # Projects listing and detail pages
│   ├── experience/        # Experience timeline
│   ├── skills/            # Skills showcase
│   ├── blog/              # Blog listing and posts
│   ├── contact/           # Contact form
│   ├── api/               # API routes
│   ├── globals.css        # Global styles and design system
│   ├── layout.tsx         # Root layout with providers
│   └── page.tsx           # Home page
├── components/            # Reusable UI components
│   ├── ui/               # Base UI components (Button, Card, etc.)
│   ├── navigation.tsx    # Main navigation
│   ├── footer.tsx        # Site footer
│   ├── theme-toggle.tsx  # Dark/light mode toggle
│   └── ...               # Other components
├── contexts/             # React contexts
│   └── theme-context.tsx # Theme management
├── data/                 # Content data
│   └── content.json      # Single source of truth for all content
├── lib/                  # Utility functions
│   ├── content.ts        # Content loading utilities
│   └── utils.ts          # General utilities
└── types/                # TypeScript type definitions
    └── content.ts        # Content type definitions
```

## 🎨 Design System

### Colors
- **Background**: `#0b1220` (dark) / `#ffffff` (light)
- **Foreground**: `#e6eef8` (dark) / `#111827` (light)
- **Brand**: `#4f46e5` (indigo-600)
- **Accent Green**: `#22c55e` (green-500)
- **Accent Cyan**: `#06b6d4` (cyan-500)

### Typography
- **Headings**: DM Sans (Google Fonts)
- **Code**: JetBrains Mono (Google Fonts)
- **System Fallbacks**: System UI fonts

### Spacing & Layout
- **Container**: Max-width with responsive padding
- **Grid**: CSS Grid and Flexbox for layouts
- **Spacing**: Consistent scale using Tailwind spacing utilities

## 📝 Content Management

All content is managed through the `src/data/content.json` file. This includes:

- Site metadata and social links
- Navigation structure
- Home page content
- About page content
- Projects data
- Experience timeline
- Skills categories
- Blog posts
- Contact information
- SEO metadata

### Adding a New Project

1. Open `src/data/content.json`
2. Add a new project object to the `projects.items` array:

```json
{
  "slug": "project-slug",
  "title": "Project Title",
  "role": "Your Role",
  "period": "2024-2025",
  "stack": ["Technology1", "Technology2"],
  "summary": "Brief project description",
  "problem": "Problem statement",
  "approach": "Your approach",
  "outcome": "Results achieved",
  "links": {
    "demo": "https://demo-url.com",
    "repo": "https://github.com/username/repo"
  }
}
```

### Adding a New Blog Post

1. Add a new post object to the `blog.posts` array in `content.json`:

```json
{
  "slug": "post-slug",
  "title": "Post Title",
  "excerpt": "Brief excerpt",
  "tags": ["Tag1", "Tag2"],
  "date": "2025-01-01"
}
```

2. Create the corresponding MDX file in `src/app/blog/[slug]/page.tsx` (if using MDX)

### Updating Skills

Modify the `skills` object in `content.json`:

```json
{
  "Category Name": ["Skill 1", "Skill 2", "Skill 3"]
}
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for environment-specific configuration:

```env
# Analytics (optional)
NEXT_PUBLIC_GA_MEASUREMENT_ID=your-ga-id

# Contact Form (optional)
CONTACT_EMAIL=your-email@example.com
```

### Customization

1. **Colors**: Update the CSS custom properties in `src/app/globals.css`
2. **Fonts**: Modify the font imports and variables in `src/app/layout.tsx`
3. **Content**: Edit `src/data/content.json` for all text content
4. **Styling**: Customize components in the `src/components/` directory

## 📊 Performance

The site is optimized for:
- **Lighthouse Performance**: 95+ score target
- **Core Web Vitals**: Optimized LCP, FID, and CLS
- **SEO**: Comprehensive meta tags and structured data
- **Accessibility**: WCAG 2.1 AA compliance

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For questions or support, please open an issue or contact [darshangopani2@gmail.com](mailto:darshangopani2@gmail.com).

---

Built with ❤️ by Darshan Gopani
