import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Input, Card } from '../../components/ui'
import { Mail, Lock, UserPlus, User, LogIn, Calendar } from 'lucide-react'
import logo from '../../assets/logos/21Goals Icon Black.png'
import signupBg from '/bg/signup_login_bg.jpg'

export const SignupPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    dateOfBirth: '',
  })
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors(prev => ({
        ...prev,
        [e.target.name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }

    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password'
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
    }

    if (!formData.dateOfBirth) {
      newErrors.dateOfBirth = 'Date of birth is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsLoading(true)
    
    try {
      // TODO: Implement signup logic with Supabase
      console.log('Signup attempt:', formData)
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
    } catch (error) {
      console.error('Signup error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <img
        src={signupBg}
        alt="Signup Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
        loading="eager"
        fetchpriority="high"
      />
      
      {/* Background overlay for better readability */}
      <div className="absolute inset-0 bg-black bg-opacity-10 z-10"></div>
      
      {/* Logo at top left */}
      <div className="absolute top-2 left-2 sm:top-3 sm:left-4 z-20">
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="21Goals Logo"
            className="h-14 sm:h-16 md:h-18 lg:h-20 w-auto hover:opacity-80 transition-opacity duration-200"
            draggable="false"
          />
        </Link>
      </div>

      {/* Main content */}
      <div className="relative z-20 flex items-center justify-center min-h-screen px-3 sm:px-4 py-20 sm:py-8">
        <div className="w-full max-w-sm sm:max-w-sm md:max-w-sm lg:max-w-md">
          
          {/* Form Container */}
          <div className="bg-white/95 backdrop-blur-sm border border-primary-100 rounded-xl sm:rounded-xl md:rounded-xl lg:rounded-2xl p-4 sm:p-6 md:p-6 lg:p-8 shadow-2xl shadow-primary-900/20">
            {/* Header */}
          <div className="text-center mb-3 sm:mb-4 md:mb-4 lg:mb-5">
            <div className="flex items-center justify-center gap-2 mb-2">
              <UserPlus className="w-5 h-5 sm:w-5 h-5 md:w-5 h-5 lg:w-6 lg:h-6 text-secondary-500" />
              <h1 className="text-xl sm:text-xl md:text-xl lg:text-2xl font-bold text-primary-900">Join 21Goals</h1>
            </div>
            <p className="text-primary-700 text-xs sm:text-xs md:text-xs lg:text-sm">
              Create your account and start building your perfect squad
            </p>
          </div>
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-3 md:space-y-3 lg:space-y-4">
              {/* Full Name */}
                                              <div>
                 <label className="block text-xs sm:text-xs md:text-xs lg:text-sm font-semibold text-primary-800 mb-1 sm:mb-1 md:mb-1 lg:mb-2">
                   Full Name
                 </label>
                 <div className="relative">
                   <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary-400 w-4 h-4 sm:w-4 h-4 md:w-4 h-4 lg:w-5 lg:h-5" />
                   <input
                     type="text"
                     name="fullName"
                     value={formData.fullName}
                     onChange={handleChange}
                     placeholder="Your full name"
                     className="w-full bg-white border-2 border-primary-200 rounded-lg sm:rounded-lg md:rounded-lg lg:rounded-xl pl-10 sm:pl-10 md:pl-10 lg:pl-12 pr-3 sm:pr-3 md:pr-3 lg:pr-4 py-2.5 sm:py-2.5 md:py-2.5 lg:py-3 text-primary-900 placeholder-primary-400 focus:outline-none focus:ring-2 focus:ring-secondary-400 focus:border-secondary-400 transition-all duration-200 text-xs sm:text-xs md:text-xs lg:text-sm"
                     required
                   />
                 </div>
                 {errors.fullName && (
                   <p className="mt-1 text-xs text-tertiary-600 font-medium">{errors.fullName}</p>
                 )}
               </div>

               {/* Email */}
               <div>
                 <label className="block text-xs sm:text-xs md:text-xs lg:text-sm font-semibold text-primary-800 mb-1 sm:mb-1 md:mb-1 lg:mb-2">
                   Email
                 </label>
                 <div className="relative">
                   <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary-400 w-4 h-4 sm:w-4 h-4 md:w-4 h-4 lg:w-5 lg:h-5" />
                   <input
                     type="email"
                     name="email"
                     value={formData.email}
                     onChange={handleChange}
                     placeholder="your@email.com"
                     className="w-full bg-white border-2 border-primary-200 rounded-lg sm:rounded-lg md:rounded-lg lg:rounded-xl pl-10 sm:pl-10 md:pl-10 lg:pl-12 pr-3 sm:pr-3 md:pr-3 lg:pr-4 py-2.5 sm:py-2.5 md:py-2.5 lg:py-3 text-primary-900 placeholder-primary-400 focus:outline-none focus:ring-2 focus:ring-secondary-400 focus:border-secondary-400 transition-all duration-200 text-xs sm:text-xs md:text-xs lg:text-sm"
                     required
                   />
                 </div>
                 {errors.email && (
                   <p className="mt-1 text-xs text-tertiary-600 font-medium">{errors.email}</p>
                 )}
               </div>
               
               {/* Password */}
               <div>
                 <label className="block text-xs sm:text-xs md:text-xs lg:text-sm font-semibold text-primary-800 mb-1 sm:mb-1 md:mb-1 lg:mb-2">
                   Password
                 </label>
                 <div className="relative">
                   <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary-400 w-4 h-4 sm:w-4 h-4 md:w-4 h-4 lg:w-5 lg:h-5" />
                   <input
                     type="password"
                     name="password"
                     value={formData.password}
                     onChange={handleChange}
                     placeholder="Your password"
                     className="w-full bg-white border-2 border-primary-200 rounded-lg sm:rounded-lg md:rounded-lg lg:rounded-xl pl-10 sm:pl-10 md:pl-10 lg:pl-12 pr-3 sm:pr-3 md:pr-3 lg:pr-4 py-2.5 sm:py-2.5 md:py-2.5 lg:py-3 text-primary-900 placeholder-primary-400 focus:outline-none focus:ring-2 focus:ring-secondary-400 focus:border-secondary-400 transition-all duration-200 text-xs sm:text-xs md:text-xs lg:text-sm"
                     required
                   />
                 </div>
                 {errors.password && (
                   <p className="mt-1 text-xs text-tertiary-600 font-medium">{errors.password}</p>
                 )}
               </div>

               {/* Confirm Password */}
               <div>
                 <label className="block text-xs sm:text-xs md:text-xs lg:text-sm font-semibold text-primary-800 mb-1 sm:mb-1 md:mb-1 lg:mb-2">
                   Confirm Password
                 </label>
                 <div className="relative">
                   <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary-400 w-4 h-4 sm:w-4 h-4 md:w-4 h-4 lg:w-5 lg:h-5" />
                   <input
                     type="password"
                     name="confirmPassword"
                     value={formData.confirmPassword}
                     onChange={handleChange}
                     placeholder="Confirm your password"
                     className="w-full bg-white border-2 border-primary-200 rounded-lg sm:rounded-lg md:rounded-lg lg:rounded-xl pl-10 sm:pl-10 md:pl-10 lg:pl-12 pr-3 sm:pr-3 md:pr-3 lg:pr-4 py-2.5 sm:py-2.5 md:py-2.5 lg:py-3 text-primary-900 placeholder-primary-400 focus:outline-none focus:ring-2 focus:ring-secondary-400 focus:border-secondary-400 transition-all duration-200 text-xs sm:text-xs md:text-xs lg:text-sm"
                     required
                   />
                 </div>
                 {errors.confirmPassword && (
                   <p className="mt-1 text-xs text-tertiary-600 font-medium">{errors.confirmPassword}</p>
                 )}
               </div>

               {/* Date of Birth */}
               <div>
                 <label className="block text-xs sm:text-xs md:text-xs lg:text-sm font-semibold text-primary-800 mb-1 sm:mb-1 md:mb-1 lg:mb-2">
                   Date of Birth
                 </label>
                 <div className="relative">
                   <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary-400 w-4 h-4 sm:w-4 h-4 md:w-4 h-4 lg:w-5 lg:h-5" />
                   <input
                     type="date"
                     name="dateOfBirth"
                     value={formData.dateOfBirth}
                     onChange={handleChange}
                     className="w-full bg-white border-2 border-primary-200 rounded-lg sm:rounded-lg md:rounded-lg lg:rounded-xl pl-10 sm:pl-10 md:pl-10 lg:pl-12 pr-3 sm:pr-3 md:pr-3 lg:pr-4 py-2.5 sm:py-2.5 md:py-2.5 lg:py-3 text-primary-900 placeholder-primary-400 focus:outline-none focus:ring-2 focus:ring-secondary-400 focus:border-secondary-400 transition-all duration-200 text-xs sm:text-xs md:text-xs lg:text-sm"
                     required
                   />
                 </div>
                 {errors.dateOfBirth && (
                   <p className="mt-1 text-xs text-tertiary-600 font-medium">{errors.dateOfBirth}</p>
                 )}
               </div>
              
                             {/* Submit Button */}
               <button
                 type="submit"
                 disabled={isLoading}
                 className="w-full bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 text-white font-bold py-3 sm:py-3 md:py-3 lg:py-3.5 px-4 sm:px-4 md:px-5 lg:px-6 rounded-lg sm:rounded-lg md:rounded-lg lg:rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-primary-900/30 hover:shadow-xl hover:shadow-primary-900/40 text-xs sm:text-xs md:text-xs lg:text-sm touch-manipulation"
               >
                 {isLoading ? (
                   <>
                     <div className="w-4 h-4 sm:w-4 h-4 md:w-4 h-4 lg:w-5 lg:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                     Creating Account...
                   </>
                 ) : (
                   <>
                     <UserPlus className="w-4 h-4 sm:w-4 h-4 md:w-4 h-4 lg:w-5 lg:h-5" />
                     Create Account
                   </>
                 )}
               </button>
             </form>
             
             {/* Sign In Link */}
             <div className="mt-4 sm:mt-5 md:mt-5 lg:mt-6 text-center">
               <p className="text-primary-600 text-xs sm:text-xs md:text-xs lg:text-sm">
                 Already have an account?{' '}
                 <Link 
                   to="/login" 
                   className="text-secondary-600 hover:text-secondary-700 font-semibold inline-flex items-center gap-1 transition-colors duration-200"
                 >
                   <LogIn className="w-3 h-3 sm:w-3 h-3 md:w-3 h-3 lg:w-4 lg:h-4" />
                   Sign In
                 </Link>
               </p>
             </div>

             {/* Terms and Privacy */}
             <div className="mt-3 sm:mt-3 md:mt-3 lg:mt-4 text-center">
               <p className="text-xs text-primary-500 leading-tight">
                 By creating an account, you agree to our{' '}
                 <Link to="/terms-of-use" className="text-primary-600 hover:text-primary-700 font-medium">
                   Terms of Service
                 </Link>{' '}
                 and{' '}
                 <Link to="/privacy-policy" className="text-primary-600 hover:text-primary-700 font-medium">
                   Privacy Policy
                 </Link>
                 . You must be 18+ to play 21Goals.
               </p>
             </div>
          </div>
        </div>
      </div>
    </div>
  )
} 