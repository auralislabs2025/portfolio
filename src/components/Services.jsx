import { motion } from 'framer-motion';
import { Database, Layout, Brain } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

const services = [
  {
    icon: Database,
    title: 'ERP Systems',
    desc: 'End-to-end enterprise resource planning platforms that unify operations, finance, HR, and supply chain into one powerful system — built to scale with your business.',
    span: 'md:col-span-2 md:row-span-2',
    iconClass: 'icon-pulse',
    large: true,
    tags: ['Finance & Accounting', 'Inventory', 'HR & Payroll', 'Supply Chain'],
  },
  {
    icon: Layout,
    title: 'Web Development & UX',
    desc: 'High-performance web applications with pixel-perfect interfaces, built on modern frameworks with a design-first approach.',
    span: '',
    iconClass: '',
    large: false,
  },
  {
    icon: Brain,
    title: 'AI Integration',
    desc: 'Smart automation, predictive insights, and intelligent features woven into your ERP and web products where they add real value.',
    span: '',
    iconClass: '',
    large: false,
  },
];

export default function Services() {
  return (
    <section id="services" className="relative pt-16 md:pt-32 pb-10 md:pb-16 px-6">
      <div
        className="glow-blob w-[500px] h-[500px] top-0 left-1/2 -translate-x-1/2"
        style={{ background: 'radial-gradient(circle, rgba(0,209,255,0.05) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">
            What We Build
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Our Core Services
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={fadeUp}
              className={`glass p-8 md:p-10 group hover:border-accent/30 transition-all duration-300 ${s.span}`}
            >
              <div
                className={`icon-float inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent/10 text-accent mb-6 ${s.iconClass}`}
              >
                <s.icon size={s.large ? 30 : 26} />
              </div>
              <h3 className={`font-bold text-white mb-3 ${s.large ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
                {s.title}
              </h3>
              <p className={`text-zinc-400 leading-relaxed ${s.large ? 'text-base md:text-lg max-w-lg' : 'text-sm'}`}>
                {s.desc}
              </p>
              {s.large && s.tags && (
                <div className="mt-8 flex flex-wrap gap-2">
                  {s.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full border border-accent/20 text-accent/80 bg-accent/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
