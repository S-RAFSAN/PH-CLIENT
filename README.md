# PH University Management System - Frontend

Frontend application for the PH University Management System built with React, TypeScript, and Tailwind CSS.

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Variables

Copy `.env.example` to `.env` and update if needed:

```
VITE_API_URL=http://localhost:5000/api
```

### 3. Start Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
ph-client/
├── src/
│   ├── components/     # React components
│   ├── context/       # React context (Auth)
│   ├── pages/         # Page components
│   ├── services/      # API services
│   ├── types/         # TypeScript types
│   ├── utils/         # Utility functions
│   ├── App.tsx        # Main app component
│   └── main.tsx       # Entry point
├── public/            # Static assets
└── package.json
```

## Features

- Authentication (Login/Logout)
- Role-based access control
- Profile management
- Student dashboard (enrollment, schedule, grades, notices)
- Faculty dashboard (student management, grade management)
- Admin dashboard (full CRUD operations)

## Technologies

- React 18
- TypeScript
- Tailwind CSS
- React Router
- Axios
