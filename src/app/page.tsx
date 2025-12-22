import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
// import Testimonials from '@/components/Testimonials'; // Hidden until real feedback comes in
import Waitlist from '@/components/Waitlist';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      {/* Testimonials hidden until real feedback comes in */}
      {/* <Testimonials /> */}
      <Waitlist />
      <Footer />
    </main>
  );
}
