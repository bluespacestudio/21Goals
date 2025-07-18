import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  Clock,
  Users,
  Mail,
  User,
  CheckCircle,
  Target,
  BarChart3,
  Trophy,
  Calendar,
  XCircle,
  AlertTriangle,
  Lock,
  Skull,
  Sparkles,
  Twitter,
  Instagram,
  Linkedin,
  MessageCircle,
  Bell,
} from "lucide-react";
import JSConfetti from "js-confetti";
import { waitlistService } from "../../lib/supabase";
import { ROUTES } from "../../constants";
import { LoadingScreen } from "../../components/shared/LoadingScreen";
import analytics from "../../lib/analytics";
import logo from "../../assets/logos/21Goals Icon White.png";
import earlyAccessBg from "/bg/early_access_bg3.webp";
import earlyAccessMobileBg from "/bg/early_access_mobile_bg.webp";
import lightThemeBg from "/bg/light_theme_bg.webp";
import footerBg from "/bg/footer_bg.webp";

export const ComingSoonPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [waitlistCount, setWaitlistCount] = useState(12504);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isPageLoading, setIsPageLoading] = useState(true);

  // Initialize confetti
  const jsConfetti = new JSConfetti();

  // Countdown timer to launch date (August 8th, 2025 at 8pm UK time)
  useEffect(() => {
    const targetDate = new Date("2025-08-08T19:00:00.000Z").getTime(); // 8pm BST = 7pm UTC

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Load waitlist count on component mount
  useEffect(() => {
    const loadWaitlistCount = async () => {
      try {
        const result = await waitlistService.getWaitlistCount();
        if (result.success && result.count > 0) {
          setWaitlistCount(result.count + 1000);
        }
      } catch (error) {
        console.error("Error loading waitlist count:", error);
      } finally {
        // Page loading is complete after initial data load
        setIsPageLoading(false);
      }
    };

    loadWaitlistCount();

    // Track page view
    analytics.trackPageView("/coming-soon", "21Goals - Coming Soon");
    analytics.trackLaunchDateView();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.fullName) return;

    setIsLoading(true);
    setError("");

    try {
      // Submit to Supabase waitlist
      const result = await waitlistService.addToWaitlist(
        formData.fullName.trim(),
        formData.email.trim()
      );

      if (result.success) {
        // Track successful waitlist signup
        analytics.trackWaitlistSignup(formData.email, "hero_section");

        // Trigger confetti animation with 21Goals theme colors
        jsConfetti.addConfetti({
          confettiColors: [
            "#278E51",
            "#FFD93B",
            "#FFFFFF",
            "#4ade80",
            "#fcd34d",
          ],
          confettiNumber: 100,
        });

        // Add emoji confetti for extra celebration
        setTimeout(() => {
          jsConfetti.addConfetti({
            emojis: ["⚽", "🏆", "🎉", "✨"],
            emojiSize: 80,
            confettiNumber: 30,
          });
        }, 200);

        setIsSubmitted(true);
        setFormData({ fullName: "", email: "" });

        // Update waitlist count
        const countResult = await waitlistService.getWaitlistCount();
        if (countResult.success) {
          setWaitlistCount(countResult.count);
        }
      } else {
        setError(result.error);
      }
    } catch (error) {
      console.error("Waitlist submission error:", error);
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <LoadingScreen isLoading={isPageLoading}>
      <div className="min-h-screen bg-background">
        {/* Hero Section - Get Early Access */}
        <section className="relative">
          {/* Mobile & Tablet Background */}
          <img
            src={earlyAccessMobileBg}
            alt="Early Access Mobile Background"
            className="absolute inset-0 w-full h-full object-cover lg:hidden z-0"
            loading="eager"
            fetchpriority="high"
          />
          {/* Desktop Background */}
          <img
            src={earlyAccessBg}
            alt="Early Access Desktop Background"
            className="absolute inset-0 w-full h-full object-cover hidden lg:block z-0"
            loading="eager"
            fetchpriority="high"
          />
          {/* Content Container */}
          <div className="relative z-10">
            {/* Dark overlay for better visibility */}
            <div className="absolute inset-0"></div>
            <div className="relative z-10 container mx-auto px-3 sm:px-4 lg:px-6 py-8 sm:py-10 lg:py-12">
              <div className="text-center max-w-2xl mx-auto">
                {/* Logo/Icon */}
                <div className="mb-6 sm:mb-8">
                  <div className="flex justify-center mb-2">
                    <img
                      src={logo}
                      alt="21Goals Logo"
                      className="w-36 h-12 sm:w-44 sm:h-14 lg:w-48 lg:h-16 object-contain"
                      draggable="false"
                    />
                  </div>
                  <div className="flex items-center justify-center gap-1 sm:gap-2 text-secondary-300 text-xs sm:text-sm font-medium tracking-wider uppercase">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                    LAUNCHING AUGUST 2025
                  </div>
                </div>

                {/* Main Heading */}
                <div className="mb-8 sm:mb-10 lg:mb-12">
                  <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 drop-shadow-lg">
                    Get early access
                  </h1>
                  <p className="text-gray-100 text-sm sm:text-base lg:text-lg leading-relaxed max-w-lg mx-auto drop-shadow-md px-4 sm:px-0">
                    The free-to-play fantasy game where football meets
                    blackjack. Pick 4 players, hit 21 goals – but avoid going
                    bust. Sign up to be notified when we launch!
                  </p>
                </div>

                {/* Waitlist Signup */}
                <div className="mb-8 sm:mb-10 lg:mb-12">
                  {!isSubmitted ? (
                    <form
                      onSubmit={handleSubmit}
                      className="space-y-2 sm:space-y-3 max-w-sm sm:max-w-md mx-auto bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-2xl border border-white/20"
                    >
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary-500 w-4 h-4 sm:w-5 sm:h-5" />
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          onFocus={() =>
                            analytics.trackFormInteraction("fullName", "focus")
                          }
                          placeholder="Full Name"
                          className="w-full bg-white border border-gray-300 rounded-lg pl-9 sm:pl-11 pr-3 sm:pr-4 py-2.5 sm:py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent shadow-sm text-sm sm:text-base"
                          required
                        />
                      </div>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary-500 w-4 h-4 sm:w-5 sm:h-5" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          onFocus={() =>
                            analytics.trackFormInteraction("email", "focus")
                          }
                          placeholder="Email"
                          className="w-full bg-white border border-gray-300 rounded-lg pl-9 sm:pl-11 pr-3 sm:pr-4 py-2.5 sm:py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent shadow-sm text-sm sm:text-base"
                          required
                        />
                      </div>

                      {/* Error Message */}
                      {error && (
                        <div className="bg-red-50 border border-red-200 rounded-lg p-2 sm:p-3 text-red-700 text-xs sm:text-sm">
                          {error}
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={
                          isLoading || !formData.email || !formData.fullName
                        }
                        className="w-full bg-secondary-400 hover:bg-secondary-500 text-gray-900 font-medium py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors duration-200 disabled:opacity-50 flex items-center justify-center gap-2 text-sm sm:text-base"
                      >
                        {isLoading ? (
                          <>
                            <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-gray-600 border-t-transparent rounded-full animate-spin"></div>
                            Joining...
                          </>
                        ) : (
                          <>
                            <Bell className="w-4 h-4 sm:w-5 sm:h-5" />
                            Notify Me
                          </>
                        )}
                      </button>
                    </form>
                  ) : (
                    <div className="max-w-sm sm:max-w-md mx-auto">
                      <div className="bg-white/95 backdrop-blur-sm border border-secondary-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-2xl">
                        <div className="flex items-center gap-2 text-primary-600 text-base sm:text-lg font-medium mb-2">
                          <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                          Welcome to the waitlist!
                        </div>
                        <p className="text-gray-700 text-sm sm:text-base">
                          Thanks for joining! We'll notify you as soon as
                          21Goals launches. Get ready to experience fantasy
                          football like never before!
                        </p>
                      </div>
                    </div>
                  )}

                  {/* User Avatars */}
                  <div className="flex items-center justify-center gap-2 sm:gap-3 mt-4 sm:mt-6">
                    <div className="flex -space-x-1 sm:-space-x-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-secondary-400 to-secondary-500 rounded-full border-2 border-white flex items-center justify-center shadow-lg"
                        >
                          <User className="w-3 h-3 sm:w-4 sm:h-4 text-gray-900" />
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center gap-1 text-white text-xs sm:text-sm bg-black/30 backdrop-blur-sm rounded-full px-2 py-1 sm:px-4 sm:py-2">
                      <Users className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="font-medium">
                        Join {waitlistCount.toLocaleString()}+ others on the
                        waitlist
                      </span>
                    </div>
                  </div>
                </div>

                {/* Countdown Timer */}
                <div className="mb-12 sm:mb-14 lg:mb-16">
                  <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-xs sm:max-w-md mx-auto mb-3 sm:mb-4">
                    {[
                      { label: "Days", value: timeLeft.days },
                      { label: "Hours", value: timeLeft.hours },
                      { label: "Minutes", value: timeLeft.minutes },
                      { label: "Seconds", value: timeLeft.seconds },
                    ].map((item, idx) => (
                      <div
                        key={item.label}
                        className="flex flex-col items-center bg-white/95 backdrop-blur-sm rounded-lg sm:rounded-xl shadow-xl py-2 sm:py-4 px-1 sm:px-2 border border-white/30 transition-all duration-200 hover:scale-105"
                      >
                        <div className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-primary-600 drop-shadow-sm mb-0.5 sm:mb-1 tracking-tight">
                          {item.value}
                        </div>
                        <div className="text-xs sm:text-xs text-gray-600 uppercase tracking-widest font-semibold letter-spacing-wider">
                          {item.label}
                        </div>
                        {idx < 3 && (
                          <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 w-px h-6 bg-gray-300"></div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-center gap-1 sm:gap-2 mt-2">
                    <span className="inline-flex items-center gap-1 bg-white/95 backdrop-blur-sm text-primary-700 font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-xl border border-white/30 uppercase tracking-wide text-xs">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                      Left Until Full Release
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="relative">
          {/* Background Image */}
          <img
            src={lightThemeBg}
            alt="Light Theme Background"
            className="absolute inset-0 w-full h-full object-cover z-0"
            loading="lazy"
          />
          {/* Light overlay for better visibility */}
          <div className="absolute inset-0 bg-white/70 z-10"></div>
          <div className="relative z-20 container mx-auto px-3 sm:px-4 lg:px-6 py-12 sm:py-16 lg:py-20">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-900 mb-3 sm:mb-4">
                How to Play 21Goals
              </h2>
              <p className="text-gray-600 text-center mb-10 sm:mb-12 lg:mb-16 text-sm sm:text-base px-4 sm:px-0">
                The fantasy football game where you don't want to score too
                many. Here's how to play the ultimate game of Football
                Blackjack.
              </p>

              {/* Step-by-Step Process */}
              <div className="relative">
                {/* Connecting Line - Better aligned */}
                <div className="hidden lg:block absolute top-8 left-1/2 transform -translate-x-1/2 w-3/4 h-0.5 bg-gray-200 z-0"></div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 lg:gap-8 relative z-10">
                  {/* Step 1: Pick Players */}
                  <div className="flex flex-col items-center text-center">
                    <div className="relative mb-4 sm:mb-6">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-primary-600 rounded-full flex items-center justify-center shadow-lg border-2 sm:border-4 border-white">
                        <User className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                      </div>
                      <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 bg-secondary-400 rounded-full flex items-center justify-center shadow-sm border-1 sm:border-2 border-white">
                        <span className="text-gray-900 font-bold text-xs sm:text-sm">
                          1
                        </span>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col justify-start">
                      <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                        Pick 4 Players
                      </h4>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                        Pick 4 Premier League players from any teams. Your goal?
                        Hit 21 goals – but every player must score at least
                        once.
                      </p>
                      <div className="flex items-center justify-center gap-1 text-xs text-primary-600 font-medium bg-primary-50 rounded-full px-2 sm:px-3 py-1.5 sm:py-2">
                        <AlertTriangle className="w-3 h-3" />
                        Avoid goalkeepers
                      </div>
                    </div>
                  </div>

                  {/* Step 2: Season Starts */}
                  <div className="flex flex-col items-center text-center">
                    <div className="relative mb-4 sm:mb-6">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-primary-600 rounded-full flex items-center justify-center shadow-lg border-2 sm:border-4 border-white">
                        <Target className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                      </div>
                      <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 bg-secondary-400 rounded-full flex items-center justify-center shadow-sm border-1 sm:border-2 border-white">
                        <span className="text-gray-900 font-bold text-xs sm:text-sm">
                          2
                        </span>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col justify-start">
                      <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                        Season Starts
                      </h4>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                        Once the season kicks off, your picks are locked. Track
                        live goals and see how close you're getting to 21.
                      </p>
                      <div className="flex items-center justify-center gap-1 text-xs text-primary-600 font-medium bg-primary-50 rounded-full px-2 sm:px-3 py-1.5 sm:py-2">
                        <Lock className="w-3 h-3" />
                        No transfers allowed
                      </div>
                    </div>
                  </div>

                  {/* Step 3: Avoid Busting */}
                  <div className="flex flex-col items-center text-center">
                    <div className="relative mb-4 sm:mb-6">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-tertiary-500 rounded-full flex items-center justify-center shadow-lg border-2 sm:border-4 border-white">
                        <XCircle className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                      </div>
                      <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 bg-secondary-400 rounded-full flex items-center justify-center shadow-sm border-1 sm:border-2 border-white">
                        <span className="text-gray-900 font-bold text-xs sm:text-sm">
                          3
                        </span>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col justify-start">
                      <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                        Avoid Busting
                      </h4>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                        Stay in the game by avoiding two things: (1) Going over
                        21 total goals, and (2) Picking a player who fails to
                        score all season.
                      </p>
                      <div className="flex items-center justify-center gap-1 text-xs text-tertiary-600 font-medium bg-tertiary-50 rounded-full px-2 sm:px-3 py-1.5 sm:py-2">
                        <Skull className="w-3 h-3" />
                        Busted = Game Over
                      </div>
                    </div>
                  </div>

                  {/* Step 4: Win */}
                  <div className="flex flex-col items-center text-center">
                    <div className="relative mb-4 sm:mb-6">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-secondary-500 rounded-full flex items-center justify-center shadow-lg border-2 sm:border-4 border-white">
                        <Trophy className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-gray-900" />
                      </div>
                      <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 bg-primary-600 rounded-full flex items-center justify-center shadow-sm border-1 sm:border-2 border-white">
                        <span className="text-white font-bold text-xs sm:text-sm">
                          4
                        </span>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col justify-start">
                      <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                        Win the Game
                      </h4>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                        Create a Mini League and challenge your friends. The
                        winner? Whoever gets closest to 21 – without busting.
                        The forfeits? You decide.
                      </p>
                      <div className="flex items-center justify-center gap-1 text-xs text-secondary-600 font-medium bg-secondary-50 rounded-full px-2 sm:px-3 py-1.5 sm:py-2">
                        <Trophy className="w-3 h-3" />
                        Closest to 21 wins
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Example Scenario */}
              <div className="mt-12 sm:mt-14 lg:mt-16 relative rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/20 overflow-hidden">
                {/* Dark overlay for better visibility */}
                <div className="absolute inset-0 bg-green-800/90 rounded-xl sm:rounded-2xl"></div>
                <div className="relative z-10">
                  <div className="text-center mb-6 sm:mb-8">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 drop-shadow-lg">
                      Example Winning Strategy
                    </h3>
                    <p className="text-gray-200 drop-shadow-md text-sm sm:text-base">
                      Perfect squad with 21 total goals – blackjack!
                    </p>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
                    <div className="bg-white/95 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-5 text-center shadow-xl border border-white/30">
                      <div className="text-2xl sm:text-3xl font-bold text-primary-600 mb-1">
                        9
                      </div>
                      <div className="text-xs text-gray-500 uppercase tracking-wide font-medium">
                        Goals
                      </div>
                      <div className="text-xs sm:text-sm text-gray-700 mt-1 sm:mt-2 font-medium">
                        Striker
                      </div>
                    </div>
                    <div className="bg-white/95 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-5 text-center shadow-xl border border-white/30">
                      <div className="text-2xl sm:text-3xl font-bold text-primary-600 mb-1">
                        4
                      </div>
                      <div className="text-xs text-gray-500 uppercase tracking-wide font-medium">
                        Goals
                      </div>
                      <div className="text-xs sm:text-sm text-gray-700 mt-1 sm:mt-2 font-medium">
                        Winger
                      </div>
                    </div>
                    <div className="bg-white/95 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-5 text-center shadow-xl border border-white/30">
                      <div className="text-2xl sm:text-3xl font-bold text-primary-600 mb-1">
                        5
                      </div>
                      <div className="text-xs text-gray-500 uppercase tracking-wide font-medium">
                        Goals
                      </div>
                      <div className="text-xs sm:text-sm text-gray-700 mt-1 sm:mt-2 font-medium">
                        Midfielder
                      </div>
                    </div>
                    <div className="bg-white/95 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-5 text-center shadow-xl border border-white/30">
                      <div className="text-2xl sm:text-3xl font-bold text-primary-600 mb-1">
                        3
                      </div>
                      <div className="text-xs text-gray-500 uppercase tracking-wide font-medium">
                        Goals
                      </div>
                      <div className="text-xs sm:text-sm text-gray-700 mt-1 sm:mt-2 font-medium">
                        Defender
                      </div>
                    </div>
                  </div>

                  <div className="text-center mt-6 sm:mt-8">
                    <div className="inline-flex items-center gap-2 bg-secondary-400 text-gray-900 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold shadow-sm text-sm sm:text-base">
                      <Trophy className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span>Total: 21 Goals - Winner!</span>
                      <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="max-w-2xl mx-auto mt-14 sm:mt-16 lg:mt-20">
                <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-900 mb-3 sm:mb-4">
                  Frequently asked questions
                </h2>
                <p className="text-gray-600 text-center mb-8 sm:mb-10 lg:mb-12 text-sm sm:text-base px-4 sm:px-0">
                  Everything you need to know about 21Goals. Find answers to the
                  most common questions below.
                </p>

                <div className="space-y-3 sm:space-y-4">
                  {[
                    {
                      question: "What is 21Goals?",
                      answer:
                        "21Goals is a strategic fantasy game, where football meets blackjack. Pick 4 Premier League players and try to hit 21 goals – but don't go bust!",
                    },
                    {
                      question: "How do I win?",
                      answer:
                        "Win by getting closest to 21 without going bust. You bust by scoring over 21 or if any of your players don't score (steer clear of goalkeepers!).",
                    },
                    {
                      question: "What gets me busted?",
                      answer:
                        "You're busted (eliminated) if: (1) Your total goals exceed 21, or (2) Any of your 4 players finishes the season with 0 goals. Busted players are moved to the bottom of all leaderboards.",
                    },
                    {
                      question: "When can I select my players?",
                      answer:
                        "Player selection will open when 21Goals launches in August 2025. You'll choose your 4 players at the start of the season and they'll remain your squad throughout - no transfers or changes allowed.",
                    },
                    {
                      question: "Is there a cost to play?",
                      answer:
                        "21Goals will be free to play. Join the waitlist to be notified when the game is live!",
                    },
                  ].map((faq, index) => (
                    <details key={index} className="group">
                      <summary
                        className="flex justify-between items-center cursor-pointer p-3 sm:p-4 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
                        onClick={() =>
                          analytics.trackFAQInteraction(faq.question)
                        }
                      >
                        <span className="text-gray-900 font-medium text-sm sm:text-base">
                          {faq.question}
                        </span>
                        <ChevronDown className="text-secondary-500 w-4 h-4 sm:w-5 sm:h-5 group-open:rotate-180 transition-transform" />
                      </summary>
                      <div className="p-3 sm:p-4 bg-gray-100/80 rounded-b-lg">
                        <p className="text-gray-700 text-sm sm:text-base">
                          {faq.answer}
                        </p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative border-t border-gray-700">
          {/* Background Image */}
          <img
            src={footerBg}
            alt="Footer Background"
            className="absolute inset-0 w-full h-full object-cover z-0"
            loading="lazy"
          />
          {/* Dark overlay for better visibility */}
          <div className="absolute inset-0 bg-green-950/80 z-10"></div>
          <div className="relative z-20 container mx-auto px-3 sm:px-4 lg:px-6 py-10 sm:py-12 lg:py-16">
            {/* Main Footer Content */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-10 lg:mb-12">
              {/* Brand Section */}
              <div className="sm:col-span-2 lg:col-span-1">
                <div className="mb-4 sm:mb-6">
                  <img
                    src={logo}
                    alt="21Goals Logo"
                    className="w-28 h-10 sm:w-36 sm:h-12 lg:w-48 lg:h-20 object-contain"
                    draggable="false"
                  />
                </div>
                <p className="text-white text-sm sm:text-sm leading-relaxed mb-4 sm:mb-6">
                  21Goals is the fantasy football game where strategy beats luck
                  — pick 4 Premier League players, aim to hit exactly 21 goals,
                  make sure each one scores at least once, and win by getting
                  closest to 21 without going bust.
                </p>
                <div className="flex items-center gap-3 sm:gap-4">
                  <span className="text-white text-sm">Follow us:</span>
                  <Link
                    to="#"
                    onClick={(e) => {
                      e.preventDefault();
                      analytics.trackSocialClick("twitter");
                      window.open(
                        "https://x.com/xGPhilosophy",
                        "_blank",
                        "noopener,noreferrer"
                      );
                    }}
                    className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-200 group border border-white/20"
                    aria-label="Follow us on X (Twitter)"
                  >
                    <Twitter className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:text-secondary-400" />
                  </Link>
                </div>
              </div>

              {/* Quick Links */}
              <div className="sm:col-span-1 lg:col-span-1">
                <h4 className="text-white font-semibold text-base sm:text-lg mb-4 sm:mb-6">
                  Quick Links
                </h4>
                <nav className="space-y-3 sm:space-y-4">
                  <button
                    onClick={() => {
                      analytics.trackScrollToSection("early_access_form");
                      const element =
                        document.querySelector("form") ||
                        document.querySelector(".bg-primary-50");
                      element?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="block text-white hover:text-secondary-400 text-sm transition-all duration-200 hover:translate-x-1 transform"
                  >
                    Get Early Access
                  </button>
                  <button
                    onClick={() => {
                      analytics.trackScrollToSection("how_it_works");
                      const element = Array.from(
                        document.querySelectorAll("h2")
                      ).find((el) =>
                        el.textContent?.includes("How to Play 21Goals")
                      );
                      element?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="block text-white hover:text-secondary-400 text-sm transition-all duration-200 hover:translate-x-1 transform"
                  >
                    How to Play
                  </button>
                  <button
                    onClick={() => {
                      analytics.trackScrollToSection("faq");
                      const element = Array.from(
                        document.querySelectorAll("h2")
                      ).find((el) =>
                        el.textContent?.includes("Frequently asked questions")
                      );
                      element?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="block text-white hover:text-secondary-400 text-sm transition-all duration-200 hover:translate-x-1 transform"
                  >
                    FAQ
                  </button>
                </nav>
              </div>

              {/* Launch Info */}
              <div className="sm:col-span-1 lg:col-span-1">
                <h4 className="text-white font-semibold text-base sm:text-lg mb-4 sm:mb-6">
                  Coming Soon
                </h4>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-secondary-400" />
                    <div>
                      <p className="text-white font-medium text-sm">
                        Launch Date
                      </p>
                      <p className="text-white text-sm">August 2025</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Users className="w-4 h-4 sm:w-5 sm:h-5 text-secondary-400" />
                    <div>
                      <p className="text-white font-medium text-sm">Waitlist</p>
                      <p className="text-white text-sm">
                        {waitlistCount.toLocaleString()}+ members
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-gray-400 pt-6 sm:pt-8">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
                {/* Legal Links */}
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6">
                  <Link
                    to={ROUTES.PRIVACY_POLICY}
                    className="text-white hover:text-secondary-400 text-sm transition-colors duration-200"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    to={ROUTES.TERMS_OF_USE}
                    className="text-white hover:text-secondary-400 text-sm transition-colors duration-200"
                  >
                    Terms of Use
                  </Link>
                </div>

                {/* Copyright */}
                <div className="text-center sm:text-right">
                  <p className="text-white text-sm">
                    © 2025 21Goals. All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </LoadingScreen>
  );
};
