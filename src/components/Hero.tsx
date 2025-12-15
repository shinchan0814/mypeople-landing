'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Heart, Users, Camera, Sparkles } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-[#FAF7F2]">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient Orbs - Indigo and Blush */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#A5B4FC] rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-[#F7DDE2] rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-[#6366F1] rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-lg mb-6"
            >
              <Sparkles className="w-4 h-4 text-[#6366F1]" />
              <span className="text-sm font-medium text-[#334155]">Early Access Coming Soon</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-[#0F172A]"
            >
              Your Closest
              <br />
              <span className="gradient-text">7 People</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-[#334155] mb-8 max-w-lg mx-auto lg:mx-0"
            >
              A private space for meaningful connections. Share moments with the people who matter most—no followers, no likes, just real relationships.
            </motion.p>

            {/* Waitlist CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <motion.a
                href="#waitlist"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full gradient-bg text-white font-semibold shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all btn-glow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Join the Waitlist
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#features"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full border-2 border-[#E2E8F0] text-[#334155] font-semibold hover:border-[#6366F1] hover:text-[#6366F1] transition-colors bg-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex gap-8 justify-center lg:justify-start"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-[#6366F1]">7</div>
                <div className="text-sm text-[#64748B]">Max People</div>
              </div>
              <div className="w-px bg-[#E2E8F0]" />
              <div className="text-center">
                <div className="text-3xl font-bold text-[#6366F1]">100%</div>
                <div className="text-sm text-[#64748B]">Private</div>
              </div>
              <div className="w-px bg-[#E2E8F0]" />
              <div className="text-center">
                <div className="text-3xl font-bold text-[#6366F1]">0</div>
                <div className="text-sm text-[#64748B]">Ads Ever</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center"
          >
            {/* Phone Frame */}
            <div className="relative animate-float phone-glow">
              <div className="w-[280px] h-[580px] bg-[#0F172A] rounded-[3rem] p-3 shadow-2xl">
                <div className="w-full h-full bg-[#FAF7F2] rounded-[2.5rem] overflow-hidden relative">
                  {/* Phone Screen Content */}
                  <div className="absolute inset-0">
                    {/* Status Bar */}
                    <div className="flex justify-between items-center px-6 py-3">
                      <span className="text-sm font-medium text-[#0F172A]">9:41</span>
                      <div className="flex gap-1">
                        <div className="w-4 h-2 bg-[#0F172A] rounded-sm" />
                      </div>
                    </div>

                    {/* App Header */}
                    <div className="px-5 py-4 flex items-center justify-between">
                      <h2 className="text-xl font-bold text-[#0F172A]">My People</h2>
                      <div className="w-9 h-9 rounded-full gradient-bg" />
                    </div>

                    {/* Feed Preview */}
                    <div className="px-4 space-y-3">
                      {/* Card 1 */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                        className="bg-white rounded-2xl p-3 shadow-md"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F7DDE2] to-[#A5B4FC]" />
                          <div>
                            <div className="font-semibold text-sm text-[#0F172A]">Mom</div>
                            <div className="text-xs text-[#64748B]">2h ago</div>
                          </div>
                        </div>
                        <div className="w-full h-32 rounded-xl bg-gradient-to-br from-[#F7DDE2] to-[#A5B4FC] flex items-center justify-center">
                          <Heart className="w-8 h-8 text-white" />
                        </div>
                      </motion.div>

                      {/* Card 2 */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2 }}
                        className="bg-white rounded-2xl p-3 shadow-md"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#6366F1] to-[#A5B4FC]" />
                          <div>
                            <div className="font-semibold text-sm text-[#0F172A]">Best Friend</div>
                            <div className="text-xs text-[#64748B]">5h ago</div>
                          </div>
                        </div>
                        <div className="w-full h-24 rounded-xl bg-gradient-to-br from-[#6366F1] to-[#A5B4FC] flex items-center justify-center">
                          <Camera className="w-6 h-6 text-white" />
                        </div>
                      </motion.div>
                    </div>

                    {/* Bottom Nav */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex justify-around items-center bg-white rounded-2xl py-3 shadow-lg">
                        <div className="w-6 h-6 rounded bg-[#E2E8F0]" />
                        <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center -mt-6 shadow-lg">
                          <Camera className="w-5 h-5 text-white" />
                        </div>
                        <div className="w-6 h-6 rounded bg-[#E2E8F0]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -left-16 top-20 bg-white rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#6366F1] to-[#A5B4FC] flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-[#0F172A]">7 People</div>
                    <div className="text-xs text-[#64748B]">Connected</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -right-12 bottom-32 bg-white rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-[#6366F1]" />
                  <span className="font-semibold text-sm text-[#0F172A]">New moment!</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-[#64748B]"
        >
          <span className="text-sm">Scroll to explore</span>
          <ArrowRight className="w-4 h-4 rotate-90" />
        </motion.div>
      </motion.div>
    </section>
  );
}
