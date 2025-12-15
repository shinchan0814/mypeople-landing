'use client';

import { motion } from 'framer-motion';
import { Star, Quote, Shield, Lock, Heart } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Sarah K.',
    role: 'Working Mom',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
    content: 'Finally, an app that gets it. I share my kids\' moments with just my parents and sister. No strangers, no judgment.',
    rating: 5,
  },
  {
    name: 'Mike T.',
    role: 'Living Abroad',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    content: 'Being 10,000 miles from family was hard. MyPeople makes me feel like I\'m still there for dinner every night.',
    rating: 5,
  },
  {
    name: 'Priya S.',
    role: 'Best Friend Group',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop&crop=face',
    content: 'Our group of 6 has been friends for 15 years. This app is like our private club. Love the simplicity.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[#F7DDE2]/30 via-transparent to-[#A5B4FC]/30 rounded-full blur-3xl opacity-70" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-6">
            What Our <span className="gradient-text">Beta Testers</span> Say
          </h2>
          <p className="text-xl text-[#334155] max-w-2xl mx-auto">
            Here's what our early access users are saying about their experience with MyPeople.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-[#FAF7F2] rounded-3xl p-8 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-[#E2E8F0]">
                {/* Quote Icon */}
                <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full gradient-bg flex items-center justify-center shadow-lg">
                  <Quote className="w-5 h-5 text-white" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#6366F1] text-[#6366F1]" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-[#334155] leading-relaxed mb-6 text-lg">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-[#E2E8F0]">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-[#0F172A]">{testimonial.name}</div>
                    <div className="text-sm text-[#64748B]">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 flex flex-wrap justify-center gap-8 items-center"
        >
          <div className="flex items-center gap-2 text-[#334155]">
            <Shield className="w-5 h-5 text-[#6366F1]" />
            <span className="font-medium">Privacy First Design</span>
          </div>
          <div className="w-px h-6 bg-[#E2E8F0] hidden sm:block" />
          <div className="flex items-center gap-2 text-[#334155]">
            <Lock className="w-5 h-5 text-[#6366F1]" />
            <span className="font-medium">End-to-End Encrypted</span>
          </div>
          <div className="w-px h-6 bg-[#E2E8F0] hidden sm:block" />
          <div className="flex items-center gap-2 text-[#334155]">
            <Heart className="w-5 h-5 text-[#6366F1]" />
            <span className="font-medium">Made with Love</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
