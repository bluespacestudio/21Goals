import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Input, Card } from '../../components/ui'
import { Mail, Lock, LogIn, UserPlus } from 'lucide-react'

export const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Implement login logic with Supabase
    console.log('Login attempt:', formData)
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primary-500">21Goals</h1>
          <p className="mt-2 text-gray-600">Sign in to your account</p>
        </div>
        
        <Card>
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              icon={Mail}
              required
            />
            
            <Input
              label="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              icon={Lock}
              required
            />
            
            <Button type="submit" className="w-full" icon={LogIn}>
              Sign In
            </Button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <Link to="/signup" className="text-primary-500 hover:text-primary-600 inline-flex items-center gap-1">
                <UserPlus className="w-4 h-4" />
                Sign up
              </Link>
            </p>
          </div>
        </Card>
      </div>
    </div>
  )
} 