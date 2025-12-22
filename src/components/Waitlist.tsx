'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, CheckCircle, Users, Sparkles, ArrowRight, Heart, ChevronDown } from 'lucide-react';
import { getSupabase } from '@/lib/supabase';

const countryCodes = [
  { code: '+91', country: 'IN', flag: '🇮🇳', name: 'India' },
  { code: '+1', country: 'US', flag: '🇺🇸', name: 'United States' },
  { code: '+44', country: 'GB', flag: '🇬🇧', name: 'United Kingdom' },
  { code: '+971', country: 'AE', flag: '🇦🇪', name: 'UAE' },
  { code: '+65', country: 'SG', flag: '🇸🇬', name: 'Singapore' },
  { code: '+61', country: 'AU', flag: '🇦🇺', name: 'Australia' },
  { code: '+49', country: 'DE', flag: '🇩🇪', name: 'Germany' },
  { code: '+33', country: 'FR', flag: '🇫🇷', name: 'France' },
  { code: '+81', country: 'JP', flag: '🇯🇵', name: 'Japan' },
  { code: '+86', country: 'CN', flag: '🇨🇳', name: 'China' },
  { code: '+82', country: 'KR', flag: '🇰🇷', name: 'South Korea' },
  { code: '+55', country: 'BR', flag: '🇧🇷', name: 'Brazil' },
  { code: '+52', country: 'MX', flag: '🇲🇽', name: 'Mexico' },
  { code: '+7', country: 'RU', flag: '🇷🇺', name: 'Russia' },
  { code: '+27', country: 'ZA', flag: '🇿🇦', name: 'South Africa' },
];

export default function Waitlist() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(countryCodes[0]);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [waitlistCount, setWaitlistCount] = useState(0);
  const [displayCount, setDisplayCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  const counterRef = useRef(null);
  const isCounterInView = useInView(counterRef, { once: true });

  useEffect(() => {
    async function fetchWaitlistCount() {
      const supabase = getSupabase();
      if (!supabase) return;

      const { count } = await supabase
        .from('waitlist')
        .select('*', { count: 'exact', head: true });

      if (count !== null) {
        setWaitlistCount(count);
      }
    }
    fetchWaitlistCount();
  }, []);

  // Animated counter effect
  useEffect(() => {
    if (isCounterInView && waitlistCount > 0 && !hasAnimated) {
      setHasAnimated(true);
      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = waitlistCount / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= waitlistCount) {
          setDisplayCount(waitlistCount);
          clearInterval(timer);
        } else {
          setDisplayCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isCounterInView, waitlistCount, hasAnimated]);

  const validatePhoneNumber = (phone: string, countryCode: string) => {
    // Remove all non-digit characters
    const digits = phone.replace(/\D/g, '');

    // India-specific validation: must be exactly 10 digits
    if (countryCode === '+91') {
      return digits.length === 10;
    }

    // General validation for other countries
    return digits.length >= 8 && digits.length <= 15;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const cleanPhone = phoneNumber.replace(/\D/g, '');

    if (!cleanPhone || !validatePhoneNumber(cleanPhone, selectedCountry.code)) {
      setStatus('error');
      if (selectedCountry.code === '+91') {
        setMessage('Invalid phone number. Enter 10 digits for India.');
      } else {
        setMessage('Please enter a valid phone number');
      }
      return;
    }

    const fullPhone = `${selectedCountry.code}${cleanPhone}`;
    setStatus('loading');

    const supabase = getSupabase();
    if (!supabase) {
      setStatus('error');
      setMessage('Service temporarily unavailable. Please try again later.');
      return;
    }

    try {
      const { error } = await supabase
        .from('waitlist')
        .insert([
          {
            phone: fullPhone,
            source: 'landing_page',
            status: 'pending',
          },
        ]);

      if (error) {
        if (error.code === '23505') {
          setStatus('error');
          setMessage('This phone number is already on the waitlist!');
        } else {
          setStatus('error');
          setMessage('Something went wrong. Please try again.');
        }
        return;
      }

      setStatus('success');
      setMessage("We'll notify you when we launch.");
      setPhoneNumber('');
      setWaitlistCount((prev) => prev + 1);
      setDisplayCount((prev) => prev + 1);
    } catch {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <section id="waitlist" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-bg opacity-95" />

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full" />
      <div className="absolute bottom-10 right-10 w-48 h-48 border border-white/20 rounded-full" />
      <div className="absolute top-1/2 left-1/4 w-20 h-20 border border-white/10 rounded-full" />

      {/* Floating hearts */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-20 right-1/4"
      >
        <Heart className="w-8 h-8 text-white/20" />
      </motion.div>
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute bottom-32 left-1/4"
      >
        <Heart className="w-6 h-6 text-white/20" />
      </motion.div>

      <div className="max-w-4xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-8"
          >
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white">Limited Early Access</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Be the first to experience<br />
            <span className="text-white/80">My People</span>
          </h2>

          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            We are building something special for people who value intentional conversations over superficial sharing. Join the waitlist if you feel there has to be a better way to stay in touch.
          </p>

          {/* Waitlist Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="max-w-xl mx-auto"
          >
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-2xl p-8 shadow-2xl"
              >
                <div className="w-16 h-16 rounded-full bg-[#10B981]/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-[#10B981]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-2">You're on the list!</h3>
                <p className="text-[#334155]">{message}</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <div className="flex bg-white rounded-2xl border-2 border-transparent focus-within:border-[#6366F1] transition-colors shadow-lg">
                      {/* Country Code Selector */}
                      <div className="relative">
                        <button
                          type="button"
                          onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                          className="flex items-center gap-2 px-4 py-5 bg-gray-50 rounded-l-2xl border-r border-gray-200 hover:bg-gray-100 transition-colors min-w-[120px]"
                        >
                          <span className="text-2xl">{selectedCountry.flag}</span>
                          <span className="text-[#0F172A] font-semibold text-lg">{selectedCountry.code}</span>
                          <ChevronDown className={`w-5 h-5 text-[#64748B] transition-transform ${showCountryDropdown ? 'rotate-180' : ''}`} />
                        </button>

                        {/* Dropdown */}
                        {showCountryDropdown && (
                          <>
                            {/* Backdrop to close dropdown when clicking outside */}
                            <div
                              className="fixed inset-0 z-40"
                              onClick={() => setShowCountryDropdown(false)}
                            />
                            <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 max-h-72 overflow-y-auto">
                              {countryCodes.map((country) => (
                                <button
                                  key={country.code}
                                  type="button"
                                  onClick={() => {
                                    setSelectedCountry(country);
                                    setShowCountryDropdown(false);
                                  }}
                                  className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors text-left first:rounded-t-2xl last:rounded-b-2xl ${
                                    selectedCountry.code === country.code ? 'bg-[#6366F1]/10' : ''
                                  }`}
                                >
                                  <span className="text-2xl">{country.flag}</span>
                                  <span className="text-[#0F172A] font-medium">{country.name}</span>
                                  <span className="text-[#64748B] ml-auto font-medium">{country.code}</span>
                                </button>
                              ))}
                            </div>
                          </>
                        )}
                      </div>

                      {/* Phone Input */}
                      <div className="flex-1 flex items-center min-w-0">
                        <Phone className="ml-4 w-5 h-5 text-[#64748B] flex-shrink-0" />
                        <input
                          type="tel"
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value.replace(/[^\d\s-]/g, ''))}
                          placeholder="Phone number"
                          className="w-full px-4 py-5 text-[#0F172A] placeholder-[#94A3B8] text-lg focus:outline-none rounded-r-2xl"
                          disabled={status === 'loading'}
                        />
                      </div>
                    </div>
                  </div>
                  <motion.button
                    type="submit"
                    disabled={status === 'loading'}
                    className="px-10 py-5 rounded-2xl bg-[#0F172A] text-white font-semibold text-lg hover:bg-[#1E293B] transition-colors disabled:opacity-70 flex items-center justify-center gap-2 whitespace-nowrap shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {status === 'loading' ? (
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        Join Waitlist
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </motion.button>
                </div>
                {status === 'error' && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-white/90 text-sm bg-white/10 rounded-lg px-4 py-2"
                  >
                    {message}
                  </motion.p>
                )}
              </form>
            )}
          </motion.div>

          {/* Social Proof - Animated Counter */}
          <motion.div
            ref={counterRef}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12 flex flex-col items-center justify-center gap-4"
          >
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-4">
              <Users className="w-6 h-6 text-white" />
              <div className="text-center">
                <motion.span
                  className="text-4xl md:text-5xl font-bold text-white"
                  key={displayCount}
                >
                  {displayCount > 0 ? displayCount : waitlistCount}
                </motion.span>
                <span className="block text-sm text-white/70 mt-1">
                  {waitlistCount > 0 ? 'people on the waitlist' : 'Be among the first to join'}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Trust points */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-12 flex flex-wrap justify-center gap-6 text-white/60 text-sm"
          >
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              No spam, ever
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              Early access priority
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              Exclusive launch perks
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
