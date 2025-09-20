# Portfolio Website Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from modern developer portfolios like Linear, Notion, and GitHub profiles. This utility-focused portfolio prioritizes clean presentation of information while maintaining visual appeal for professional credibility.

## Core Design Elements

### Color Palette
**Primary Colors:**
- Light mode: 220 15% 8% (dark text), 220 10% 98% (light background)
- Dark mode: 220 10% 95% (light text), 220 20% 8% (dark background)

**Accent Colors:**
- Primary brand: 220 90% 56% (professional blue)
- Success/highlight: 142 76% 36% (subtle green for achievements)

### Typography
- **Primary Font**: Inter or Poppins from Google Fonts
- **Code Font**: JetBrains Mono for technical elements
- **Hierarchy**: Large headings (2.5rem), section headings (1.5rem), body text (1rem)

### Layout System
**Spacing**: Consistent use of Tailwind units: 4, 8, 12, 16, 24 for padding/margins
**Container**: Max-width of 1200px, centered with generous side padding
**Grid**: CSS Grid for projects (3 columns desktop, 1 mobile)

## Component Library

### Navigation
- Fixed header with glass morphism effect (backdrop-blur)
- Horizontal navigation on desktop, hamburger menu on mobile
- Smooth scroll behavior with active section highlighting

### Section Components
1. **Hero/About**: Split layout - text left, profile image right
2. **Skills**: Grid cards with icons and proficiency indicators
3. **Experience**: Timeline layout with company logos and descriptions
4. **Education**: Card-based layout with institution details
5. **Publications**: List format with external links and dates
6. **Projects**: Card grid with hover effects, screenshots, and tech stack tags
7. **Contact**: Simple form with social media links

### Visual Elements
- **Cards**: Subtle shadows, rounded corners (8px), hover lift effects
- **Buttons**: Primary filled buttons, secondary outline variants
- **Tags**: Small rounded badges for skills and technologies
- **Dividers**: Subtle section separators

## Images
- **Profile Image**: Professional headshot (300x300px) in About section
- **Project Screenshots**: Mockups or actual application screenshots (16:9 aspect ratio)
- **Company Logos**: Small icons in Experience timeline
- **No large hero image**: Focus on content hierarchy over visual drama

## Responsive Design
- Mobile-first approach
- Navigation collapses to hamburger menu
- Grid layouts stack to single column on mobile
- Generous touch targets (44px minimum)

## Interaction Design
- Smooth scrolling between sections
- Subtle hover states on interactive elements
- Loading states for contact form submission
- Progressive disclosure for detailed project information

This design balances professional credibility with modern web aesthetics, ensuring the portfolio effectively showcases technical skills while remaining accessible and performant.