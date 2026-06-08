import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = 'service_e65tuiy';
const EMAILJS_TEMPLATE_ID = 'template_pr0pi6q';
const EMAILJS_PUBLIC_KEY = '73wS1rWHW0X2mwdK5';

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [showPopup, setShowPopup] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize EmailJS once on mount
  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      const templateParams = {
        to_email: 'sharjil0506@gmail.com',
        from_name: form.name,
        from_email: form.email,
        message: form.message,
      };
      
      console.log('Sending EmailJS with params:', templateParams);
      console.log('Service ID:', EMAILJS_SERVICE_ID);
      console.log('Template ID:', EMAILJS_TEMPLATE_ID);

      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );

      console.log('EmailJS response:', response);
      setSuccess(true);
      setShowPopup(true);
      setForm({ name: '', email: '', message: '' });
    } catch (err: unknown) {
      console.error('EmailJS error:', err);
      // EmailJS often returns an object with `status` and `text` on HTTP errors.
      if (err && typeof err === 'object' && 'status' in err) {
        const e = err as any;
        const msg = `EmailJS error ${e.status}: ${e.text || e.message || 'Unknown error'}`;
        setError(msg + ' — Check your template ID at https://dashboard.emailjs.com/admin/templates');
      } else {
        setError(err instanceof Error ? err.message : 'Failed to send message via EmailJS.');
      }
      setSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Auto-hide popup after 5 seconds
  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => {
        setShowPopup(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  return (
    <section id="contact" className="py-24 px-6 max-w-5xl mx-auto scroll-mt-24 relative">
      {/* Custom Popup Message */}
      <div 
        className={`fixed top-24 right-6 z-[200] transition-all duration-500 transform ${
          showPopup ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0 pointer-events-none'
        }`}
      >
        <div className="glass p-5 rounded-2xl border-emerald-500/30 flex items-center gap-4 shadow-2xl shadow-emerald-500/10 min-w-[300px]">
          <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-400">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <p className="text-white font-bold text-sm">Message Sent!</p>
            <p className="text-zinc-400 text-xs">Thanks for reaching out, Sharjil will get back to you soon.</p>
          </div>
          <button 
            onClick={() => setShowPopup(false)}
            className="ml-auto text-zinc-500 hover:text-white"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <div className="mb-16 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/5 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-4"
        >
          Get In Touch
        </motion.div>
        <h2 className="text-4xl font-extrabold mb-4 text-white">Contact Me</h2>
        <p className="text-zinc-500 text-sm max-w-md mx-auto">Have a question or want to work together? Drop me a message.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-start">
        {/* Left Column: Contact Cards */}
        <div className="space-y-6">
          <div className="space-y-4">
            {/* Email Card */}
            <div className="glass group p-4 rounded-2xl border-l-4 border-l-red-500/50 hover:bg-white/[0.05] transition-all duration-300 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center transition-transform group-hover:scale-105">
                <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 mb-1">Email</p>
                <p className="text-white font-bold text-base">sharjil0506@gmail.com</p>
              </div>
            </div>

            {/* Phone Card */}
            <div className="glass group p-4 rounded-2xl border-l-4 border-l-blue-500/50 hover:bg-white/[0.05] transition-all duration-300 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center transition-transform group-hover:scale-105">
                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 mb-1">Phone</p>
                <p className="text-white font-bold text-base">01874591674</p>
              </div>
            </div>

            {/* Location Card */}
            <div className="glass group p-4 rounded-2xl border-l-4 border-l-emerald-500/50 hover:bg-white/[0.05] transition-all duration-300 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center transition-transform group-hover:scale-105">
                <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 mb-1">Location</p>
                <p className="text-white font-bold text-base">Nasirabad, Chattogram, Bangladesh</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="glass p-6 rounded-[2rem] border border-white/5 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 blur-[60px] rounded-full pointer-events-none group-hover:bg-blue-600/20 transition-all"></div>
          <form onSubmit={handleSubmit} className="relative z-10 space-y-4">
            <h3 className="text-xl font-black text-white mb-2">Send a Message</h3>
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Full Name</label>
              <input 
                type="text" 
                name="name"
                required
                value={form.name}
                onChange={(e) => {
                  setForm({...form, name: e.target.value});
                  setSuccess(false);
                }}
                className="w-full bg-zinc-950/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500/50 transition-all"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Email Address</label>
              <input 
                type="email" 
                name="email"
                required
                value={form.email}
                onChange={(e) => {
                  setForm({...form, email: e.target.value});
                  setSuccess(false);
                }}
                className="w-full bg-zinc-950/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500/50 transition-all"
                placeholder="john@example.com"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Message</label>
              <textarea 
                rows={4} 
                name="message"
                required
                value={form.message}
                onChange={(e) => {
                  setForm({...form, message: e.target.value});
                  setSuccess(false);
                }}
                className="w-full bg-zinc-950/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500/50 transition-all resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            {error && (
              <p className="text-red-400 text-sm font-medium">{error}</p>
            )}
            {success ? (
              <div className="rounded-3xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-emerald-200">
                <p className="font-bold text-white">Thank you! Your message is on its way.</p>
                <p className="text-sm text-emerald-200/80 mt-1">I’ll check it and get back to you soon.</p>
              </div>
            ) : null}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 rounded-xl text-white font-black uppercase tracking-[0.2em] transition-all shadow-xl shadow-blue-500/10 active:scale-[0.98] ${
                isSubmitting
                  ? 'bg-blue-500/60 cursor-not-allowed opacity-70'
                  : 'bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-500 hover:to-emerald-500'
              }`}
              aria-busy={isSubmitting}
            >
              {isSubmitting ? 'Sending…' : 'Send Now'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;