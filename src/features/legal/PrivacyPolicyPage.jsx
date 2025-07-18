import { ArrowLeft, Mail, Shield, Eye, Share2, UserCheck, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../constants'

export const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-6 lg:py-8">
        {/* Back Navigation */}
        <div className="mb-6 sm:mb-8">
          <Link
            to={ROUTES.HOME}
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 transition-colors duration-200 font-medium text-sm sm:text-base"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            Back to Home
          </Link>
        </div>

        {/* Header */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <Shield className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-primary-600" />
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">Privacy Policy</h1>
            </div>
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg px-4 sm:px-0">
              Your privacy is important to us. This policy explains how 21Goals collects, uses, and protects your information.
            </p>
            <div className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-500">
              Last updated: January 2025
            </div>
          </div>

          {/* Content Sections */}
          <div className="space-y-6 sm:space-y-8 lg:space-y-12">
            {/* Section 1: Information We Collect */}
            <section className="bg-white rounded-lg sm:rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6 lg:p-8">
              <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600" />
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2">Information We Collect</h2>
                  <p className="text-gray-600 text-sm sm:text-base">
                    We collect information to provide better services to all our users. The types of information we collect include:
                  </p>
                </div>
              </div>
              
              <div className="space-y-3 sm:space-y-4 ml-13 sm:ml-16">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">Account Information:</h3>
                  <p className="text-gray-600 text-sm sm:text-base">Email, password</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">Gameplay Data:</h3>
                  <p className="text-gray-600 text-sm sm:text-base">Player selections, scores</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">Device Information:</h3>
                  <p className="text-gray-600 text-sm sm:text-base">Browser, OS, etc.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">Usage Data:</h3>
                  <p className="text-gray-600 text-sm sm:text-base">Pages visited, actions taken in the app</p>
                </div>
              </div>
            </section>

            {/* Section 2: How We Use Information */}
            <section className="bg-white rounded-lg sm:rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6 lg:p-8">
              <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-secondary-100 rounded-lg flex items-center justify-center">
                  <UserCheck className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-600" />
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2">How We Use Information</h2>
                  <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
                    We use the information we collect to:
                  </p>
                </div>
              </div>
              
              <ul className="space-y-2 sm:space-y-3 ml-13 sm:ml-16">
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="flex-shrink-0 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary-500 rounded-full mt-1.5 sm:mt-2"></div>
                  <span className="text-gray-600 text-sm sm:text-base">Provide, maintain, and improve our services</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="flex-shrink-0 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary-500 rounded-full mt-1.5 sm:mt-2"></div>
                  <span className="text-gray-600 text-sm sm:text-base">Develop new features and game enhancements</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="flex-shrink-0 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary-500 rounded-full mt-1.5 sm:mt-2"></div>
                  <span className="text-gray-600 text-sm sm:text-base">Personalize your in-game and site experience</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="flex-shrink-0 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary-500 rounded-full mt-1.5 sm:mt-2"></div>
                  <span className="text-gray-600 text-sm sm:text-base">Communicate with you (including emails or notifications)</span>
                </li>
              </ul>
            </section>

            {/* Section 3: Information Sharing */}
            <section className="bg-white rounded-lg sm:rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6 lg:p-8">
              <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-tertiary-100 rounded-lg flex items-center justify-center">
                  <Share2 className="w-5 h-5 sm:w-6 sm:h-6 text-tertiary-600" />
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2">Information Sharing</h2>
                  <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
                    We do not share your personal information with third parties, except in the following situations:
                  </p>
                </div>
              </div>
              
              <ul className="space-y-2 sm:space-y-3 ml-13 sm:ml-16">
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="flex-shrink-0 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary-500 rounded-full mt-1.5 sm:mt-2"></div>
                  <span className="text-gray-600 text-sm sm:text-base">With your consent</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="flex-shrink-0 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary-500 rounded-full mt-1.5 sm:mt-2"></div>
                  <span className="text-gray-600 text-sm sm:text-base">For legal reasons (e.g., law enforcement requests)</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="flex-shrink-0 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary-500 rounded-full mt-1.5 sm:mt-2"></div>
                  <span className="text-gray-600 text-sm sm:text-base">With domain administrators if you're using a managed account</span>
                </li>
              </ul>
            </section>

            {/* Section 4: Your Rights */}
            <section className="bg-white rounded-lg sm:rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6 lg:p-8">
              <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600" />
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2">Your Rights</h2>
                  <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
                    As a user, you have the right to:
                  </p>
                </div>
              </div>
              
              <ul className="space-y-2 sm:space-y-3 ml-13 sm:ml-16">
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="flex-shrink-0 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary-500 rounded-full mt-1.5 sm:mt-2"></div>
                  <span className="text-gray-600 text-sm sm:text-base">Access and update your information</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="flex-shrink-0 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary-500 rounded-full mt-1.5 sm:mt-2"></div>
                  <span className="text-gray-600 text-sm sm:text-base">Request deletion of your personal data</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="flex-shrink-0 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary-500 rounded-full mt-1.5 sm:mt-2"></div>
                  <span className="text-gray-600 text-sm sm:text-base">Object to or restrict certain types of processing</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="flex-shrink-0 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary-500 rounded-full mt-1.5 sm:mt-2"></div>
                  <span className="text-gray-600 text-sm sm:text-base">Request a copy of your data in a portable format</span>
                </li>
              </ul>
            </section>

            {/* Section 5: Contact Us */}
            <section className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg sm:rounded-xl border border-primary-100 p-4 sm:p-6 lg:p-8">
              <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2">Contact Us</h2>
                  <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                    If you have any questions or concerns about this policy or your data, please contact us at:
                  </p>
                </div>
              </div>
              
              <div className="ml-13 sm:ml-16">
                <div className="inline-flex items-center gap-2 sm:gap-3 bg-white rounded-lg px-4 sm:px-6 py-3 sm:py-4 shadow-sm border border-gray-200">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary-600" />
                  <a
                    href="mailto:support@21goals.com"
                    className="text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200 text-sm sm:text-base"
                  >
                    support@21goals.com
                  </a>
                </div>
              </div>
            </section>
          </div>

          {/* Footer Navigation */}
          <div className="mt-12 sm:mt-14 lg:mt-16 pt-6 sm:pt-8 border-t border-gray-200 text-center">
            <Link
              to={ROUTES.HOME}
              className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium transition-colors duration-200 text-sm sm:text-base"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              Return to 21Goals
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 