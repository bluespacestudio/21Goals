// App Configuration
export const APP_CONFIG = {
  APP_NAME: 'GoalJack',
  APP_DESCRIPTION: 'Fantasy Football Reimagined',
  GOAL_TARGET: 21,
  MAX_PLAYERS_PER_SQUAD: 4,
  MAX_MINI_LEAGUES: 15,
}

// Premier League Teams
export const PREMIER_LEAGUE_TEAMS = [
  { id: 1, name: 'Arsenal', shortName: 'ARS' },
  { id: 2, name: 'Aston Villa', shortName: 'AVL' },
  { id: 3, name: 'Brighton & Hove Albion', shortName: 'BHA' },
  { id: 4, name: 'Burnley', shortName: 'BUR' },
  { id: 5, name: 'Chelsea', shortName: 'CHE' },
  { id: 6, name: 'Crystal Palace', shortName: 'CRY' },
  { id: 7, name: 'Everton', shortName: 'EVE' },
  { id: 8, name: 'Fulham', shortName: 'FUL' },
  { id: 9, name: 'Liverpool', shortName: 'LIV' },
  { id: 10, name: 'Luton Town', shortName: 'LUT' },
  { id: 11, name: 'Manchester City', shortName: 'MCI' },
  { id: 12, name: 'Manchester United', shortName: 'MUN' },
  { id: 13, name: 'Newcastle United', shortName: 'NEW' },
  { id: 14, name: 'Nottingham Forest', shortName: 'NFO' },
  { id: 15, name: 'Sheffield United', shortName: 'SHU' },
  { id: 16, name: 'Tottenham Hotspur', shortName: 'TOT' },
  { id: 17, name: 'West Ham United', shortName: 'WHU' },
  { id: 18, name: 'Wolverhampton Wanderers', shortName: 'WOL' },
  { id: 19, name: 'Brentford', shortName: 'BRE' },
  { id: 20, name: 'Bournemouth', shortName: 'BOU' },
]

// Player Positions
export const PLAYER_POSITIONS = [
  { value: 'goalkeeper', label: 'Goalkeeper' },
  { value: 'defender', label: 'Defender' },
  { value: 'midfielder', label: 'Midfielder' },
  { value: 'forward', label: 'Forward' },
]

// Countries (sample)
export const COUNTRIES = [
  { code: 'GB', name: 'United Kingdom' },
  { code: 'US', name: 'United States' },
  { code: 'CA', name: 'Canada' },
  { code: 'AU', name: 'Australia' },
  { code: 'DE', name: 'Germany' },
  { code: 'FR', name: 'France' },
  { code: 'ES', name: 'Spain' },
  { code: 'IT', name: 'Italy' },
  { code: 'NL', name: 'Netherlands' },
  { code: 'BR', name: 'Brazil' },
  { code: 'AR', name: 'Argentina' },
  { code: 'IN', name: 'India' },
  { code: 'NG', name: 'Nigeria' },
  { code: 'ZA', name: 'South Africa' },
]

// Routes
export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  SIGNUP: '/signup',
  DASHBOARD: '/dashboard',
  PLAYER_SELECTION: '/select-players',
  LEADERBOARDS: '/leaderboards',
  MINI_LEAGUES: '/leagues',
  SETTINGS: '/settings',
}

// API Endpoints (for future use)
export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    SIGNUP: '/auth/signup',
    LOGOUT: '/auth/logout',
  },
  PLAYERS: '/players',
  LEAGUES: '/leagues',
  LEADERBOARDS: '/leaderboards',
}

// Local Storage Keys
export const STORAGE_KEYS = {
  USER: 'goaljack_user',
  SELECTED_PLAYERS: 'goaljack_selected_players',
  SETTINGS: 'goaljack_settings',
}

// Export color constants
export { BRAND_COLORS, TAILWIND_CLASSES, COLOR_USAGE } from './colors' 