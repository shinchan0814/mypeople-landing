'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Users,
  Camera,
  MessageCircle,
  Lock,
  Heart,
  Bell,
  Sparkles,
  Shield
} from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Just 7 People',
    description: 'Your inner circle only. No followers, no strangers—just the people who truly matter.',
    color: 'from-[#6366F1] to-[#A5B4FC]',
    bgColor: 'bg-[#6366F1]/5',
  },
  {
    icon: Camera,
    title: 'Share Moments',
    description: 'Capture and share photos & videos instantly. Your moments stay within your circle.',
    color: 'from-[#6366F1] to-[#818CF8]',
    bgColor: 'bg-[#F7DDE2]/50',
  },
  {
    icon: MessageCircle,
    title: 'Real Conversations',
    description: 'Chat one-on-one with your people. No group noise, just meaningful connections.',
    color: 'from-[#4F46E5] to-[#6366F1]',
    bgColor: 'bg-[#6366F1]/5',
  },
  {
    icon: Lock,
    title: '100% Private',
    description: 'No ads, no data selling, no algorithms. Your private life stays private.',
    color: 'from-[#6366F1] to-[#A5B4FC]',
    bgColor: 'bg-[#F7DDE2]/50',
  },
  {
    icon: Heart,
    title: 'Emotional Status',
    description: 'Let your people know how you\'re feeling. Stay emotionally connected.',
    color: 'from-[#F7DDE2] to-[#A5B4FC]',
    bgColor: 'bg-[#6366F1]/5',
  },
  {
    icon: Bell,
    title: 'Birthday Reminders',
    description: 'Never miss an important date. We remind you about the moments that matter.',
    color: 'from-[#6366F1] to-[#818CF8]',
    bgColor: 'bg-[#F7DDE2]/50',
  },
];

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className={`${feature.bgColor} rounded-3xl p-8 h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-[#E2E8F0]/50`}>
        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
          <feature.icon className="w-7 h-7 text-white" />
        </div>
        <h3 className="text-xl font-bold text-[#0F172A] mb-3">{feature.title}</h3>
        <p className="text-[#334155] leading-relaxed">{feature.description}</p>
      </div>
    </motion.div>
  );
}

export default function Features() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section id="features" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#6366F1]/10 to-[#F7DDE2]/20 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#F7DDE2]/20 to-[#A5B4FC]/10 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6366F1]/10 mb-6">
            <Sparkles className="w-4 h-4 text-[#6366F1]" />
            <span className="text-sm font-medium text-[#6366F1]">Why MyPeople?</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-6">
            Built for <span className="gradient-text">Real Relationships</span>
          </h2>
          <p className="text-xl text-[#334155] max-w-2xl mx-auto">
            Social media got it wrong. We're here to fix it with intentional design focused on the people who actually matter to you.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#0F172A] text-white">
            <Shield className="w-5 h-5" />
            <span className="font-medium">Your data is never sold. Ever.</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
