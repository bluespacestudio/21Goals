import { ArrowLeft, Mail, FileText, CheckCircle, User, Copyright, AlertTriangle, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../constants'

export const TermsOfUsePage = () => {
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
              <FileText className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-primary-600" />
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">Terms of Use</h1>
            </div>
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg px-4 sm:px-0">
              Please read these terms carefully before using 21Goals. These terms govern your use of our platform and services.
            </p>
            <div className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-500">
              Last updated: January 2025
            </div>
          </div>

          {/* Content Sections */}
          <div className="space-y-6 sm:space-y-8 lg:space-y-12">
            {/* Section 1: Acceptance of Terms */}
            <section className="bg-white rounded-lg sm:rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6 lg:p-8">
              <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600" />
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2">Acceptance of Terms</h2>
                  <p className="text-gray-600 text-sm sm:text-base">
                    By accessing or using 21Goals, you agree to be bound by these terms and conditions. If you do not agree, please do not use the service.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2: User Responsibilities */}
            <section className="bg-white rounded-lg sm:rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6 lg:p-8">
              <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-secondary-100 rounded-lg flex items-center justify-center">
                  <User className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-600" />
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2">User Responsibilities</h2>
                  <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
                    As a 21Goals user, you agree to:
                  </p>
                </div>
              </div>
              
              <ul className="space-y-2 sm:space-y-3 ml-13 sm:ml-16">
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="flex-shrink-0 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary-500 rounded-full mt-1.5 sm:mt-2"></div>
                  <span className="text-gray-600 text-sm sm:text-base">Use the platform in accordance with applicable laws and regulations</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="flex-shrink-0 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary-500 rounded-full mt-1.5 sm:mt-2"></div>
                  <span className="text-gray-600 text-sm sm:text-base">Not exploit or manipulate the game or system</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="flex-shrink-0 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary-500 rounded-full mt-1.5 sm:mt-2"></div>
                  <span className="text-gray-600 text-sm sm:text-base">Maintain the confidentiality of your login credentials</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="flex-shrink-0 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary-500 rounded-full mt-1.5 sm:mt-2"></div>
                  <span className="text-gray-600 text-sm sm:text-base">Respect other users and avoid abusive behavior</span>
                </li>
              </ul>
            </section>

            {/* Section 3: Intellectual Property */}
            <section className="bg-white rounded-lg sm:rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6 lg:p-8">
              <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Copyright className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600" />
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2">Intellectual Property</h2>
                  <p className="text-gray-600 text-sm sm:text-base">
                    All content, branding, game mechanics, and designs on 21Goals are the intellectual property of 21Goals or its licensors. You may not copy, modify, or redistribute any part of the platform without express permission.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4: Limitation of Liability */}
            <section className="bg-white rounded-lg sm:rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6 lg:p-8">
              <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-tertiary-100 rounded-lg flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-tertiary-600" />
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2">Limitation of Liability</h2>
                  <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
                    21Goals is provided "as is" without warranties of any kind. We are not liable for:
                  </p>
                </div>
              </div>
              
              <ul className="space-y-2 sm:space-y-3 ml-13 sm:ml-16 mb-4 sm:mb-6">
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="flex-shrink-0 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary-500 rounded-full mt-1.5 sm:mt-2"></div>
                  <span className="text-gray-600 text-sm sm:text-base">Game outcome disputes</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="flex-shrink-0 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary-500 rounded-full mt-1.5 sm:mt-2"></div>
                  <span className="text-gray-600 text-sm sm:text-base">User-generated content</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="flex-shrink-0 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary-500 rounded-full mt-1.5 sm:mt-2"></div>
                  <span className="text-gray-600 text-sm sm:text-base">Loss of access or data due to technical errors</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="flex-shrink-0 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary-500 rounded-full mt-1.5 sm:mt-2"></div>
                  <span className="text-gray-600 text-sm sm:text-base">Any damages resulting from the use or inability to use 21Goals</span>
                </li>
              </ul>
              
              <div className="ml-13 sm:ml-16 bg-tertiary-50 border border-tertiary-200 rounded-lg p-3 sm:p-4">
                <p className="text-tertiary-800 font-medium text-xs sm:text-sm">
                  You use the platform at your own risk.
                </p>
              </div>
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
                    For any questions or concerns regarding these terms, contact us at:
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