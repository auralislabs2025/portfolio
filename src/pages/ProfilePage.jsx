import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const cardStagger = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.06, duration: 0.4, ease: 'easeOut' },
  }),
};

const profile = {
  name: 'Akshay',
  role: 'Full Stack Architect',
  avatar: '/team/akshay.png',
  bio: 'I design and build scalable web applications and ERP systems that unify operations and delight users. At Auralis Labs I lead full-stack delivery—from APIs and data pipelines to polished front-ends—with a focus on clean architecture and maintainable code.',
  skills: ['React', 'FastAPI', 'Python', 'TypeScript', 'PostgreSQL'],
  projects: [
    { title: 'Vertex ERP Suite', desc: 'Unified operations platform for enterprise.', href: 'https://aulab.in/#portfolio' },
    { title: 'Auralis Commerce', desc: 'Full-stack e-commerce with real-time sync.', href: 'https://aulab.in/#portfolio' },
  ],
};

export default function ProfilePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050505] px-4 py-8">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="max-w-2xl w-full p-6 sm:p-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-md"
      >
        {/* Profile image */}
        <motion.div variants={cardStagger} custom={0} className="flex justify-center mb-6">
          <img
            src={profile.avatar}
            alt={profile.name}
            className="w-28 h-28 sm:w-32 sm:h-32 object-cover rounded-full border-2 border-[#00D1FF]"
          />
        </motion.div>

        {/* Name & role */}
        <motion.h1 variants={cardStagger} custom={1} className="text-center text-2xl sm:text-3xl font-bold text-white">
          {profile.name}
        </motion.h1>
        <motion.p variants={cardStagger} custom={2} className="text-center text-[#00D1FF] font-medium mt-1 sm:mt-2">
          {profile.role}
        </motion.p>

        {/* Bio */}
        <motion.p
          variants={cardStagger}
          custom={3}
          className="text-zinc-400 text-sm sm:text-base text-center mt-4 sm:mt-5 leading-relaxed max-w-lg mx-auto"
        >
          {profile.bio}
        </motion.p>

        {/* Tech stack */}
        <motion.div variants={cardStagger} custom={4} className="mt-6 sm:mt-8">
          <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider text-center mb-3">Tech Stack</p>
          <div className="flex flex-wrap justify-center gap-2">
            {profile.skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 text-xs sm:text-sm rounded-full bg-white/5 border border-white/10 text-zinc-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Projects */}
        <motion.div variants={cardStagger} custom={5} className="mt-6 sm:mt-8">
          <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider text-center mb-3">Projects</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {profile.projects.map((p) => (
              <a
                key={p.title}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#00D1FF]/30 transition-colors group"
              >
                <ExternalLink className="w-4 h-4 text-[#00D1FF] shrink-0 mt-0.5 opacity-80 group-hover:opacity-100" />
                <div>
                  <span className="text-sm font-medium text-white block">{p.title}</span>
                  <span className="text-xs text-zinc-400">{p.desc}</span>
                </div>
              </a>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div variants={cardStagger} custom={6} className="mt-8 sm:mt-10 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm text-zinc-400 hover:text-[#00D1FF] transition-colors"
          >
            View my agency: Auralis Labs
            <span className="text-[#00D1FF]">→</span>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
