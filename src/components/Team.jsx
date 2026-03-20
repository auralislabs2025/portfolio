import { motion } from 'framer-motion';
import { Linkedin, Github } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.18 } },
};

const team = [
  {
    name: 'Akshay',
    role: 'Full Stack Architect',
    avatar: '/team/akshay.png',
    skills: ['React', 'FastAPI', 'Python'],
    linkedin: 'https://www.linkedin.com/in/akshay-krishnan-086927316/',
    github: 'https://github.com/akshayharshan',
  },
  {
    name: 'Ashin',
    role: 'Lead AI Engineer',
    avatar: '/team/ashin.png',
    skills: ['Python', 'Machine Learning', 'NLP'],
    linkedin: '#',
    github: 'https://github.com/ashinkrishnan',
  },
  {
    name: 'Anand',
    role: 'Systems & UX Architect',
    avatar: '/team/anand.png',
    skills: ['Rust', 'Embedded Systems', 'UX Design'],
    linkedin: '#',
    github: 'https://github.com/Techseeker-404',
  },
];

export default function Team() {
  return (
    <section id="team" className="relative pt-14 md:pt-24 pb-10 md:pb-16 px-6">
      <div
        className="glow-blob w-[600px] h-[600px] -top-32 left-1/2 -translate-x-1/2"
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
            The People Behind the Code
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Meet the Architects
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10"
        >
          {team.map((member) => (
              <motion.div
                key={member.name}
                variants={fadeUp}
                className="glass p-10 md:p-12 flex flex-col items-center text-center group relative overflow-hidden"
              >
                {/* Shimmer border */}
                <div className="shimmer-border" />

                {/* Profile image */}
                <div className="relative z-10 mb-8">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="relative z-10 w-28 h-28 rounded-2xl object-cover border border-white/10 opacity-80 group-hover:opacity-100 group-hover:shadow-[0_0_15px_rgba(0,209,255,0.3)] transition-all duration-300 ease-in-out"
                    loading="lazy"
                  />
                  <div className="absolute -inset-3 rounded-3xl bg-accent/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />
                </div>

                {/* Name & Role */}
                <h3 className="relative z-10 text-2xl font-bold text-white mb-1.5">{member.name}</h3>
                <p className="relative z-10 text-accent text-sm font-semibold tracking-wide mb-6">{member.role}</p>

                {/* Top 3 Skills */}
                <div className="relative z-10 flex flex-wrap justify-center gap-2 mb-8">
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3.5 py-1.5 text-xs font-medium text-zinc-400 bg-white/[0.04] border border-white/[0.08] rounded-lg group-hover:border-accent/20 group-hover:text-zinc-300 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Social icons: LinkedIn only for Akshay; GitHub for all */}
                <div className="relative z-10 flex gap-3 justify-center">
                  {member.linkedin && member.linkedin !== '#' && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-float w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-500 hover:text-accent hover:border-accent/40 hover:bg-accent/10 hover:shadow-[0_0_16px_rgba(0,209,255,0.25)] transition-all duration-300"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <Linkedin size={16} />
                    </a>
                  )}
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-float w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-500 hover:text-accent hover:border-accent/40 hover:bg-accent/10 hover:shadow-[0_0_16px_rgba(0,209,255,0.25)] transition-all duration-300"
                    aria-label={`${member.name} GitHub`}
                  >
                    <Github size={16} />
                  </a>
                </div>
              </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
