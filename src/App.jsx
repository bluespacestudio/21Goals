import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { MainLayout } from './layouts/MainLayout'
import { ComingSoonPage } from './features/landing/ComingSoonPage'
import { PrivacyPolicyPage, TermsOfUsePage } from './features/legal'
import { ScrollToTop } from './components/shared/ScrollToTop'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<ComingSoonPage />} />
            <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="terms-of-use" element={<TermsOfUsePage />} />
            {/* Add more routes here as features are developed */}
          </Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App 