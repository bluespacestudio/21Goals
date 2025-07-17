import { createClient } from '@supabase/supabase-js'

// These will be environment variables in production
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'your-supabase-url'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-supabase-anon-key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Waitlist service functions
export const waitlistService = {
  // Add a new user to the waitlist
  async addToWaitlist(fullName, email) {
    try {
      const { data, error } = await supabase
        .from('waitlist')
        .insert([
          { 
            full_name: fullName,
            email: email.toLowerCase().trim(),
            source: 'coming_soon_page'
          }
        ])
        .select()

      if (error) {
        // Handle duplicate email error specifically
        if (error.code === '23505') {
          return { 
            success: false, 
            error: 'This email is already on our waitlist!' 
          }
        }
        throw error
      }

      return { 
        success: true, 
        data: data[0],
        message: 'Successfully joined the waitlist!' 
      }
    } catch (error) {
      console.error('Error adding to waitlist:', error)
      return { 
        success: false, 
        error: error.message || 'Something went wrong. Please try again.' 
      }
    }
  },

  // Get waitlist count (for display purposes)
  async getWaitlistCount() {
    try {
      const { count, error } = await supabase
        .from('waitlist')
        .select('*', { count: 'exact', head: true })

      if (error) throw error

      return { success: true, count: count || 0 }
    } catch (error) {
      console.error('Error getting waitlist count:', error)
      return { success: false, count: 0 }
    }
  },

  // Check if email is already in waitlist
  async checkEmailExists(email) {
    try {
      const { data, error } = await supabase
        .from('waitlist')
        .select('email')
        .eq('email', email.toLowerCase().trim())
        .single()

      if (error && error.code !== 'PGRST116') { // PGRST116 = no rows returned
        throw error
      }

      return { success: true, exists: !!data }
    } catch (error) {
      console.error('Error checking email:', error)
      return { success: false, exists: false }
    }
  }
} 