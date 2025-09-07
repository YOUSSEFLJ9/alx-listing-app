# ALX Listing App

A modern Airbnb clone built with Next.js, TypeScript, and Tailwind CSS. This project demonstrates a property listing application with reusable components and a clean, maintainable architecture.

## Project Overview

This application serves as a foundation for building a property rental platform similar to Airbnb. It features a responsive design, type-safe development with TypeScript, and a component-based architecture for scalability and maintainability.

## Project Structure

\`\`\`
alx-listing-app/
├── components/
│   └── common/
│       ├── Card.tsx          # Reusable card component for property listings
│       └── Button.tsx        # Reusable button component with variants
├── interfaces/
│   └── index.ts              # TypeScript interfaces and type definitions
├── constants/
│   └── index.ts              # Application constants and configuration
├── pages/
│   ├── _app.tsx              # Next.js app wrapper
│   └── index.tsx             # Home page
├── public/
│   └── assets/               # Static assets (images, SVGs, etc.)
├── styles/
│   └── globals.css           # Global styles with Tailwind CSS
└── README.md
\`\`\`

### Directory Purpose

- **`components/common/`**: Houses reusable UI components that can be used across different pages
- **`interfaces/`**: Contains TypeScript type definitions for props, data models, and API responses
- **`constants/`**: Stores application-wide constants, configuration settings, and static data
- **`public/assets/`**: Static assets like images, icons, and other media files
- **`pages/`**: Next.js pages using the Pages Router architecture
- **`styles/`**: Global CSS styles and Tailwind CSS configuration

## Features

- ✅ **TypeScript Integration**: Full type safety across the application
- ✅ **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- ✅ **ESLint Configuration**: Code linting for maintaining code quality
- ✅ **Pages Router**: Traditional Next.js routing system
- ✅ **Reusable Components**: Modular Card and Button components
- ✅ **Responsive Design**: Mobile-first approach with Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn package manager

### Installation

1. Clone the repository:
   \`\`\`bash
   git clone <repository-url>
   cd alx-listing-app
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. Run the development server:
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

4. Open your browser and navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code linting

## Development Guidelines

1. **Components**: Place reusable components in `components/common/`
2. **Types**: Define all TypeScript interfaces in `interfaces/index.ts`
3. **Constants**: Store configuration and static data in `constants/index.ts`
4. **Styling**: Use Tailwind CSS classes for styling components
5. **Assets**: Place all images and static files in `public/assets/`

## Next Steps

- Implement property listing functionality
- Add search and filtering capabilities
- Create detailed property pages
- Implement user authentication
- Add booking functionality
- Integrate with a backend API

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run linting and tests
5. Submit a pull request

## License

This project is created for educational purposes as part of the ALX Software Engineering program.
