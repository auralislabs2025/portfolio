import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mail, Phone, MapPin, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setErrorMsg(data.detail || 'Something went wrong. Please try again.');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch {
      setStatus('error');
      setErrorMsg('Network error. Please check your connection.');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="relative pt-8 md:pt-16 pb-20 md:pb-32 px-6">
      <div
        className="glow-blob w-[500px] h-[500px] top-20 -left-40"
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
            Get In Touch
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Contact Us
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16"
        >
          {/* Form */}
          <motion.form
            variants={fadeUp}
            onSubmit={handleSubmit}
            className="glass p-8 md:p-10 space-y-6"
          >
            <div>
              <label className="block text-sm text-zinc-400 mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-zinc-600 outline-none focus:border-accent/50 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm text-zinc-400 mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="john@company.com"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-zinc-600 outline-none focus:border-accent/50 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm text-zinc-400 mb-2">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Tell us about your project..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-zinc-600 outline-none focus:border-accent/50 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="glow-btn w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? (
                <>
                  Sending...
                  <Loader2 size={16} className="animate-spin" />
                </>
              ) : (
                <>
                  Send Message
                  <span className="icon-float inline-flex"><Send size={16} /></span>
                </>
              )}
            </button>

            <AnimatePresence>
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="flex items-center gap-2 text-emerald-400 text-sm"
                >
                  <span className="icon-float inline-flex"><CheckCircle size={16} /></span>
                  Message sent successfully! We&apos;ll get back to you soon.
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="flex items-center gap-2 text-red-400 text-sm"
                >
                  <span className="icon-float inline-flex"><AlertCircle size={16} /></span>
                  {errorMsg}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>

          {/* Info side */}
          <motion.div variants={fadeUp} className="flex flex-col justify-center">
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-extrabold gradient-text mb-6 leading-tight">
              Let&apos;s Talk.
            </h3>
            <p className="text-zinc-400 text-lg leading-relaxed mb-10 max-w-md">
              Have an ERP challenge or a web project in mind?
              We&apos;d love to hear about your vision and craft the
              right solution for your business.
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="icon-float w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-zinc-500">Email</p>
                  <p className="text-white font-medium">team@aulab.in</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="icon-float w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-zinc-500">Phone</p>
                  <p className="text-white font-medium">+91 999 555 0958</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="icon-float w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-zinc-500">Location</p>
                  <p className="text-white font-medium">Trivandrum, India</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
