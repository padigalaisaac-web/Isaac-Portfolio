import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  FileDown, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  Copy, 
  Check,
  MessageSquare
} from 'lucide-react';
import { personalData } from '../data/personal';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error' | 'unconfigured'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const formspreeEndpoint = (import.meta.env.VITE_FORMSPREE_ENDPOINT || 'https://formspree.io/f/xaeoqlba').trim();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check if endpoint is configured
    if (!formspreeEndpoint) {
      setFormStatus('unconfigured');
      return;
    }

    setFormStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _replyto: formData.email,
        }),
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        const data = await response.json().catch(() => null);
        setFormStatus('error');
        setErrorMessage(
          data?.error || data?.errors?.[0]?.message || 'Failed to send message. Please try again or email directly.'
        );
      }
    } catch (err) {
      setFormStatus('error');
      setErrorMessage('Network connection error. Please email directly at padigalaisaac@gmail.com');
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Direct Outreach</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-heading tracking-tight">
            Let's Connect and Build Something Great.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-body">
            I am actively seeking software engineering, full stack, and AI/ML internship opportunities. Reach out via email, phone, or the contact form below.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info & Resume Download */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-secondary/70 rounded-2xl border border-border p-6 sm:p-8 space-y-6">
              <h3 className="text-xl font-bold text-heading">
                Contact Information
              </h3>
              <p className="text-sm text-body leading-relaxed">
                Feel free to contact me directly regarding internship opportunities, technical projects, or software collaboration.
              </p>

              {/* Contact Items */}
              <div className="space-y-4">
                
                {/* Email Item */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white border border-border shadow-subtle">
                  <div className="p-2.5 rounded-lg bg-blue-50 text-primary shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs font-medium text-slate-500 block">Email Address</span>
                    <a
                      href={`mailto:${personalData.email}`}
                      className="text-sm font-semibold text-heading hover:text-primary transition-colors truncate block"
                    >
                      {personalData.email}
                    </a>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 text-slate-400 hover:text-primary hover:bg-slate-50 rounded-lg transition-colors shrink-0"
                    title="Copy email address"
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white border border-border shadow-subtle">
                  <div className="p-2.5 rounded-lg bg-blue-50 text-primary shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs font-medium text-slate-500 block">Phone Number</span>
                    <a
                      href={`tel:${personalData.phone.replace(/\s+/g, '')}`}
                      className="text-sm font-semibold text-heading hover:text-primary transition-colors truncate block"
                    >
                      {personalData.phone}
                    </a>
                  </div>
                </div>

                {/* Location Item */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white border border-border shadow-subtle">
                  <div className="p-2.5 rounded-lg bg-blue-50 text-primary shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs font-medium text-slate-500 block">Location</span>
                    <span className="text-sm font-semibold text-heading block">
                      {personalData.location}
                    </span>
                  </div>
                </div>

              </div>

              {/* Download Resume Button (Mandatory in Contact Section) */}
              <div className="pt-2">
                <a
                  href={personalData.resumeUrl}
                  download="Padigala_Isaac_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-white bg-primary hover:bg-primary-700 shadow-sm transition-all duration-200 focus-visible:ring-2 focus-visible:ring-primary"
                  aria-label="Download Padigala Isaac Resume PDF from Contact section"
                >
                  <FileDown className="w-5 h-5" />
                  <span>Download Resume (PDF)</span>
                </a>
              </div>

            </div>

            {/* Response Promise Card */}
            <div className="p-5 rounded-2xl border border-border bg-white shadow-subtle text-xs text-body leading-relaxed flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
              <span>
                <strong className="text-heading font-semibold">Prompt Response:</strong> Messages sent here or directly to <a href={`mailto:${personalData.email}`} className="text-primary hover:underline">{personalData.email}</a> are monitored daily with timely replies.
              </span>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-border p-6 sm:p-8 shadow-card">
              <h3 className="text-xl font-bold text-heading mb-2">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-body mb-6">
                Fill out the form below to initiate a conversation.
              </p>

              {/* Unconfigured Alert Notice (Transparent & Real) */}
              {formStatus === 'unconfigured' && (
                <div className="mb-6 p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm space-y-2">
                  <div className="flex items-center gap-2 font-bold text-amber-800">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>Formspree Endpoint Configuration Required</span>
                  </div>
                  <p>
                    The contact form requires a Formspree endpoint in production. To activate submissions, set <code className="bg-amber-100 px-1 py-0.5 rounded font-mono">VITE_FORMSPREE_ENDPOINT</code> in your Render dashboard environment variables or <code className="bg-amber-100 px-1 py-0.5 rounded font-mono">.env</code> file.
                  </p>
                  <p className="font-medium">
                    In the meantime, please send your email directly to{' '}
                    <a href={`mailto:${personalData.email}`} className="text-primary underline font-bold">
                      {personalData.email}
                    </a>.
                  </p>
                </div>
              )}

              {/* Success Notification */}
              {formStatus === 'success' && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-sm flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-bold">Message sent successfully!</h4>
                    <p className="text-xs text-emerald-700 mt-0.5">
                      Thank you for reaching out. I have received your message and will reply shortly.
                    </p>
                  </div>
                </div>
              )}

              {/* Error Notification */}
              {formStatus === 'error' && (
                <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-900 text-sm flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-rose-600 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-bold">Submission error</h4>
                    <p className="text-xs text-rose-700 mt-0.5">{errorMessage}</p>
                  </div>
                </div>
              )}

              {/* The Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Smith"
                      className="w-full px-4 py-2.5 rounded-xl border border-border bg-white text-heading text-sm placeholder:text-slate-400 focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. alex@company.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-border bg-white text-heading text-sm placeholder:text-slate-400 focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    />
                  </div>
                </div>

                {/* Subject Field */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                    Subject <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Software Engineer Internship Discussion"
                    className="w-full px-4 py-2.5 rounded-xl border border-border bg-white text-heading text-sm placeholder:text-slate-400 focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hi Isaac, I came across your portfolio and would like to discuss..."
                    className="w-full px-4 py-2.5 rounded-xl border border-border bg-white text-heading text-sm placeholder:text-slate-400 focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-primary hover:bg-primary-700 disabled:opacity-70 shadow-sm transition-all duration-200 focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    {formStatus === 'submitting' ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
