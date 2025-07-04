# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `yarn dev` - Start the development server
- `yarn build` - Build the production application
- `yarn start` - Start the production server
- `yarn chromatic` - Deploy Storybook to Chromatic (requires CHROMATIC_PROJECT_TOKEN in .env)

## Architecture Overview

This is a Next.js 15 personal website with the following architecture:

### Frontend Structure
- **Pages**: Standard Next.js pages in `/pages`
  - Main page (`/pages/index.js`) uses static fake experience data (pre-rendered at build time)
  - Admin section (`/pages/admin/`) with authentication
  - API routes (`/pages/api/`) for remaining functionality

### Component Architecture
- **Layout**: Main layout wrapper (`/components/layout/`)
- **Header**: Site header component (`/components/header/`)
- **Sidebar**: Contains certifications and contributions (`/components/sidebar/`)
- **Content**: Main content area with experiences (`/components/content/`)
- **Shared**: Reusable components like Footer, HeaderTitles, dividers

### Data Layer
- **Static Data**: Experience and contribution data (no database required)
- **Mock APIs**: All API endpoints return mock data for development
- **Authentication**: Cookie-based auth with utilities in `/lib/auth-cookies.js` (mock implementation)

### Key Data Flow
1. Home page uses static fake experience data from `/mocks/experiences.js`
2. Contributions component fetches mock data from `/api/contributions` API route
3. Admin login uses mock authentication (accepts any credentials)
4. Components use CSS modules for styling (`.module.css` files)

### Mock Data Structure
- **Experience**: Objects with description, logo, order, time, title, and tags
- **Contribution**: Objects with name, description, stars, and url
- **User**: Simple user object with id, email, and name

### Environment Configuration
- Uses `WEBSITE_BASE_URL` for absolute URL generation (optional)
- Chromatic deployment requires `CHROMATIC_PROJECT_TOKEN`
- No database configuration required (all mock data)

### Updated Dependencies
- Uses Next.js 15 with React 18
- Modern dependency versions throughout
- react-tooltip v5 with updated API (uses `data-tooltip-id` and `data-tooltip-content` attributes)