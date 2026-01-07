import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { Navigation } from './components/Navigation';
import { BentoCard } from './components/BentoCard';
import { LogoBanner } from './components/LogoBanner';
import { CustomCursor } from './components/CustomCursor';
import { 
  Users, 
  Calendar, 
  MessageCircle, 
  BookOpen, 
  FileText, 
  Bell, 
  Search, 
  Shield,
  ArrowRight,
  Sparkles,
  Zap,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  AlertTriangle,
  MessagesSquare,
  GraduationCap,
  Building2,
  CheckCircle2,
  UserCheck,
  Smartphone,
  Lock,
  Eye,
  Globe,
  Rocket,
  Heart
} from 'lucide-react';

// Animated gradient orb component
function GradientOrb({ className, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2, delay }}
      className={`absolute rounded-full blur-[120px] animate-blob ${className}`}
    />
  );
}

// Floating particles component
function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-red-500/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
}

// Animated counter component
function AnimatedCounter({ value, suffix = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (isInView) {
      const num = parseInt(value.replace(/,/g, ''));
      const duration = 2000;
      const steps = 60;
      const increment = num / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= num) {
          setCount(num);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      
      return () => clearInterval(timer);
    }
  }, [isInView, value]);
  
  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

// Section wrapper with reveal animation
function RevealSection({ children, className = '', delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function App() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  
  // Smooth spring animation for scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Hero parallax effects
  const heroRef = useRef(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  });
  
  const heroY = useTransform(heroProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(heroProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(heroProgress, [0, 0.5], [1, 0.9]);

  return (
    <div className="min-h-screen bg-background text-white selection:bg-red-500/30 relative">
      {/* Custom Cursor */}
      <CustomCursor />
      
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-red-600 via-red-500 to-red-600 origin-left z-[100]"
        style={{ scaleX: smoothProgress }}
      />
      
      {/* Noise texture overlay */}
      <div className="noise-overlay" />
      
      <Navigation />

      {/* Hero Section */}
      <section 
        ref={heroRef} 
        className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20 overflow-hidden"
      >
        {/* Aurora background */}
        <div className="absolute inset-0 aurora-bg opacity-50" />
        
        {/* Animated gradient orbs */}
        <GradientOrb className="top-1/4 left-1/4 w-[500px] h-[500px] bg-red-600/20" delay={0} />
        <GradientOrb className="bottom-1/4 right-1/4 w-[400px] h-[400px] bg-red-900/20 animation-delay-2000" delay={0.5} />
        <GradientOrb className="top-1/2 right-1/3 w-[300px] h-[300px] bg-gray-600/10 animation-delay-4000" delay={1} />
        
        {/* Floating particles */}
        <FloatingParticles />

        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />

        <motion.div
          style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
          className="text-center z-10 max-w-5xl mx-auto relative"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm hover:bg-white/10 transition-colors cursor-default"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-sm font-medium text-gray-300">
              Now Available for IIT Students
            </span>
            <Sparkles className="w-4 h-4 text-yellow-500" />
          </motion.div>

          {/* Main headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-[8rem] font-black tracking-tighter mb-8 leading-[0.85]"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-gray-500 block">
              Your University,
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-red-500 to-red-600 block text-glow-red">
              Connected
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl lg:text-2xl text-gray-400 max-w-2xl mx-auto mb-12 font-medium leading-relaxed px-4"
          >
            Everything you need for university life in one place. Connect with peers, 
            organize study sessions, share resources, and stay updated with campus events.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(220, 38, 38, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full font-bold text-lg overflow-hidden w-full sm:w-auto shadow-glow shimmer"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Watch Demo
                <Zap className="w-5 h-5" />
              </span>
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/5 text-white border border-white/10 rounded-full font-bold text-lg transition-all w-full sm:w-auto backdrop-blur-sm hover:border-white/20"
            >
              Contact Us
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex items-center justify-center gap-8 md:gap-16 mt-16 pt-8 border-t border-white/10"
          >
            {[
              { value: '2500', suffix: '+', label: 'Students' },
              { value: '50', suffix: '+', label: 'Communities' },
              { value: '1000', suffix: '+', label: 'Resources' },
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <p className="text-2xl md:text-4xl font-bold text-white group-hover:text-red-400 transition-colors">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-gray-500 text-sm">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-gray-500 uppercase tracking-widest">Scroll</span>
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent" 
          />
        </motion.div>
      </section>

      {/* Logo Banner Section */}
      <LogoBanner />

      {/* Features Bento Grid Section */}
      <section id="features" className="py-20 md:py-32 px-4 md:px-8 max-w-7xl mx-auto">
        <RevealSection className="mb-16 md:mb-20">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-[1px] w-12 bg-gradient-to-r from-red-600 to-transparent" />
            <span className="text-xs uppercase tracking-[0.3em] text-red-500 font-medium">Features</span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
            Everything you need <br />
            <span className="text-gray-500">to ace campus life.</span>
          </h2>
        </RevealSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
          {/* Card 1: Main Feature - Community */}
          <BentoCard colSpan={2} rowSpan={2} className="min-h-[400px]">
            <div className="flex flex-col justify-between h-full">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-500/20 to-red-900/20 flex items-center justify-center mb-6 border border-red-500/20 shadow-inner-glow">
                  <Users className="w-7 h-7 text-red-400" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Communities & Groups
                </h3>
                <p className="text-gray-400 text-base md:text-lg max-w-md">
                  Join tutorial groups, clubs, and departments. Connect with peers 
                  who share your interests in a verified, safe environment.
                </p>
              </div>
              <div className="mt-8 relative h-48 w-full overflow-hidden rounded-xl border border-white/5 bg-gradient-to-br from-black/40 to-black/20">
                {[
                  { color: 'bg-red-600', width: 'w-24' },
                  { color: 'bg-gray-600', width: 'w-32' },
                  { color: 'bg-red-800', width: 'w-20' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 * i }}
                    className={`absolute left-4 right-4 h-12 bg-white/5 rounded-lg flex items-center px-4 gap-3`}
                    style={{ top: `${16 + i * 64}px` }}
                  >
                    <div className={`w-6 h-6 rounded-full ${item.color}`} />
                    <div className={`h-2 ${item.width} bg-gray-700 rounded`} />
                  </motion.div>
                ))}
              </div>
            </div>
          </BentoCard>

          {/* Card 2: Events */}
          <BentoCard delay={0.1} className="bg-gradient-to-b from-red-900/10 to-transparent">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500/20 to-red-900/20 flex items-center justify-center mb-4 border border-red-500/20">
              <Calendar className="w-5 h-5 text-red-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">Events & Updates</h3>
            <p className="text-gray-400 text-sm mb-6">
              Never miss lectures, workshops, or campus events.
            </p>
            <div className="space-y-3">
              {['Tech Summit', 'Career Fair'].map((event, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 p-2 rounded-lg bg-white/5 cursor-pointer hover:bg-white/10 transition-colors"
                >
                  <div className="w-10 h-10 rounded bg-gradient-to-br from-white/10 to-white/5 flex flex-col items-center justify-center text-xs font-bold">
                    <span className="text-red-400">JAN</span>
                    <span>{15 + i}</span>
                  </div>
                  <div>
                    <div className="text-sm font-medium">{event}</div>
                    <div className="text-xs text-gray-500">Main Auditorium</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </BentoCard>

          {/* Card 3: Kuppi Sessions */}
          <BentoCard delay={0.2}>
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-500/20 to-gray-900/20 flex items-center justify-center mb-4 border border-gray-500/20">
              <BookOpen className="w-5 h-5 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">Kuppi Sessions</h3>
            <p className="text-gray-400 text-sm">
              Organize study sessions and earn credits for helping others.
            </p>
            <div className="mt-4 flex -space-x-2">
              {[1, 2, 3, 4].map(i => (
                <motion.div 
                  key={i} 
                  whileHover={{ scale: 1.1, zIndex: 10 }}
                  className="w-8 h-8 rounded-full border-2 border-background bg-gradient-to-br from-gray-600 to-gray-700 cursor-pointer" 
                />
              ))}
              <div className="w-8 h-8 rounded-full border-2 border-background bg-gradient-to-br from-red-700 to-red-900 flex items-center justify-center text-[10px] font-bold">
                +50
              </div>
            </div>
          </BentoCard>

          {/* Card 4: Resources */}
          <BentoCard delay={0.3}>
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500/20 to-red-900/20 flex items-center justify-center mb-4 border border-red-500/20">
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
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-500/20 to-gray-900/20 flex items-center justify-center mb-4 border border-gray-500/20">
                  <Search className="w-5 h-5 text-gray-400" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-2">Universal Search</h3>
                <p className="text-gray-400">
                  Find notes, people, events, or past papers in milliseconds.
                </p>
              </div>
              <div className="flex-1 w-full">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-black/60 to-black/40 rounded-xl p-4 border border-white/10 flex items-center gap-3 cursor-text"
                >
                  <Search className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-500 text-sm">
                    Search for "SDGP notes"...
                  </span>
                  <div className="ml-auto flex gap-1">
                    <span className="px-1.5 py-0.5 rounded bg-white/10 text-[10px] text-gray-400">⌘</span>
                    <span className="px-1.5 py-0.5 rounded bg-white/10 text-[10px] text-gray-400">K</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </BentoCard>

          {/* Card 6: Messaging */}
          <BentoCard delay={0.5}>
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-green-900/20 flex items-center justify-center mb-4 border border-green-500/20">
              <MessageCircle className="w-5 h-5 text-green-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">In-App Messaging</h3>
            <p className="text-gray-400 text-sm">
              Chat with friends, lecturers, and group members securely.
            </p>
          </BentoCard>

          {/* Card 7: Notifications */}
          <BentoCard delay={0.6}>
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500/20 to-yellow-900/20 flex items-center justify-center mb-4 border border-yellow-500/20">
              <Bell className="w-5 h-5 text-yellow-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">Smart Notifications</h3>
            <p className="text-gray-400 text-sm">
              Get reminded 15 minutes before lectures and deadlines.
            </p>
          </BentoCard>

          {/* Card 8: Verified Profiles */}
          <BentoCard delay={0.7}>
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-900/20 flex items-center justify-center mb-4 border border-blue-500/20">
              <Shield className="w-5 h-5 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">Verified Profiles</h3>
            <p className="text-gray-400 text-sm">
              Only IIT students and staff with verified email addresses.
            </p>
          </BentoCard>
        </div>
      </section>

      {/* Problems Section */}
      <section id="problems" className="py-20 md:py-32 px-4 md:px-8 relative overflow-hidden">
        {/* Background accent */}
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[150px] -translate-x-1/2" />
        
        <div className="max-w-7xl mx-auto">
          <RevealSection className="mb-16 md:mb-20 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-red-600" />
              <span className="text-xs uppercase tracking-[0.3em] text-red-500 font-medium">The Problem</span>
              <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-red-600" />
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
              University life is <span className="text-red-500">fragmented</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              Students juggle multiple platforms daily. WhatsApp groups, Instagram, LinkedIn, 
              email—important information gets lost in the chaos.
            </p>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: MessagesSquare,
                title: 'Too Many Platforms',
                description: 'Clubs and unions create countless WhatsApp groups daily. Important updates get buried in the noise.',
                color: 'from-red-500/20 to-red-900/20',
                iconColor: 'text-red-400',
                borderColor: 'border-red-500/20'
              },
              {
                icon: Users,
                title: 'SDGP Group Formation',
                description: 'Finding reliable teammates for group projects is stressful and inefficient without a proper system.',
                color: 'from-orange-500/20 to-orange-900/20',
                iconColor: 'text-orange-400',
                borderColor: 'border-orange-500/20'
              },
              {
                icon: GraduationCap,
                title: 'Kuppi Sessions Chaos',
                description: 'Study sessions are hard to organize and discover. Students miss out on valuable peer learning.',
                color: 'from-yellow-500/20 to-yellow-900/20',
                iconColor: 'text-yellow-400',
                borderColor: 'border-yellow-500/20'
              },
              {
                icon: Building2,
                title: 'Alumni Disconnect',
                description: 'No platform connects current students with IIT alumni working at top tech companies.',
                color: 'from-blue-500/20 to-blue-900/20',
                iconColor: 'text-blue-400',
                borderColor: 'border-blue-500/20'
              },
              {
                icon: FileText,
                title: 'Scattered Resources',
                description: 'Notes, past papers, and academic materials are spread across drives, groups, and personal folders.',
                color: 'from-purple-500/20 to-purple-900/20',
                iconColor: 'text-purple-400',
                borderColor: 'border-purple-500/20'
              },
              {
                icon: AlertTriangle,
                title: 'No Central Hub',
                description: 'Events, announcements, and deadlines come from multiple sources—missing one could cost you.',
                color: 'from-pink-500/20 to-pink-900/20',
                iconColor: 'text-pink-400',
                borderColor: 'border-pink-500/20'
              },
            ].map((problem, i) => (
              <RevealSection key={i} delay={0.1 * i}>
                <motion.div 
                  whileHover={{ y: -5, borderColor: 'rgba(255,255,255,0.15)' }}
                  className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm h-full transition-all"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${problem.color} flex items-center justify-center mb-4 ${problem.borderColor} border`}>
                    <problem.icon className={`w-5 h-5 ${problem.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{problem.title}</h3>
                  <p className="text-gray-400">{problem.description}</p>
                </motion.div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 md:py-32 px-4 md:px-8 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-900/5 to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative">
          <RevealSection className="mb-16 md:mb-20 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-red-600" />
              <span className="text-xs uppercase tracking-[0.3em] text-red-500 font-medium">How It Works</span>
              <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-red-600" />
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
              Simple. Secure. <span className="text-red-500">Seamless.</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              From sign-up to connecting with the entire IIT community—it only takes minutes.
            </p>
          </RevealSection>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-20 left-[12.5%] right-[12.5%] h-[2px] bg-gradient-to-r from-red-600/50 via-red-500/50 to-red-600/50" />
            
            {[
              {
                step: '01',
                icon: Mail,
                title: 'Sign up with IIT Email',
                description: 'Use your official @iit.ac.lk email to create a verified account. Only IIT students and staff allowed.'
              },
              {
                step: '02',
                icon: UserCheck,
                title: 'Auto Profile Creation',
                description: 'Your profile is automatically populated with your department, batch, and tutorial group info.'
              },
              {
                step: '03',
                icon: Users,
                title: 'Join Your Communities',
                description: 'Automatically added to your tutorial group. Join clubs, departments, and interest groups.'
              },
              {
                step: '04',
                icon: Rocket,
                title: 'Start Connecting',
                description: 'Chat, share resources, organize Kuppi sessions, and never miss an important update again.'
              },
            ].map((item, i) => (
              <RevealSection key={i} delay={0.15 * i}>
                <div className="text-center relative">
                  {/* Step number bubble */}
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center border-4 border-background relative z-10 shadow-lg shadow-red-600/30"
                  >
                    <item.icon className="w-7 h-7 text-white" />
                  </motion.div>
                  <span className="text-xs text-red-500 font-bold tracking-widest mb-2 block">{item.step}</span>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              </RevealSection>
            ))}
          </div>

          {/* Key Platform Features */}
          <RevealSection className="mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: Lock, label: 'Verified Accounts Only', desc: 'No anonymous profiles' },
                { icon: Eye, label: 'Privacy Controls', desc: 'You decide what to share' },
                { icon: Smartphone, label: 'Mobile First', desc: 'iOS & Android apps' },
                { icon: Globe, label: 'Expandable', desc: 'Other universities soon' },
              ].map((feature, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -3, backgroundColor: 'rgba(255,255,255,0.05)' }}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-red-600/10 flex items-center justify-center shrink-0">
                    <feature.icon className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">{feature.label}</h4>
                    <p className="text-xs text-gray-500">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 px-4 md:px-8 relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-red-600/5 rounded-full blur-[150px] translate-x-1/2" />
        
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left content */}
            <RevealSection>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-[1px] w-12 bg-gradient-to-r from-red-600 to-transparent" />
                <span className="text-xs uppercase tracking-[0.3em] text-red-500 font-medium">About</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Built by IIT students, <br />
                <span className="text-red-500">for IIT students.</span>
              </h2>
              <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                IIT Connect was born from a simple observation: university life shouldn't be this scattered. 
                We're a team of passionate IIT students who wanted to create the platform we wished existed 
                when we started our journey.
              </p>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Our mission is to bring everything—communities, resources, events, and connections—into 
                one beautiful, professional platform that maintains the professionalism expected at IIT 
                while allowing students to truly connect.
              </p>
              
              {/* Values */}
              <div className="space-y-4">
                {[
                  { icon: Shield, text: 'Security first—verified IIT emails only, no anonymous posts' },
                  { icon: Heart, text: 'Community-driven—shaped by student feedback' },
                  { icon: Rocket, text: 'Future-ready—expandable to other universities' },
                ].map((value, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-8 h-8 rounded-lg bg-red-600/10 flex items-center justify-center shrink-0">
                      <value.icon className="w-4 h-4 text-red-400" />
                    </div>
                    <p className="text-gray-300">{value.text}</p>
                  </motion.div>
                ))}
              </div>
            </RevealSection>

            {/* Right content - Stats & Contact */}
            <RevealSection delay={0.2}>
              <div className="space-y-6">
                {/* Mission Card */}
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="p-8 rounded-3xl bg-gradient-to-br from-red-600/10 to-red-900/5 border border-red-500/10"
                >
                  <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                  <p className="text-gray-400 leading-relaxed">
                    To become the central hub for university communities across Sri Lanka—starting with IIT, 
                    then expanding to connect students nationwide. Every student deserves a platform that 
                    respects their privacy while fostering genuine connections.
                  </p>
                </motion.div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: '2026', label: 'Founded' },
                    { value: 'IIT', label: 'First Campus' },
                    { value: 'CS-34', label: 'Built by' },
                    { value: '∞', label: 'Possibilities' },
                  ].map((stat, i) => (
                    <motion.div 
                      key={i}
                      whileHover={{ y: -3 }}
                      className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 text-center"
                    >
                      <p className="text-2xl md:text-3xl font-bold text-red-400">{stat.value}</p>
                      <p className="text-sm text-gray-500">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Contact Info */}
                <motion.div 
                  whileHover={{ borderColor: 'rgba(255,255,255,0.15)' }}
                  className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 transition-all"
                >
                  <h4 className="font-bold mb-4">Get in Touch</h4>
                  <div className="space-y-3 text-sm text-gray-400">
                    <p className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-red-500" />
                      support@iitconnect.lk
                    </p>
                    <p>
                      Informatics Institute of Technology<br />
                      57, Ramakrishna Road, Colombo 06
                    </p>
                  </div>
                </motion.div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 px-4 text-center relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-t from-red-900/10 to-transparent pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[150px] animate-glow-pulse" />

        <RevealSection className="relative z-10 max-w-3xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight"
          >
            Ready to{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-red-500 to-red-600">
              connect?
            </span>
          </motion.h2>
          <p className="text-lg md:text-xl text-gray-400 mb-10 px-4">
            Join thousands of IIT students already using IIT Connect to stay organized, connected, and successful.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: '0 0 50px rgba(220, 38, 38, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full font-bold text-lg transition-all shadow-glow"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </motion.button>

          {/* Benefits */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-2xl mx-auto">
            {['Free for students', 'Verified & secure', '2,500+ members', 'Mobile App'].map((benefit, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="flex items-center justify-center gap-2 text-sm text-gray-400"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                {benefit}
              </motion.div>
            ))}
          </div>
        </RevealSection>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 px-4 bg-black/50 backdrop-blur-sm relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="/imgs/Gemini_Generated_Image_ujxpequjxpequjxp.png" 
                  alt="IIT Connect Logo" 
                  className="w-12 h-12 rounded-xl object-cover border border-white/10" 
                />
                <span className="text-white font-bold text-xl">IIT Connect</span>
              </div>
              <p className="text-gray-500 text-sm mb-6">
                Your university, connected. Everything you need for university life in one place.
              </p>
              <div className="flex gap-3">
                {[
                  { Icon: Facebook, hover: 'hover:bg-blue-600' },
                  { Icon: Twitter, hover: 'hover:bg-sky-500' },
                  { Icon: Instagram, hover: 'hover:bg-pink-600' },
                  { Icon: Linkedin, hover: 'hover:bg-blue-700' },
                ].map(({ Icon, hover }, i) => (
                  <motion.a 
                    key={i}
                    href="#" 
                    whileHover={{ scale: 1.1, y: -2 }}
                    className={`w-10 h-10 bg-white/5 rounded-full flex items-center justify-center transition-colors border border-white/10 ${hover}`}
                  >
                    <Icon className="w-4 h-4 text-gray-400" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Product */}
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-3 text-sm text-gray-500">
                {[
                  { name: 'Features', href: '#features' },
                  { name: 'Problems', href: '#problems' },
                  { name: 'How It Works', href: '#how-it-works' },
                  { name: 'About', href: '#about' },
                ].map((item, i) => (
                  <li key={i}>
                    <a href={item.href} className="hover:text-white transition-colors hover:pl-1 inline-block">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-3 text-sm text-gray-500">
                {['Help Center', 'Contact Us', 'Privacy Policy', 'Terms of Service'].map((item, i) => (
                  <li key={i}>
                    <a href="#" className="hover:text-white transition-colors hover:pl-1 inline-block">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-4">Get in Touch</h4>
              <ul className="space-y-3 text-sm text-gray-500">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-red-500" />
                  <span>support@iitconnect.lk</span>
                </li>
                <li>
                  <p>Informatics Institute of Technology</p>
                  <p>57, Ramakrishna Road, Colombo 06</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © 2026 IIT Connect. All rights reserved.
            </p>
            <p className="text-sm text-gray-500 flex items-center gap-1">
              Made with <span className="text-red-500">❤️</span> by CS-34
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
