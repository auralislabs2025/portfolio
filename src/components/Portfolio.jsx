import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

const projects = [
  {
    title: 'Vertex ERP Suite',
    category: 'Enterprise ERP',
    desc: 'Unified operations platform integrating finance, HR, and supply chain for a 5,000-employee manufacturer.',
    gradient: 'from-emerald-500/20 via-teal-600/20 to-cyan-600/20',
  },
  {
    title: 'Auralis Commerce',
    category: 'Web Development',
    desc: 'Full-stack e-commerce platform with real-time inventory sync, payment gateway integration, and a conversion-optimized storefront.',
    gradient: 'from-cyan-500/20 via-blue-600/20 to-purple-600/20',
  },
  {
    title: 'Pulse Health Dashboard',
    category: 'UX / Web App',
    desc: 'Patient monitoring interface with real-time vitals tracking and smart alerting for healthcare providers.',
    gradient: 'from-rose-500/20 via-pink-600/20 to-purple-600/20',
  },
  {
    title: 'QuantumLedger Finance',
    category: 'ERP / Fintech',
    desc: 'Financial reconciliation and accounting system that reduced audit turnaround by 70% for a mid-size firm.',
    gradient: 'from-sky-500/20 via-cyan-600/20 to-teal-600/20',
  },
  {
    title: 'Aether Cloud Portal',
    category: 'Web Platform',
    desc: 'Enterprise cloud management dashboard with infrastructure monitoring, user analytics, and automated scaling.',
    gradient: 'from-indigo-500/20 via-violet-600/20 to-purple-600/20',
  },
  {
    title: 'SmartStock Predictor',
    category: 'AI-Enhanced ERP',
    desc: 'Inventory forecasting module powered by ML, plugged into an existing ERP to cut overstock costs by 35%.',
    gradient: 'from-amber-500/20 via-orange-600/20 to-red-600/20',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative pt-14 md:pt-24 pb-10 md:pb-16 px-6">
      <div
        className="glow-blob w-[600px] h-[600px] -bottom-40 right-0"
        style={{ background: 'radial-gradient(circle, rgba(0,209,255,0.04) 0%, transparent 70%)' }}
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
            Selected Work
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Our Portfolio
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {projects.map((p) => (
            <motion.div
              key={p.title}
              variants={fadeUp}
              className="group glass overflow-hidden hover:-translate-y-2 transition-all duration-300 hover:border-accent/20"
            >
              {/* Gradient placeholder image */}
              <div
                className={`h-48 bg-gradient-to-br ${p.gradient} relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                  <span className="icon-float inline-flex"><ExternalLink className="text-white" size={24} /></span>
                </div>
              </div>

              <div className="p-6">
                <span className="text-xs font-medium text-accent/80 tracking-wider uppercase">
                  {p.category}
                </span>
                <h3 className="text-lg font-bold text-white mt-1 mb-2">
                  {p.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
