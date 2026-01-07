import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Navigation } from './components/Navigation';
import { BentoCard } from './components/BentoCard';
import { 
  Users, 
  Calendar, 
  MessageCircle, 
  GraduationCap, 
  BookOpen, 
  FileText, 
  Bell, 
  Search, 
  Shield,
  ArrowRight,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail
} from 'lucide-react';

export function App() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  // Hero text scaling effect
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.5]);

  return (
    <div className="min-h-screen bg-background text-white selection:bg-red-500/30">
      <Navigation />

      {/* Hero Section */}
      <section ref={containerRef} className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/20 rounded-full blur-[120px] animate-blob" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-900/20 rounded-full blur-[120px] animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gray-600/10 rounded-full blur-[100px] animate-blob animation-delay-4000" />

        <motion.div
          style={{ scale, opacity }}
          className="text-center z-10 max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-medium text-gray-300">
              Now Available for IIT Students
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter mb-8 leading-[0.9]">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
              Your University,
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-red-500 to-red-600">
              Connected
            </span>
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-gray-400 max-w-2xl mx-auto mb-12 font-medium leading-relaxed px-4">
            Everything you need for university life in one place. Connect with peers, 
            organize study sessions, share resources, and stay updated with campus events.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full font-bold text-lg hover:from-red-500 hover:to-red-600 transition-all w-full sm:w-auto shadow-lg shadow-red-600/25"
            >
              Watch Demo
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/5 text-white border border-white/10 rounded-full font-bold text-lg hover:bg-white/10 transition-colors w-full sm:w-auto backdrop-blur-sm"
            >
              Contact Us
            </motion.button>
          </div>

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center justify-center gap-8 md:gap-16 mt-16 pt-8 border-t border-white/10"
          >
            <div className="text-center">
              <p className="text-2xl md:text-4xl font-bold text-white">2,500+</p>
              <p className="text-gray-500 text-sm">Active Students</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-4xl font-bold text-white">50+</p>
              <p className="text-gray-500 text-sm">Communities</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-4xl font-bold text-white">1,000+</p>
              <p className="text-gray-500 text-sm">Resources</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-gray-500 uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent" />
        </motion.div>
      </section>

      {/* Bento Grid Section */}
      <section id="features" className="py-20 md:py-32 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="mb-16 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Everything you need <br />
            <span className="text-gray-500">to ace campus life.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
          {/* Card 1: Main Feature - Community */}
          <BentoCard colSpan={2} rowSpan={2} className="min-h-[400px]">
            <div className="flex flex-col justify-between h-full">
              <div>
                <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center mb-6 border border-red-500/30">
                  <Users className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Communities & Groups
                </h3>
                <p className="text-gray-400 text-base md:text-lg max-w-md">
                  Join tutorial groups, clubs, and departments. Connect with peers 
                  who share your interests in a verified, safe environment.
                </p>
              </div>
              <div className="mt-8 relative h-48 w-full overflow-hidden rounded-xl border border-white/5 bg-black/20">
                <div className="absolute top-4 left-4 right-4 h-12 bg-white/5 rounded-lg flex items-center px-4 gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-600" />
                  <div className="h-2 w-24 bg-gray-700 rounded" />
                </div>
                <div className="absolute top-20 left-4 right-4 h-12 bg-white/5 rounded-lg flex items-center px-4 gap-3">
                  <div className="w-6 h-6 rounded-full bg-gray-600" />
                  <div className="h-2 w-32 bg-gray-700 rounded" />
                </div>
                <div className="absolute top-36 left-4 right-4 h-12 bg-white/5 rounded-lg flex items-center px-4 gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-800" />
                  <div className="h-2 w-20 bg-gray-700 rounded" />
                </div>
              </div>
            </div>
          </BentoCard>

          {/* Card 2: Events */}
          <BentoCard delay={0.1} className="bg-gradient-to-b from-red-900/20 to-transparent">
            <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center mb-4 border border-red-500/30">
              <Calendar className="w-5 h-5 text-red-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">Events & Updates</h3>
            <p className="text-gray-400 text-sm mb-6">
              Never miss lectures, workshops, or campus events.
            </p>
            <div className="space-y-3">
              {['Tech Summit', 'Career Fair'].map((event, i) => (
                <div key={i} className="flex items-center gap-3 p-2 rounded-lg bg-white/5">
                  <div className="w-10 h-10 rounded bg-white/10 flex flex-col items-center justify-center text-xs font-bold">
                    <span className="text-red-400">JAN</span>
                    <span>{15 + i}</span>
                  </div>
                  <div>
                    <div className="text-sm font-medium">{event}</div>
                    <div className="text-xs text-gray-500">Main Auditorium</div>
                  </div>
                </div>
              ))}
            </div>
          </BentoCard>

          {/* Card 3: Kuppi Sessions */}
          <BentoCard delay={0.2}>
            <div className="w-10 h-10 rounded-full bg-gray-500/20 flex items-center justify-center mb-4 border border-gray-500/30">
              <BookOpen className="w-5 h-5 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">Kuppi Sessions</h3>
            <p className="text-gray-400 text-sm">
              Organize study sessions and earn credits for helping others.
            </p>
            <div className="mt-4 flex -space-x-2">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-gray-700" />
              ))}
              <div className="w-8 h-8 rounded-full border-2 border-background bg-red-800 flex items-center justify-center text-[10px] font-bold">
                +50
              </div>
            </div>
          </BentoCard>

          {/* Card 4: Resources */}
          <BentoCard delay={0.3}>
            <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center mb-4 border border-red-500/30">
              <FileText className="w-5 h-5 text-red-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">Academic Resources</h3>
            <p className="text-gray-400 text-sm">
              Share and access notes, past papers, and study materials.
            </p>
          </BentoCard>

          {/* Card 5: Universal Search */}
          <BentoCard colSpan={2} delay={0.4}>
            <div className="flex flex-col md:flex-row items-center gap-8 h-full">
              <div className="flex-1">
                <div className="w-10 h-10 rounded-full bg-gray-500/20 flex items-center justify-center mb-4 border border-gray-500/30">
                  <Search className="w-5 h-5 text-gray-400" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-2">Universal Search</h3>
                <p className="text-gray-400">
                  Find notes, people, events, or past papers in milliseconds.
                </p>
              </div>
              <div className="flex-1 w-full">
                <div className="bg-black/40 rounded-xl p-4 border border-white/10 flex items-center gap-3">
                  <Search className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-500 text-sm">
                    Search for "SDGP notes"...
                  </span>
                  <div className="ml-auto flex gap-1">
                    <span className="px-1.5 py-0.5 rounded bg-white/10 text-[10px] text-gray-400">⌘</span>
                    <span className="px-1.5 py-0.5 rounded bg-white/10 text-[10px] text-gray-400">K</span>
                  </div>
                </div>
              </div>
            </div>
          </BentoCard>

          {/* Card 6: Messaging */}
          <BentoCard delay={0.5}>
            <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center mb-4 border border-green-500/30">
              <MessageCircle className="w-5 h-5 text-green-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">In-App Messaging</h3>
            <p className="text-gray-400 text-sm">
              Chat with friends, lecturers, and group members securely.
            </p>
          </BentoCard>

          {/* Card 7: Notifications */}
          <BentoCard delay={0.6}>
            <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center mb-4 border border-yellow-500/30">
              <Bell className="w-5 h-5 text-yellow-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">Smart Notifications</h3>
            <p className="text-gray-400 text-sm">
              Get reminded 15 minutes before lectures and deadlines.
            </p>
          </BentoCard>

          {/* Card 8: Verified Profiles */}
          <BentoCard delay={0.7}>
            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mb-4 border border-blue-500/30">
              <Shield className="w-5 h-5 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">Verified Profiles</h3>
            <p className="text-gray-400 text-sm">
              Only IIT students and staff with verified email addresses.
            </p>
          </BentoCard>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-red-900/10 to-transparent pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[150px]" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight">
            Ready to{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-600">
              connect?
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 mb-10 px-4">
            Join thousands of IIT students already using IIT Connect to stay organized, connected, and successful.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full font-bold text-lg hover:from-red-500 hover:to-red-600 transition-all shadow-lg shadow-red-600/25"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </motion.button>

          {/* Benefits */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-2xl mx-auto">
            {['Free for students', 'Verified & secure', '2,500+ members', 'Web & mobile'].map((benefit, i) => (
              <div key={i} className="flex items-center justify-center gap-2 text-sm text-gray-400">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                {benefit}
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img 
                  src="/imgs/Gemini_Generated_Image_ujxpequjxpequjxp.png" 
                  alt="IIT Connect Logo" 
                  className="w-10 h-10 rounded-lg object-cover" 
                />
                <span className="text-white font-bold text-lg">IIT Connect</span>
              </div>
              <p className="text-gray-500 text-sm mb-4">
                Your university, connected. Everything you need for university life in one place.
              </p>
              <div className="flex gap-3">
                <a href="#" className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors border border-white/10">
                  <Facebook className="w-4 h-4 text-gray-400" />
                </a>
                <a href="#" className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center hover:bg-red-500 transition-colors border border-white/10">
                  <Twitter className="w-4 h-4 text-gray-400" />
                </a>
                <a href="#" className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors border border-white/10">
                  <Instagram className="w-4 h-4 text-gray-400" />
                </a>
                <a href="#" className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors border border-white/10">
                  <Linkedin className="w-4 h-4 text-gray-400" />
                </a>
              </div>
            </div>

            {/* Product */}
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#community" className="hover:text-white transition-colors">Community</a></li>
                <li><a href="#events" className="hover:text-white transition-colors">Events</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-4">Get in Touch</h4>
              <ul className="space-y-3 text-sm text-gray-500">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>support@iitconnect.lk</span>
                </li>
                <li>
                  <p>Informatics Institute of Technology</p>
                  <p>57, Ramakrishna Road, Colombo 06</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © 2026 IIT Connect. All rights reserved.
            </p>
            <p className="text-sm text-gray-500">Made with ❤️ by CS-34</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
