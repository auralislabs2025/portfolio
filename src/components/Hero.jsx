import { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ParticleNetwork from './ParticleNetwork';

const HeroModel = lazy(() => import('./HeroModel'));

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: 'easeOut' },
  }),
};

const headlineWords = 'Building Smarter Systems for Tomorrow.'.split(' ');

const wordContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const wordVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Animated particle network background */}
      <ParticleNetwork className="absolute inset-0 z-0" />

      {/* Floating blurred blue orb — the hero glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full z-[1] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0,209,255,0.12) 0%, rgba(0,209,255,0.04) 40%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      {/* Smaller accent blobs */}
      <div
        className="glow-blob w-[600px] h-[600px] -top-40 -left-40 z-[1]"
        style={{ background: 'radial-gradient(circle, rgba(0,209,255,0.08) 0%, transparent 70%)' }}
      />
      <div
        className="glow-blob w-[500px] h-[500px] -bottom-32 -right-32 z-[1]"
        style={{ background: 'radial-gradient(circle, rgba(0,209,255,0.06) 0%, transparent 70%)' }}
      />
      <div
        className="glow-blob w-[300px] h-[300px] top-1/3 right-1/4 z-[1]"
        style={{ background: 'radial-gradient(circle, rgba(0,209,255,0.04) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-0">
        {/* Left — text content */}
        <div className="text-center lg:text-left">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0}
            className="inline-block mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-zinc-400 tracking-wider uppercase"
          >
            ERP, Web Development & Smart Solutions
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={wordContainer}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight gradient-text mb-6 flex flex-wrap justify-center lg:justify-start gap-x-[0.3em]"
          >
            {headlineWords.map((word, i) => (
              <motion.span
                key={i}
                variants={wordVariant}
                className="inline-block"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={2}
            className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
          >
            We build robust ERP platforms, high-performance web applications,
            and thoughtful UX — enhanced with smart AI where it matters most.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={3}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="glow-btn"
            >
              Get Started
              <span className="icon-float inline-flex"><ArrowRight size={18} /></span>
            </a>
            <a
              href="#services"
              onClick={(e) => { e.preventDefault(); document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="px-6 py-3.5 text-sm font-medium text-zinc-300 border border-white/10 rounded-xl hover:bg-white/5 transition-all duration-200"
            >
              Explore Services
            </a>
          </motion.div>
        </div>

        {/* Right — 3D model */}
        <div className="hidden lg:block">
          <Suspense fallback={null}>
            <HeroModel className="w-full h-[520px]" />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
