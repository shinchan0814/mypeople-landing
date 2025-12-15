'use client';

import { motion } from 'framer-motion';
import { Heart, Twitter, Instagram, Mail } from 'lucide-react';
import Image from 'next/image';

const footerLinks = {
  product: [
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Join Waitlist', href: '#waitlist' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
  ],
  connect: [
    { label: 'Contact Us', href: 'mailto:hello@myppl.club' },
    { label: 'FAQ', href: '#' },
  ],
};

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Mail, href: 'mailto:hello@myppl.club', label: 'Email' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-12 border-b border-[#334155]">
          {/* Brand Column */}
          <div className="col-span-2">
            <motion.a
              href="#"
              className="flex items-center gap-3 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src="/logo.png"
                alt="MyPeople"
                width={40}
                height={40}
                className="rounded-xl"
              />
              <span className="font-bold text-xl">MyPeople</span>
            </motion.a>
            <p className="text-[#94A3B8] mb-6 max-w-xs">
              A private space for meaningful connections with the people who matter most. Currently in early access.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-[#1E293B] flex items-center justify-center hover:bg-[#6366F1] transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-[#94A3B8] hover:text-[#A5B4FC] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-[#94A3B8] hover:text-[#A5B4FC] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Connect</h3>
            <ul className="space-y-3">
              {footerLinks.connect.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-[#94A3B8] hover:text-[#A5B4FC] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-[#64748B] text-sm">
            © {new Date().getFullYear()} MyPeople. All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-[#64748B] text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-[#F7DDE2] fill-[#F7DDE2]" />
            <span>for meaningful connections</span>
          </div>
          <div className="text-[#64748B] text-sm">
            <a href="https://myppl.club" className="hover:text-[#A5B4FC] transition-colors">
              myppl.club
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
