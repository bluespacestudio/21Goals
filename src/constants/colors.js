// 21Goals Brand Color Palette
// Use these color references throughout the application

export const BRAND_COLORS = {
  // Primary Brand Color - Dark Green
  PRIMARY: '#278E51',
  
  // Secondary Accent - Yellow
  SECONDARY: '#FFD93B',
  
  // Tertiary Alert Color - Red (used sparingly for alerts, bust status)
  TERTIARY: '#F60101',
  
  // Background
  BACKGROUND: '#FFFFFF',
}

// Tailwind Class Reference
export const TAILWIND_CLASSES = {
  // Primary (Green) - Main brand color
  primary: {
    50: 'bg-primary-50 text-primary-50',    // Very light green
    100: 'bg-primary-100 text-primary-100', // Light green
    500: 'bg-primary-500 text-primary-500', // Main brand green (#278E51)
    600: 'bg-primary-600 text-primary-600', // Darker green
  },
  
  // Secondary (Yellow) - For accents and highlights
  secondary: {
    100: 'bg-secondary-100 text-secondary-100', // Light yellow
    400: 'bg-secondary-400 text-secondary-400', // Main yellow (#FFD93B)
    500: 'bg-secondary-500 text-secondary-500', // Darker yellow
  },
  
  // Tertiary (Red) - For alerts, warnings, bust status
  tertiary: {
    500: 'bg-tertiary-500 text-tertiary-500', // Main red (#F60101)
    600: 'bg-tertiary-600 text-tertiary-600', // Darker red
  },
  
  // Success colors (same as primary)
  success: {
    500: 'bg-success-500 text-success-500', // Same as primary-500
  },
  
  // Danger colors (same as tertiary)
  danger: {
    500: 'bg-danger-500 text-danger-500', // Same as tertiary-500
  },
}

// Usage Guidelines
export const COLOR_USAGE = {
  primary: 'Use for main CTAs, navigation, brand elements, success states',
  secondary: 'Use for accents, highlights, secondary buttons, energy/excitement',
  tertiary: 'Use sparingly for alerts, warnings, bust status, critical actions',
  background: 'Main page background, card backgrounds',
} 