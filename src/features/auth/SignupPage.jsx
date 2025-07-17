import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Input, Card } from '../../components/ui'
import { Mail, Lock, UserPlus, User, LogIn, Calendar } from 'lucide-react'
import logo from '../../assets/logos/21Goals Icon Black.png'

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
    <div className="h-screen bg-gray-50 relative overflow-hidden">
      {/* Logo at top left */}
      <div className="absolute top-3 left-4 z-10">
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="21Goals Logo"
            className="h-12 w-auto hover:opacity-80 transition-opacity duration-200"
            draggable="false"
          />
        </Link>
      </div>

      {/* Main content */}
      <div className="flex items-center justify-center h-full px-4">
        <div className="max-w-sm w-full">
          {/* Header */}
          <div className="text-center mb-4">
            <div className="flex items-center justify-center gap-2 mb-2">
              <UserPlus className="w-6 h-6 text-secondary-500" />
              <h1 className="text-2xl font-bold text-gray-900">Join 21Goals</h1>
            </div>
            <p className="text-gray-600 text-sm">
              Create your account and start building your perfect squad
            </p>
          </div>
          
          {/* Form Container */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-3">
              {/* Full Name */}
                                              <div>
                 <label className="block text-xs font-medium text-gray-700 mb-1">
                   Full Name
                 </label>
                 <div className="relative">
                   <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                   <input
                     type="text"
                     name="fullName"
                     value={formData.fullName}
                     onChange={handleChange}
                     placeholder="Your full name"
                     className="w-full bg-white border border-gray-300 rounded-lg pl-10 pr-3 py-2.5 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-sm"
                     required
                   />
                 </div>
                 {errors.fullName && (
                   <p className="mt-0.5 text-xs text-tertiary-600">{errors.fullName}</p>
                 )}
               </div>

               {/* Email */}
               <div>
                 <label className="block text-xs font-medium text-gray-700 mb-1">
                   Email
                 </label>
                 <div className="relative">
                   <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                   <input
                     type="email"
                     name="email"
                     value={formData.email}
                     onChange={handleChange}
                     placeholder="your@email.com"
                     className="w-full bg-white border border-gray-300 rounded-lg pl-10 pr-3 py-2.5 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-sm"
                     required
                   />
                 </div>
                 {errors.email && (
                   <p className="mt-0.5 text-xs text-tertiary-600">{errors.email}</p>
                 )}
               </div>
               
               {/* Password */}
               <div>
                 <label className="block text-xs font-medium text-gray-700 mb-1">
                   Password
                 </label>
                 <div className="relative">
                   <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                   <input
                     type="password"
                     name="password"
                     value={formData.password}
                     onChange={handleChange}
                     placeholder="Your password"
                     className="w-full bg-white border border-gray-300 rounded-lg pl-10 pr-3 py-2.5 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-sm"
                     required
                   />
                 </div>
                 {errors.password && (
                   <p className="mt-0.5 text-xs text-tertiary-600">{errors.password}</p>
                 )}
               </div>

               {/* Confirm Password */}
               <div>
                 <label className="block text-xs font-medium text-gray-700 mb-1">
                   Confirm Password
                 </label>
                 <div className="relative">
                   <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                   <input
                     type="password"
                     name="confirmPassword"
                     value={formData.confirmPassword}
                     onChange={handleChange}
                     placeholder="Confirm your password"
                     className="w-full bg-white border border-gray-300 rounded-lg pl-10 pr-3 py-2.5 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-sm"
                     required
                   />
                 </div>
                 {errors.confirmPassword && (
                   <p className="mt-0.5 text-xs text-tertiary-600">{errors.confirmPassword}</p>
                 )}
               </div>

               {/* Date of Birth */}
               <div>
                 <label className="block text-xs font-medium text-gray-700 mb-1">
                   Date of Birth
                 </label>
                 <div className="relative">
                   <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                   <input
                     type="date"
                     name="dateOfBirth"
                     value={formData.dateOfBirth}
                     onChange={handleChange}
                     className="w-full bg-white border border-gray-300 rounded-lg pl-10 pr-3 py-2.5 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-sm"
                     required
                   />
                 </div>
                 {errors.dateOfBirth && (
                   <p className="mt-0.5 text-xs text-tertiary-600">{errors.dateOfBirth}</p>
                 )}
               </div>
              
                             {/* Submit Button */}
               <button
                 type="submit"
                 disabled={isLoading}
                 className="w-full bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg text-sm"
               >
                 {isLoading ? (
                   <>
                     <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                     Creating Account...
                   </>
                 ) : (
                   <>
                     <UserPlus className="w-4 h-4" />
                     Create Account
                   </>
                 )}
               </button>
             </form>
             
             {/* Sign In Link */}
             <div className="mt-4 text-center">
               <p className="text-gray-600 text-xs">
                 Already have an account?{' '}
                 <Link 
                   to="/login" 
                   className="text-secondary-600 hover:text-secondary-700 font-medium inline-flex items-center gap-1 transition-colors duration-200"
                 >
                   <LogIn className="w-3 h-3" />
                   Sign In
                 </Link>
               </p>
             </div>

             {/* Terms and Privacy */}
             <div className="mt-3 text-center">
               <p className="text-xs text-gray-500 leading-tight">
                 By creating an account, you agree to our{' '}
                 <Link to="/terms-of-use" className="text-primary-600 hover:text-primary-700">
                   Terms of Service
                 </Link>{' '}
                 and{' '}
                 <Link to="/privacy-policy" className="text-primary-600 hover:text-primary-700">
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