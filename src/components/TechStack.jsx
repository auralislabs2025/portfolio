import { motion } from 'framer-motion';

const techs = [
  { name: 'Python', icon: '/icons/python.svg' },
  { name: 'FastAPI', icon: '/icons/fastapi.svg' },
  { name: 'Django', icon: '/icons/django.svg', dark: true },
  { name: 'Rust', icon: '/icons/rust.svg', dark: true },
  { name: 'JavaScript', icon: '/icons/javascript.svg' },
  { name: 'React', icon: '/icons/react.svg' },
  { name: 'PHP', icon: '/icons/php.svg' },
  { name: 'Laravel', icon: '/icons/laravel.svg' },
  { name: 'WordPress', icon: '/icons/wordpress.svg', dark: true },
  { name: 'TensorFlow', icon: '/icons/tensorflow.svg' },
  { name: 'PyTorch', icon: '/icons/pytorch.svg' },
];

const doubled = [...techs, ...techs];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function TechStack() {
  return (
    <section className="relative pt-12 md:pt-20 pb-8 md:pb-16">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="text-center mb-14 px-6"
      >
        <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">
          Our Tech Stack
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          Technologies We Work With
        </h2>
      </motion.div>

      {/* Infinite scrolling strip */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 z-10 bg-gradient-to-r from-[#050505] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 z-10 bg-gradient-to-l from-[#050505] to-transparent pointer-events-none" />
        <div className="flex animate-scroll">
          {doubled.map((tech, i) => (
            <div
              key={`${tech.name}-${i}`}
              className="flex-shrink-0 mx-6 sm:mx-10 group"
            >
              <div className="flex flex-col items-center gap-3 px-6 py-5 rounded-2xl border border-transparent hover:border-accent/20 hover:bg-accent/[0.03] transition-all duration-300">
                <div className="relative">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className={`icon-float w-12 h-12 sm:w-14 sm:h-14 opacity-50 group-hover:opacity-100 transition-all duration-300 grayscale group-hover:grayscale-0 group-hover:drop-shadow-[0_0_12px_rgba(0,209,255,0.5)] ${tech.dark ? 'invert brightness-200' : ''}`}
                    style={{ animationDelay: `${(i % techs.length) * 90}ms` }}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 rounded-full bg-accent/0 group-hover:bg-accent/10 blur-xl transition-all duration-300 pointer-events-none" />
                </div>
                <span className="text-xs sm:text-sm text-zinc-500 group-hover:text-accent/80 font-medium transition-colors duration-300">
                  {tech.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
