import ReactGA from 'react-ga4'

// Google Analytics Configuration
const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX'

class Analytics {
  constructor() {
    this.isInitialized = false
  }

  // Initialize Google Analytics
  initialize() {
    if (GA_MEASUREMENT_ID && GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
      ReactGA.initialize(GA_MEASUREMENT_ID, {
        gtagOptions: {
          debug_mode: import.meta.env.DEV,
          send_page_view: false // We'll send page views manually
        }
      })
      this.isInitialized = true
    } else {
      console.warn('Google Analytics not initialized: Missing or invalid measurement ID')
    }
  }

  // Track page views
  trackPageView(path, title) {
    if (this.isInitialized) {
      ReactGA.send({
        hitType: 'pageview',
        page: path,
        title: title
      })
    }
  }

  // Track custom events
  trackEvent(action, category = 'User Interaction', label = '', value = 0) {
    if (this.isInitialized) {
      ReactGA.event({
        action,
        category,
        label,
        value
      })
    }
  }

  // Specific tracking methods for 21Goals events
  trackWaitlistSignup(email, source = 'hero_section') {
    this.trackEvent('waitlist_signup', 'Conversion', source, 1)
    
    // Also track as a conversion event
    if (this.isInitialized) {
      ReactGA.gtag('event', 'conversion', {
        send_to: GA_MEASUREMENT_ID,
        event_category: 'Conversion',
        event_label: 'Waitlist Signup',
        custom_parameters: {
          source: source
        }
      })
    }
  }

  trackFormInteraction(formField, action = 'focus') {
    this.trackEvent(`form_${action}`, 'Form Interaction', formField)
  }

  trackSocialClick(platform) {
    this.trackEvent('social_click', 'Social Media', platform)
  }

  trackNavigation(destination) {
    this.trackEvent('navigation_click', 'Navigation', destination)
  }

  trackScrollToSection(section) {
    this.trackEvent('scroll_to_section', 'Engagement', section)
  }

  trackLaunchDateView() {
    this.trackEvent('countdown_view', 'Engagement', 'launch_countdown')
  }

  trackFAQInteraction(question) {
    this.trackEvent('faq_toggle', 'Engagement', question)
  }

  // Track user engagement metrics
  trackTimeOnPage(timeInSeconds) {
    this.trackEvent('time_on_page', 'Engagement', 'seconds', timeInSeconds)
  }

  // Set user properties
  setUserProperty(property, value) {
    if (this.isInitialized) {
      ReactGA.gtag('config', GA_MEASUREMENT_ID, {
        custom_map: { [property]: value }
      })
    }
  }
}

// Create singleton instance
const analytics = new Analytics()

export default analytics 