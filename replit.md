# Overview

This is a full-stack web application built with React and Express.js, designed as a demonstration of modern web development patterns. The application features a clean, modern UI built with React and shadcn/ui components, backed by an Express.js API server. It's configured for deployment on Vercel and includes comprehensive tooling for development, database management, and UI components.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript, using Vite as the build tool and development server
- **Routing**: Wouter for lightweight client-side routing
- **UI Framework**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming and custom design tokens
- **State Management**: TanStack Query (React Query) for server state management
- **Forms**: React Hook Form with Zod validation through @hookform/resolvers

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Development**: TSX for development server with hot reload
- **Production Build**: esbuild for server bundling
- **API Structure**: RESTful API with middleware for logging and error handling

## Database and ORM
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Schema Management**: Centralized schema definitions in `/shared/schema.ts`
- **Migrations**: Drizzle Kit for database migrations and schema pushing
- **Type Safety**: Full TypeScript integration with inferred types from schema

## Development and Build System
- **Monorepo Structure**: Shared code between client and server in `/shared` directory
- **Path Aliases**: Configured TypeScript paths for clean imports (`@/`, `@shared/`)
- **Development Server**: Vite with React plugin and runtime error overlay
- **Build Process**: Separate builds for client (Vite) and server (esbuild)
- **Type Checking**: Strict TypeScript configuration across all packages

## Storage and Session Management
- **Session Storage**: In-memory storage implementation with interface for future database integration
- **User Management**: Basic user CRUD operations with username/password structure
- **Data Persistence**: PostgreSQL session store configuration with connect-pg-simple

## UI Component System
- **Design System**: shadcn/ui "New York" variant with neutral color scheme
- **Component Library**: Comprehensive set of accessible components including forms, navigation, feedback, and data display
- **Theming**: CSS custom properties with light/dark mode support
- **Responsive Design**: Mobile-first approach with Tailwind CSS breakpoints
- **Icons**: Lucide React icon library for consistent iconography

# External Dependencies

## Database Services
- **Neon Database**: Serverless PostgreSQL database hosting
- **Connection**: @neondatabase/serverless for optimized serverless connections

## UI and Styling
- **Radix UI**: Accessible, unstyled UI primitives for complex components
- **Tailwind CSS**: Utility-first CSS framework with PostCSS integration
- **Inter Font**: Google Fonts integration for typography

## Development Tools
- **Vite**: Fast build tool and development server with React support
- **Replit Integration**: Development environment support with cartographer and error modal plugins
- **esbuild**: Fast JavaScript bundler for production server builds

## Validation and Forms
- **Zod**: TypeScript-first schema validation
- **React Hook Form**: Performant forms with easy validation
- **Drizzle-Zod**: Integration between Drizzle ORM and Zod schemas

## State Management and Data Fetching
- **TanStack Query**: Powerful data synchronization for React applications
- **Wouter**: Minimalist routing library for React

## Utility Libraries
- **date-fns**: Modern JavaScript date utility library
- **clsx & tailwind-merge**: Conditional className utilities
- **class-variance-authority**: Creating variant-based component APIs
- **nanoid**: URL-friendly unique string ID generator