import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { MainLayout } from './layouts/MainLayout'
import { ComingSoonPage } from './features/landing/ComingSoonPage'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<ComingSoonPage />} />
            {/* Add more routes here as features are developed */}
          </Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App 