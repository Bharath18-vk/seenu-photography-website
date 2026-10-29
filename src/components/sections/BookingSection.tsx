import React, { useState } from 'react';
import { Send, MessageCircle, Mail, Copy, Check, Calendar, AlertCircle } from 'lucide-react';
import { STUDIO_CONFIG } from '../../config/studio';
import type { InquiryFormData } from '../../types';

interface BookingSectionProps {
  selectedServicePreset?: string;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  selectedServicePreset,
}) => {
  // Form state initialized with selectedServicePreset
  const [formData, setFormData] = useState<InquiryFormData>({
    name: '',
    phone: '',
    email: '',
    date: '',
    location: '',
    celebrationType: selectedServicePreset || 'Wedding Photography & Cinematography',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your name or couple names.';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Please provide a valid phone or WhatsApp number.';
    } else if (formData.phone.trim().length < 8) {
      errs.phone = 'Please enter a complete phone number with country code.';
    }
    if (!formData.date.trim()) {
      errs.date = 'Please select your anticipated wedding date or season.';
    }
    if (!formData.location.trim()) {
      errs.location = 'Please share your wedding city or venue location.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
    }
  };

  const handleCopyInquiry = () => {
    const text = `Inquiry for SS Studio:\nName: ${formData.name}\nPhone: ${formData.phone}\nWedding Date: ${formData.date}\nLocation: ${formData.location}\nCelebration: ${formData.celebrationType}\nNotes: ${formData.message || 'None'}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section
      id="inquire"
      className="relative bg-[#0E0E12] text-stone-100 py-28 md:py-40 px-6 md:px-12 lg:px-20 overflow-hidden border-t border-white/10"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=2200&q=85"
          alt="Atmospheric couple backdrop in deep tones"
          className="w-full h-full object-cover opacity-20 filter brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0E0E12] via-[#0E0E12]/95 to-[#0A0A0C]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Text & Studio Guarantee */}
          <div className="lg:col-span-5 space-y-8">
            <div className="inline-flex items-center gap-2 text-[10px] md:text-xs font-mono uppercase tracking-[0.25em] text-[#C5A880]">
              <Calendar className="w-3.5 h-3.5" />
              <span>COMMISSIONS & AVAILABILITY</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white font-light tracking-tight leading-[1.1]">
              Your wedding deserves to be{' '}
              <span className="italic font-normal text-[#C5A880]">
                remembered this way.
              </span>
            </h2>

            <p className="text-stone-300 font-sans font-light text-base md:text-lg leading-relaxed">
              Tell us a little about your celebration. Let's create something you'll return to for years to come.
            </p>

            <div className="space-y-4 pt-4 border-t border-white/10">
              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] mt-2 shrink-0" />
                <p className="text-xs text-stone-400 font-sans font-light leading-relaxed">
                  <strong className="text-stone-200 font-medium block">Limited Commissions:</strong>
                  We accept a curated number of weddings annually to devote bespoke creative attention to every couple.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] mt-2 shrink-0" />
                <p className="text-xs text-stone-400 font-sans font-light leading-relaxed">
                  <strong className="text-stone-200 font-medium block">Prompt Response:</strong>
                  {STUDIO_CONFIG.contact.turnaroundTime}.
                </p>
              </div>
            </div>

            {/* Direct WhatsApp Quick Alternative */}
            <div className="p-6 bg-white/5 border border-white/10 rounded-xs space-y-3">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#C5A880] block">
                Prefer an immediate conversation?
              </span>
              <p className="text-xs text-stone-300 font-sans font-light">
                Connect directly with our studio directors on WhatsApp for date checks and swift portfolio walkthroughs.
              </p>
              <a
                href={STUDIO_CONFIG.createWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C5A880] hover:text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>CHAT ON WHATSAPP ({STUDIO_CONFIG.contact.displayPhone}) →</span>
              </a>
            </div>
          </div>

          {/* Right Column: Inquiry Form / Prepared Confirmation */}
          <div className="lg:col-span-7 bg-[#141418] border border-white/15 p-8 md:p-12 shadow-2xl rounded-xs">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="border-b border-white/10 pb-4 mb-2 flex items-center justify-between">
                  <h3 className="font-serif text-2xl text-white tracking-wide">
                    Check Date Availability
                  </h3>
                  <span className="text-[10px] font-mono text-stone-400 uppercase tracking-widest">
                    * Required fields
                  </span>
                </div>

                {/* Name */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-stone-300 mb-2">
                    Your Name(s) *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Priya Sharma & Kabir Mehta"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: '' });
                    }}
                    className={`w-full px-4 py-3 bg-[#0A0A0C] border ${
                      errors.name ? 'border-red-500' : 'border-white/20'
                    } text-stone-100 placeholder-stone-600 rounded-xs text-sm focus:outline-none focus:border-[#C5A880] transition-colors`}
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-red-400 font-mono flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.name}
                    </p>
                  )}
                </div>

                {/* Phone & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-stone-300 mb-2">
                      WhatsApp / Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 00000"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: '' });
                      }}
                      className={`w-full px-4 py-3 bg-[#0A0A0C] border ${
                        errors.phone ? 'border-red-500' : 'border-white/20'
                      } text-stone-100 placeholder-stone-600 rounded-xs text-sm focus:outline-none focus:border-[#C5A880] transition-colors`}
                    />
                    {errors.phone && (
                      <p className="mt-1.5 text-xs text-red-400 font-mono flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-stone-300 mb-2">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="hello@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-[#0A0A0C] border border-white/20 text-stone-100 placeholder-stone-600 rounded-xs text-sm focus:outline-none focus:border-[#C5A880] transition-colors"
                    />
                  </div>
                </div>

                {/* Date & Location Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-stone-300 mb-2">
                      Wedding Date or Season *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. December 18, 2026 or Winter '26"
                      value={formData.date}
                      onChange={(e) => {
                        setFormData({ ...formData, date: e.target.value });
                        if (errors.date) setErrors({ ...errors, date: '' });
                      }}
                      className={`w-full px-4 py-3 bg-[#0A0A0C] border ${
                        errors.date ? 'border-red-500' : 'border-white/20'
                      } text-stone-100 placeholder-stone-600 rounded-xs text-sm focus:outline-none focus:border-[#C5A880] transition-colors`}
                    />
                    {errors.date && (
                      <p className="mt-1.5 text-xs text-red-400 font-mono flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.date}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-stone-300 mb-2">
                      Location / Venue *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Udaipur, Jaipur, Goa, etc."
                      value={formData.location}
                      onChange={(e) => {
                        setFormData({ ...formData, location: e.target.value });
                        if (errors.location) setErrors({ ...errors, location: '' });
                      }}
                      className={`w-full px-4 py-3 bg-[#0A0A0C] border ${
                        errors.location ? 'border-red-500' : 'border-white/20'
                      } text-stone-100 placeholder-stone-600 rounded-xs text-sm focus:outline-none focus:border-[#C5A880] transition-colors`}
                    />
                    {errors.location && (
                      <p className="mt-1.5 text-xs text-red-400 font-mono flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.location}
                      </p>
                    )}
                  </div>
                </div>

                {/* Celebration Type */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-stone-300 mb-2">
                    Type of Celebration
                  </label>
                  <select
                    value={formData.celebrationType}
                    onChange={(e) => setFormData({ ...formData, celebrationType: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0A0A0C] border border-white/20 text-stone-100 rounded-xs text-sm focus:outline-none focus:border-[#C5A880] transition-colors"
                  >
                    <option value="Wedding Photography & Cinematography">
                      Comprehensive Wedding Photography & Cinematography
                    </option>
                    <option value="Wedding Photography">Wedding Photography Only</option>
                    <option value="Wedding Cinematography">Wedding Cinematography Only</option>
                    <option value="Pre-Wedding Sessions">Editorial Pre-Wedding Session</option>
                    <option value="Destination Weddings">Multi-Day Destination Wedding</option>
                    <option value="Engagement Photography">Intimate Engagement / Roka</option>
                  </select>
                </div>

                {/* Optional Message */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-stone-300 mb-2">
                    Tell us about your celebration (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your planned rituals, estimated guest count, or any creative vision you have in mind..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0A0A0C] border border-white/20 text-stone-100 placeholder-stone-600 rounded-xs text-sm focus:outline-none focus:border-[#C5A880] transition-colors resize-none"
                  />
                </div>

                {/* Submit Buttons */}
                <div className="pt-2 space-y-3">
                  <button
                    type="submit"
                    className="w-full py-4 bg-[#C5A880] text-black font-sans text-xs font-semibold uppercase tracking-[0.2em] rounded-xs hover:bg-[#D4AF37] transition-all transform hover:-translate-y-0.5 shadow-xl flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#C5A880]"
                  >
                    <span>CHECK YOUR DATE</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>

                  <p className="text-[11px] text-stone-500 font-sans text-center">
                    Submitting prepares your inquiry for direct dispatch via WhatsApp or email.
                  </p>
                </div>
              </form>
            ) : (
              /* Success / Ready-to-Send State */
              <div className="space-y-6 py-4 animate-fadeIn">
                <div className="flex items-center gap-3 text-emerald-400">
                  <div className="p-2 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                    <Check className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-2xl text-white">
                      Inquiry Ready For Dispatch
                    </h4>
                    <p className="text-xs text-stone-400 font-sans">
                      Your details have been formatted for instant delivery.
                    </p>
                  </div>
                </div>

                {/* Summary Card */}
                <div className="p-5 bg-black/40 border border-white/10 rounded-xs space-y-2 text-xs font-mono">
                  <div className="flex justify-between border-b border-white/5 pb-1">
                    <span className="text-stone-500">CLIENT:</span>
                    <span className="text-stone-200">{formData.name}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-1">
                    <span className="text-stone-500">PHONE:</span>
                    <span className="text-stone-200">{formData.phone}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-1">
                    <span className="text-stone-500">DATE:</span>
                    <span className="text-[#C5A880]">{formData.date}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-1">
                    <span className="text-stone-500">LOCATION:</span>
                    <span className="text-stone-200">{formData.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500">SERVICE:</span>
                    <span className="text-stone-200 truncate max-w-[200px]">{formData.celebrationType}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <a
                    href={STUDIO_CONFIG.createWhatsAppUrl(formData)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-sans text-xs font-semibold uppercase tracking-[0.2em] rounded-xs transition-all flex items-center justify-center gap-2 shadow-lg"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send Via WhatsApp Message</span>
                  </a>

                  <a
                    href={STUDIO_CONFIG.createMailtoUrl(formData)}
                    className="w-full py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-stone-200 font-sans text-xs font-medium uppercase tracking-[0.2em] rounded-xs transition-all flex items-center justify-center gap-2"
                  >
                    <Mail className="w-4 h-4 text-[#C5A880]" />
                    <span>Open Email Draft</span>
                  </a>

                  <button
                    onClick={handleCopyInquiry}
                    className="w-full py-2.5 text-stone-400 hover:text-white font-mono text-[11px] uppercase tracking-wider flex items-center justify-center gap-1.5 focus:outline-none"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied to Clipboard</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Inquiry Details</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="pt-4 border-t border-white/10 text-center">
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-[11px] text-stone-500 hover:text-stone-300 font-mono underline"
                  >
                    ← Edit your inquiry information
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
