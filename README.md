# GoalJack - Fantasy Football Reimagined

A modern fantasy football web app where you pick 4 Premier League players and track their combined goals to reach the target of 21 goals.

## Features

- **Simple Setup**: Pick 4 Premier League players and you're ready to play
- **Live Tracking**: Real-time goal updates powered by Sportmonks API
- **Mini-Leagues**: Create and join private leagues with friends (up to 15 leagues per player)
- **Global Competition**: Compete on global, country, and team-based leaderboards
- **Goal Target**: First to reach 21 combined goals wins

## Tech Stack

- **Frontend**: React + Vite + JavaScript
- **Styling**: Tailwind CSS
- **Database & Auth**: Supabase
- **API**: Sportmonks (live football data)
- **Routing**: React Router v6

## Project Structure

```
src/
├── assets/          # Images, icons, static files
├── components/      # Reusable UI components
│   ├── ui/         # Basic UI components (Button, Card, Input)
│   └── shared/     # Shared business components
├── features/        # Feature-based modules
│   ├── landing/    # Landing page and coming soon
│   ├── auth/       # Authentication (login, signup)
│   ├── playerSelection/  # Player search and selection
│   ├── dashboard/  # User dashboard with stats
│   ├── leagues/    # Mini-league management
│   ├── leaderboards/  # Global and filtered leaderboards
│   └── settings/   # User settings and profile
├── lib/            # Third-party integrations (Supabase, API clients)
├── layouts/        # Page layouts
├── pages/          # Route-level page components
├── routes/         # Routing configuration
├── store/          # State management
├── constants/      # App constants and configuration
└── styles/         # Global styles and Tailwind
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd goaljack
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
   
   Fill in your Supabase and Sportmonks API credentials.

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

Create a `.env` file in the root directory with:

```env
# Supabase Configuration
VITE_SUPABASE_URL=your-supabase-project-url
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key

# Sportmonks API (for live stats)
VITE_SPORTMONKS_API_KEY=your-sportmonks-api-key
VITE_SPORTMONKS_BASE_URL=https://api.sportmonks.com/v3

# App Configuration
VITE_APP_NAME=GoalJack
VITE_APP_ENV=development
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## How It Works

1. **Player Selection**: Users select 4 Premier League players from any teams
2. **Goal Tracking**: Live goals are tracked via Sportmonks API
3. **Target Achievement**: First users to reach 21 combined goals win
4. **Competition**: Global leaderboards and mini-leagues for friends

## Current Status

🚧 **In Development**

- ✅ Project scaffolding and basic structure
- ✅ Tailwind CSS setup and design system
- ✅ Coming Soon page with email collection
- ⏳ Authentication system
- ⏳ Player selection interface
- ⏳ Dashboard and live tracking
- ⏳ Mini-league system
- ⏳ Leaderboards

## Contributing

This is a personal project, but suggestions and feedback are welcome!

## License

Private project - All rights reserved. 