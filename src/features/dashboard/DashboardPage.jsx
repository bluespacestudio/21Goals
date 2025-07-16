import { Card, CardHeader, CardTitle, CardContent, Button } from '../../components/ui'
import { APP_CONFIG } from '../../constants'
import { Target, TrendingUp, Trophy, BarChart3, Eye, User } from 'lucide-react'

export const DashboardPage = () => {
  // Mock data - will be replaced with real data from Supabase/API
  const mockPlayers = [
    { id: 1, name: 'Erling Haaland', team: 'Manchester City', goals: 8, position: 'Forward' },
    { id: 2, name: 'Mohamed Salah', team: 'Liverpool', goals: 6, position: 'Forward' },
    { id: 3, name: 'Harry Kane', team: 'Tottenham', goals: 5, position: 'Forward' },
    { id: 4, name: 'Bruno Fernandes', team: 'Manchester United', goals: 2, position: 'Midfielder' },
  ]

  const totalGoals = mockPlayers.reduce((sum, player) => sum + player.goals, 0)
  const progressPercentage = (totalGoals / APP_CONFIG.GOAL_TARGET) * 100
  const isOnTrack = totalGoals >= Math.floor(APP_CONFIG.GOAL_TARGET * 0.5) // 50% threshold
  const status = totalGoals >= APP_CONFIG.GOAL_TARGET ? 'Winner!' : isOnTrack ? 'Safe' : 'Bust Risk'

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Track your players' goals and progress toward victory</p>
        </div>

        {/* Progress Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Target className="w-6 h-6 text-primary-500" />
                <div className="text-3xl font-bold text-primary-500">{totalGoals}</div>
              </div>
              <div className="text-sm text-gray-600">Total Goals</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <TrendingUp className="w-6 h-6 text-secondary-500" />
                <div className="text-3xl font-bold text-secondary-500">{APP_CONFIG.GOAL_TARGET - totalGoals}</div>
              </div>
              <div className="text-sm text-gray-600">Goals to Target</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Trophy className={`w-6 h-6 ${
                  status === 'Winner!' ? 'text-success-500' : 
                  status === 'Safe' ? 'text-success-500' : 'text-tertiary-500'
                }`} />
                <div className={`text-3xl font-bold ${
                  status === 'Winner!' ? 'text-success-500' : 
                  status === 'Safe' ? 'text-success-500' : 'text-tertiary-500'
                }`}>
                  {status}
                </div>
              </div>
              <div className="text-sm text-gray-600">Current Status</div>
            </CardContent>
          </Card>
        </div>

        {/* Progress Bar */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-primary-500" />
              Progress to {APP_CONFIG.GOAL_TARGET} Goals
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div 
                  className="bg-primary-500 h-4 rounded-full transition-all duration-500"
                  style={{ width: `${Math.min(progressPercentage, 100)}%` }}
                ></div>
              </div>
              <div className="absolute top-0 right-0 transform translate-y-6">
                <span className="text-sm text-gray-600">{totalGoals}/{APP_CONFIG.GOAL_TARGET}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Player Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockPlayers.map((player) => (
            <Card key={player.id}>
              <CardContent>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <User className="w-8 h-8 text-gray-500" />
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{player.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{player.team}</p>
                  <p className="text-xs text-gray-500 mb-4">{player.position}</p>
                  <div className="bg-primary-50 rounded-lg p-3">
                    <div className="text-2xl font-bold text-primary-500">{player.goals}</div>
                    <div className="text-sm text-primary-600">Goals</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Action Button */}
        <div className="mt-8 text-center">
          <Button variant="outline" icon={Eye}>
            View Detailed Stats
          </Button>
        </div>
      </div>
    </div>
  )
} 