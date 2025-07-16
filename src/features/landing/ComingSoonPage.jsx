import { useState, useEffect } from 'react'
import { ChevronDown, Clock, Users, Mail, User, CheckCircle, Target, BarChart3, Trophy, Calendar } from 'lucide-react'
import logo from '../../assets/logos/GoalJack_Icon.png';

export const ComingSoonPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  // Countdown timer to launch date (August 8th, 2025 at 8pm UK time)
  useEffect(() => {
    const targetDate = new Date('2025-08-08T19:00:00.000Z').getTime() // 8pm BST = 7pm UTC
    
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate - now
      
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formData.email || !formData.fullName) return

    setIsLoading(true)
    
    // Simulate API call - in real app, send formData to backend
    console.log('Waitlist signup:', formData)
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitted(true)
    setIsLoading(false)
    setFormData({ fullName: '', email: '' })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-2xl mx-auto">
          {/* Logo/Icon */}
          <div className="mb-8">
            <div className="flex justify-center mb-2">
                              <img
                  src={logo}
                  alt="GoalJack Logo"
                  className="w-44 h-20 object-contain"
                  draggable="false"
                />
            </div>
            <p className="text-secondary-500 text-sm font-medium tracking-wider uppercase">
              ● AVAILABLE IN EARLY 2025
            </p>
          </div>

          {/* Main Heading */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Get early access
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed max-w-lg mx-auto">
              Be amongst the first to experience GoalJack and join the fantasy football revolution. 
              Sign up to be notified when we launch!
            </p>
          </div>

          {/* Waitlist Signup */}
          <div className="mb-12">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-3 max-w-md mx-auto">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Full Name"
                    className="w-full bg-white border border-gray-300 rounded-lg pl-11 pr-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                  />
                </div>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    className="w-full bg-white border border-gray-300 rounded-lg pl-11 pr-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isLoading || !formData.email || !formData.fullName}
                  className="w-full bg-secondary-400 hover:bg-secondary-500 text-gray-900 font-medium py-3 px-6 rounded-lg transition-colors duration-200 disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-gray-600 border-t-transparent rounded-full animate-spin"></div>
                      Joining...
                    </>
                  ) : (
                    <>
                      <Users className="w-5 h-5" />
                      Join waitlist
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="max-w-md mx-auto">
                <div className="bg-primary-50 border border-primary-200 rounded-lg p-6">
                  <div className="flex items-center gap-2 text-primary-600 text-lg font-medium mb-2">
                    <CheckCircle className="w-6 h-6" />
                    Welcome to the waitlist!
                  </div>
                  <p className="text-primary-700">
                    Thanks for joining! We'll notify you as soon as GoalJack launches. Get ready to experience fantasy football like never before!
                  </p>
                </div>
              </div>
            )}

            {/* User Avatars */}
            <div className="flex items-center justify-center gap-2 mt-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 bg-gray-300 rounded-full border-2 border-white flex items-center justify-center"
                  >
                    <User className="w-4 h-4 text-gray-600" />
                  </div>
                ))}
              </div>
              <p className="text-gray-600 text-sm ml-3 flex items-center gap-1">
                <Users className="w-4 h-4" />
                Join 12,504+ others on the waitlist
              </p>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="mb-16">
            <div className="grid grid-cols-4 gap-4 max-w-md mx-auto mb-4">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary-600">{timeLeft.days}</div>
                <div className="text-xs text-gray-500 uppercase tracking-wide">Days</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary-600">{timeLeft.hours}</div>
                <div className="text-xs text-gray-500 uppercase tracking-wide">Hours</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary-600">{timeLeft.minutes}</div>
                <div className="text-xs text-gray-500 uppercase tracking-wide">Minutes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary-600">{timeLeft.seconds}</div>
                <div className="text-xs text-gray-500 uppercase tracking-wide">Seconds</div>
              </div>
            </div>
            <p className="text-gray-600 text-sm flex items-center justify-center gap-1">
              <Calendar className="w-4 h-4" />
              LEFT UNTIL FULL RELEASE
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">
            Frequently asked questions
          </h3>
          <p className="text-gray-600 text-center mb-12">
            Everything you need to know about GoalJack. Find answers to the most common questions below.
          </p>
          
          <div className="space-y-4">
            {[
              {
                question: "What is GoalJack?",
                answer: "GoalJack is a simplified fantasy football game where you pick 4 Premier League players and track their combined goals throughout the season. No complex lineups, no weekly changes - just pure goal-scoring excitement."
              },
              {
                question: "How do I win?",
                answer: "Be among the first players to reach 21 combined goals from your 4 selected players. You can compete globally or join mini-leagues with friends for extra competition."
              },
              {
                question: "When can I select my players?",
                answer: "Player selection will open when GoalJack launches in early 2025. You'll choose your 4 players at the start of the season and they'll remain your squad throughout."
              },
              {
                question: "Is there a cost to play?",
                answer: "GoalJack will be free to play with optional premium features. Join the waitlist to be notified of pricing details when we launch."
              },
              {
                question: "How are goals tracked?",
                answer: "We use live data from Sportmonks API to track goals in real-time. Every goal your players score in Premier League matches counts toward your total."
              }
            ].map((faq, index) => (
              <details key={index} className="group">
                <summary className="flex justify-between items-center cursor-pointer p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <span className="text-gray-900 font-medium">{faq.question}</span>
                  <ChevronDown className="text-secondary-500 w-5 h-5 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="p-4 bg-gray-50/50 rounded-b-lg">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-20 pt-12 border-t border-gray-200">
          <p className="text-gray-500">
            © 2025 GoalJack. The most exciting way to play fantasy football.
          </p>
        </div>
      </div>
    </div>
  )
} 