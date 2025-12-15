'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, CheckCircle, Users, Sparkles, ArrowRight, Heart } from 'lucide-react';
import { supabase } from '@/lib/supabase';

export default function Waitlist() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [waitlistCount, setWaitlistCount] = useState(0);

  useEffect(() => {
    async function fetchWaitlistCount() {
      const { count } = await supabase
        .from('waitlist')
        .select('*', { count: 'exact', head: true });

      if (count !== null) {
        setWaitlistCount(count);
      }
    }
    fetchWaitlistCount();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes('@')) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }

    setStatus('loading');

    try {
      const { error } = await supabase
        .from('waitlist')
        .insert([
          {
            email: email.toLowerCase().trim(),
            source: 'landing_page',
            status: 'pending',
          },
        ]);

      if (error) {
        if (error.code === '23505') {
          setStatus('error');
          setMessage('This email is already on the waitlist!');
        } else {
          setStatus('error');
          setMessage('Something went wrong. Please try again.');
        }
        return;
      }

      setStatus('success');
      setMessage("You're on the list! We'll notify you when we launch.");
      setEmail('');
      setWaitlistCount((prev) => prev + 1);
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
            Be First to Experience<br />
            <span className="text-white/80">Meaningful Connections</span>
          </h2>

          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            We're building something special for the people who value real relationships over vanity metrics. Join the waitlist and be among the first to try MyPeople.
          </p>

          {/* Waitlist Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="max-w-md mx-auto"
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
                <div className="relative">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="relative flex-1">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#64748B]" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="w-full pl-12 pr-4 py-4 rounded-xl bg-white text-[#0F172A] placeholder-[#64748B] border-2 border-transparent focus:border-[#6366F1] transition-colors text-lg"
                        disabled={status === 'loading'}
                      />
                    </div>
                    <motion.button
                      type="submit"
                      disabled={status === 'loading'}
                      className="px-8 py-4 rounded-xl bg-[#0F172A] text-white font-semibold hover:bg-[#1E293B] transition-colors disabled:opacity-70 flex items-center justify-center gap-2 whitespace-nowrap"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {status === 'loading' ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          Join Waitlist
                          <ArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </motion.button>
                  </div>
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

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <div className="flex -space-x-3">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className={`w-10 h-10 rounded-full border-2 border-white/50 bg-gradient-to-br ${
                    ['from-[#F7DDE2] to-[#A5B4FC]', 'from-[#6366F1] to-[#A5B4FC]', 'from-[#A5B4FC] to-[#6366F1]', 'from-[#F7DDE2] to-[#6366F1]', 'from-[#6366F1] to-[#F7DDE2]'][i]
                  }`}
                />
              ))}
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <Users className="w-5 h-5" />
              <span className="font-medium">
                {waitlistCount > 0 ? `${waitlistCount}+ people already waiting` : 'Be among the first to join'}
              </span>
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
