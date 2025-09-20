# Portfolio Website

## Overview

A modern, responsive portfolio website built with React, TypeScript, and Express.js. Features a clean design inspired by Linear and Notion, showcasing professional information through dedicated sections for About, Skills, Experience, Education, Publications, Projects, and Contact. The application includes dark/light theme support, smooth scroll animations, and a functional contact form.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development patterns
- **Styling**: Tailwind CSS with custom design system using CSS variables for theming
- **Component Library**: Shadcn/ui components built on Radix UI primitives for accessibility
- **State Management**: React Query for server state and React hooks for local state
- **Build Tool**: Vite for fast development and optimized production builds
- **Animation Strategy**: Intersection Observer API for scroll-triggered animations

### Backend Architecture
- **Server Framework**: Express.js with TypeScript for API endpoints
- **Database Layer**: Drizzle ORM with PostgreSQL schema definitions
- **Storage Abstraction**: Interface-based storage pattern with in-memory implementation
- **Validation**: Zod schemas for request validation and type inference
- **Development Tools**: Hot module replacement with Vite middleware integration

### Design System
- **Theme System**: CSS custom properties for light/dark mode switching
- **Typography**: Inter/Poppins for UI text, JetBrains Mono for code elements
- **Component Variants**: Class Variance Authority for consistent component styling
- **Spacing System**: Tailwind utility classes with standardized spacing scale
- **Color Palette**: Neutral base with blue accent colors, semantic color tokens

### Data Management
- **Database**: PostgreSQL with Drizzle migrations for schema management
- **Connection**: Neon serverless PostgreSQL adapter for cloud deployment
- **Schema**: User management with username/password authentication foundation
- **Query Layer**: React Query for client-side caching and synchronization

### Contact Form Integration
- **Validation**: Zod schema validation for form data integrity
- **API Endpoint**: Express route handler with error handling and response formatting
- **Future Integration**: Prepared for email service integration (SendGrid, Nodemailer)
- **User Feedback**: Toast notifications for form submission status

## External Dependencies

### UI and Styling
- **Radix UI**: Comprehensive component library for accessible UI primitives
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Lucide React**: Icon library for consistent iconography
- **Class Variance Authority**: Type-safe component variant system

### Database and Backend
- **Drizzle ORM**: Type-safe database toolkit with PostgreSQL support
- **Neon Database**: Serverless PostgreSQL for cloud deployment
- **Express.js**: Web framework for API server implementation

### Development Tools
- **Vite**: Build tool with HMR and development server
- **TypeScript**: Static type checking for enhanced developer experience
- **React Query**: Server state management and caching
- **Zod**: Runtime type validation and schema definition

### Fonts and Assets
- **Google Fonts**: Inter, Poppins, and JetBrains Mono font families
- **Profile Images**: Static assets with optimized loading