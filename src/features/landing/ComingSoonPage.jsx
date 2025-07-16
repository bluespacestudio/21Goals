import { useState, useEffect } from 'react'
import { ChevronDown, Clock, Users, Mail, User, CheckCircle, Target, BarChart3, Trophy, Calendar, XCircle, AlertTriangle, Lock, Skull, Sparkles } from 'lucide-react'
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
            <div className="flex items-center justify-center gap-2 text-secondary-500 text-sm font-medium tracking-wider uppercase">
              <Calendar className="w-4 h-4" />
              LAUNCHING AUGUST 2025
            </div>
          </div>

          {/* Main Heading */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Get early access
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed max-w-lg mx-auto">
              The fantasy football game where less is more. Pick 4 players, stay under 21 goals, and win with the lowest total. 
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
            <div className="flex items-center justify-center gap-3 mt-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full border-2 border-white flex items-center justify-center shadow-sm"
                  >
                    <User className="w-4 h-4 text-white" />
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-1 text-gray-600 text-sm">
                <Users className="w-4 h-4" />
                <span className="font-medium">Join 12,504+ others on the waitlist</span>
              </div>
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

        {/* How It Works Section */}
        <div className="max-w-5xl mx-auto mb-20">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">
            How GoalJack Works
          </h3>
          <p className="text-gray-600 text-center mb-16">
            The fantasy football game where strategy beats luck. Follow these steps to master the art of controlled scoring.
          </p>
          
          {/* Step-by-Step Process */}
          <div className="relative">
            {/* Connecting Line - Better aligned */}
            <div className="hidden md:block absolute top-8 left-1/2 transform -translate-x-1/2 w-3/4 h-0.5 bg-gray-200 z-0"></div>
            
            <div className="grid md:grid-cols-4 gap-6 lg:gap-8 relative z-10">
              {/* Step 1: Pick Players */}
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary-400 rounded-full flex items-center justify-center shadow-sm border-2 border-white">
                    <span className="text-gray-900 font-bold text-sm">1</span>
                  </div>
                </div>
                <div className="flex-1 flex flex-col justify-start">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Pick 4 Players</h4>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Choose 4 Premier League players from any teams. Pick wisely - efficient scorers who'll get 4-6 goals, not explosive strikers.
                  </p>
                  <div className="flex items-center justify-center gap-1 text-xs text-primary-600 font-medium bg-primary-50 rounded-full px-3 py-2">
                    <AlertTriangle className="w-3 h-3" />
                    Avoid goalkeepers & defenders
                  </div>
                </div>
              </div>

              {/* Step 2: Season Starts */}
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary-400 rounded-full flex items-center justify-center shadow-sm border-2 border-white">
                    <span className="text-gray-900 font-bold text-sm">2</span>
                  </div>
                </div>
                <div className="flex-1 flex flex-col justify-start">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Season Starts</h4>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Your squad is locked for the entire season. Track live goals as your players score in Premier League matches.
                  </p>
                  <div className="flex items-center justify-center gap-1 text-xs text-primary-600 font-medium bg-primary-50 rounded-full px-3 py-2">
                    <Lock className="w-3 h-3" />
                    No transfers allowed
                  </div>
                </div>
              </div>

              {/* Step 3: Avoid Busting */}
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-tertiary-500 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                    <XCircle className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary-400 rounded-full flex items-center justify-center shadow-sm border-2 border-white">
                    <span className="text-gray-900 font-bold text-sm">3</span>
                  </div>
                </div>
                <div className="flex-1 flex flex-col justify-start">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Avoid Busting</h4>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Stay alive by avoiding: (1) Total goals &gt; 21, or (2) Any player with 0 goals by season end.
                  </p>
                  <div className="flex items-center justify-center gap-1 text-xs text-tertiary-600 font-medium bg-tertiary-50 rounded-full px-3 py-2">
                    <Skull className="w-3 h-3" />
                    Busted = Game Over
                  </div>
                </div>
              </div>

              {/* Step 4: Win */}
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-secondary-500 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                    <Trophy className="w-8 h-8 text-gray-900" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center shadow-sm border-2 border-white">
                    <span className="text-white font-bold text-sm">4</span>
                  </div>
                </div>
                <div className="flex-1 flex flex-col justify-start">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Win the Game</h4>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Winner has the lowest total goals (≤21) among all non-busted players. Less is more!
                  </p>
                  <div className="flex items-center justify-center gap-1 text-xs text-secondary-600 font-medium bg-secondary-50 rounded-full px-3 py-2">
                    <Trophy className="w-3 h-3" />
                    Lowest valid total wins
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Example Scenario */}
          <div className="mt-16 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 border border-primary-100">
            <div className="text-center mb-8">
              <h4 className="text-xl font-bold text-gray-900 mb-2">Example Winning Strategy</h4>
              <p className="text-gray-600">Perfect squad with 18 total goals - efficient and safe</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-5 text-center shadow-sm border border-gray-100">
                <div className="text-3xl font-bold text-primary-600 mb-1">5</div>
                <div className="text-xs text-gray-500 uppercase tracking-wide font-medium">Goals</div>
                <div className="text-sm text-gray-700 mt-2 font-medium">Midfielder</div>
              </div>
              <div className="bg-white rounded-xl p-5 text-center shadow-sm border border-gray-100">
                <div className="text-3xl font-bold text-primary-600 mb-1">4</div>
                <div className="text-xs text-gray-500 uppercase tracking-wide font-medium">Goals</div>
                <div className="text-sm text-gray-700 mt-2 font-medium">Winger</div>
              </div>
              <div className="bg-white rounded-xl p-5 text-center shadow-sm border border-gray-100">
                <div className="text-3xl font-bold text-primary-600 mb-1">6</div>
                <div className="text-xs text-gray-500 uppercase tracking-wide font-medium">Goals</div>
                <div className="text-sm text-gray-700 mt-2 font-medium">Support Striker</div>
              </div>
              <div className="bg-white rounded-xl p-5 text-center shadow-sm border border-gray-100">
                <div className="text-3xl font-bold text-primary-600 mb-1">3</div>
                <div className="text-xs text-gray-500 uppercase tracking-wide font-medium">Goals</div>
                <div className="text-sm text-gray-700 mt-2 font-medium">Attacking Mid</div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <div className="inline-flex items-center gap-2 bg-secondary-400 text-gray-900 px-6 py-3 rounded-full font-semibold shadow-sm">
                <Trophy className="w-5 h-5" />
                <span>Total: 18 Goals - Winner!</span>
                <Sparkles className="w-4 h-4" />
              </div>
            </div>
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
                answer: "GoalJack is a strategic fantasy football game where you pick 4 Premier League players and try to stay under 21 total goals. It's the opposite of traditional fantasy - you win by having the lowest valid total, not the highest."
              },
              {
                question: "How do I win?",
                answer: "Win by having the lowest total goals (≤21) among all players who aren't busted. You must stay under or at 21 goals AND ensure all 4 of your players score at least 1 goal each by season's end."
              },
              {
                question: "What gets me busted?",
                answer: "You're busted (eliminated) if: (1) Your total goals exceed 21, or (2) Any of your 4 players finishes the season with 0 goals. Busted players are moved to the bottom of all leaderboards."
              },
              {
                question: "What's the strategy?",
                answer: "Pick efficient scorers who will get 4-6 goals, not explosive strikers. Avoid goalkeepers and defenders who might not score. It's about precision - finding players who score just enough, not too many."
              },
              {
                question: "When can I select my players?",
                answer: "Player selection will open when GoalJack launches in August 2025. You'll choose your 4 players at the start of the season and they'll remain your squad throughout - no transfers or changes allowed."
              },
              {
                question: "Is there a cost to play?",
                answer: "GoalJack will be free to play with optional premium features. Join the waitlist to be notified of pricing details when we launch."
              },
              {
                question: "How are goals tracked?",
                answer: "We use live data from Sportmonks API to track goals in real-time. Every goal your players score in Premier League matches counts toward your total - so pick wisely!"
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