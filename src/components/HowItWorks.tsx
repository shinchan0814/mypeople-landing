'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { UserPlus, Camera, Heart } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: UserPlus,
    title: 'Add Your People',
    description: 'Choose up to 7 people from your contacts. These are your closest relationships.',
    color: 'from-[#6366F1] to-[#A5B4FC]',
  },
  {
    number: '02',
    icon: Camera,
    title: 'Share Moments',
    description: 'Capture and share photos or videos instantly. Your people see it immediately in their feed.',
    color: 'from-[#A5B4FC] to-[#6366F1]',
  },
  {
    number: '03',
    icon: Heart,
    title: 'Stay Connected',
    description: 'Chat, react, and keep the conversation going. Feel closer, always.',
    color: 'from-[#F7DDE2] to-[#A5B4FC]',
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="how-it-works" className="py-24 bg-[#FAF7F2] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #E2E8F0 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-6">
            Simple as <span className="gradient-text">1, 2, 3</span>
          </h2>
          <p className="text-xl text-[#334155] max-w-2xl mx-auto">
            Getting started takes less than a minute. Here's how it works.
          </p>
        </motion.div>

        {/* Steps */}
        <div ref={ref} className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#6366F1]/20 via-[#A5B4FC]/40 to-[#F7DDE2]/20 -translate-y-1/2" />

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow relative z-10 border border-[#E2E8F0]">
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-[#0F172A] flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold">{step.number}</span>
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 mx-auto shadow-lg`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-[#0F172A] mb-3 text-center">{step.title}</h3>
                  <p className="text-[#334155] text-center leading-relaxed">{step.description}</p>
                </div>

                {/* Connector Dot for Desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-8 rounded-full bg-white border-4 border-[#A5B4FC] -translate-y-1/2 z-20" />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-white shadow-xl border border-[#E2E8F0]">
            <div className="flex -space-x-3">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className={`w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br ${
                    ['from-[#F7DDE2] to-[#A5B4FC]', 'from-[#6366F1] to-[#A5B4FC]', 'from-[#A5B4FC] to-[#6366F1]', 'from-[#F7DDE2] to-[#6366F1]', 'from-[#6366F1] to-[#F7DDE2]'][i]
                  }`}
                />
              ))}
            </div>
            <span className="text-[#0F172A] font-semibold">Join the waitlist for early access</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
