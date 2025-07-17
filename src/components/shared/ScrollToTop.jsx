import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import analytics from '../../lib/analytics'

export const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    // Scroll to top instantly when route changes for better UX
    window.scrollTo(0, 0)
    
    // Track page view for route changes
    const pageTitle = getPageTitle(pathname)
    analytics.trackPageView(pathname, pageTitle)
  }, [pathname])

  return null // This component doesn't render anything
}

// Helper function to get page titles based on pathname
const getPageTitle = (pathname) => {
  const titleMap = {
    '/': '21Goals - Coming Soon',
    '/login': '21Goals - Login',
    '/signup': '21Goals - Sign Up',
    '/dashboard': '21Goals - Dashboard',
    '/privacy-policy': '21Goals - Privacy Policy',
    '/terms-of-use': '21Goals - Terms of Use'
  }
  
  return titleMap[pathname] || `21Goals - ${pathname.replace('/', '').replace('-', ' ')}`
} 