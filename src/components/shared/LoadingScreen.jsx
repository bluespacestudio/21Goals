import { useState, useEffect } from 'react'
import logo from '../../assets/logos/21Goals Icon Black.png'

export const LoadingScreen = ({ isLoading, children, minLoadTime = 2000 }) => {
  const [showLoading, setShowLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 100)

    // Ensure minimum loading time for better UX
    const minTimeTimer = setTimeout(() => {
      if (!isLoading && progress >= 100) {
        setShowLoading(false)
      }
    }, minLoadTime)

    return () => {
      clearInterval(progressInterval)
      clearTimeout(minTimeTimer)
    }
  }, [isLoading, minLoadTime, progress])

  // Hide loading screen when both conditions are met
  useEffect(() => {
    if (!isLoading && progress >= 100) {
      const timer = setTimeout(() => setShowLoading(false), 500)
      return () => clearTimeout(timer)
    }
  }, [isLoading, progress])

  if (!showLoading) {
    return children
  }

  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50">

      <div className="relative z-10 text-center">
        {/* Logo with Animation */}
        <div className="mb-8">
          <div className="relative inline-block">
            <img
              src={logo}
              alt="21Goals Logo"
              className="w-68 h-20 object-contain animate-pulse"
              draggable="false"
            />
          </div>
        </div>

        {/* Loading Text */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-primary-600 mb-2">
            Loading...
          </h2>
          <p className="text-gray-600 text-sm">
            Preparing your fantasy football experience...
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-64 mx-auto mb-6">
          <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
            <div 
              className="bg-secondary-400 h-full rounded-full transition-all duration-300 ease-out relative overflow-hidden"
              style={{ width: `${Math.min(progress, 100)}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
            </div>
          </div>
          <div className="text-gray-600 text-xs mt-2 font-medium">
            {Math.round(Math.min(progress, 100))}%
          </div>
        </div>

        {/* Loading Dots */}
        <div className="flex items-center justify-center gap-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 bg-secondary-400 rounded-full animate-bounce"
              style={{
                animationDelay: `${i * 0.2}s`,
                animationDuration: '1s'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
} 