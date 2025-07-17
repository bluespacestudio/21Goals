import { BrowserRouter as Router } from 'react-router-dom'
import { useEffect } from 'react'
import { ScrollToTop } from './components/shared/ScrollToTop'
import { AppRoutes } from './routes'
import analytics from './lib/analytics'

function App() {
  // Initialize Google Analytics when app starts
  useEffect(() => {
    analytics.initialize()
  }, [])

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <AppRoutes />
      </div>
    </Router>
  )
}

export default App 