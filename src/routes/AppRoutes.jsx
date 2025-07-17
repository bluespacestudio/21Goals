import { Routes, Route } from 'react-router-dom'
import { MainLayout } from '../layouts/MainLayout'
import { ComingSoonPage } from '../features/landing/ComingSoonPage'
import { PrivacyPolicyPage, TermsOfUsePage } from '../features/legal'
import { LoginPage, SignupPage } from '../features/auth'

export const AppRoutes = () => {
  return (
    <Routes>
      {/* Authentication Routes (standalone pages) */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      
      {/* Main Application Routes */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<ComingSoonPage />} />
        <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="terms-of-use" element={<TermsOfUsePage />} />
        {/* Add more routes here as features are developed */}
      </Route>
    </Routes>
  )
} 