import React, { useState } from 'react';
import { Send, MessageCircle, Mail, Copy, Check, Calendar, AlertCircle, Info } from 'lucide-react';
import { SITE_CONFIG } from '../../config/site';
import type { InquiryFormData } from '../../types';

interface EnquirySectionProps {
  selectedServicePreset?: string;
}

export const EnquirySection: React.FC<EnquirySectionProps> = ({
  selectedServicePreset,
}) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    name: '',
    partnerName: '',
    phone: '',
    email: '',
    date: '',
    location: '',
    service: selectedServicePreset || 'Wedding Photography',
    message: '',
    preferredContact: 'whatsapp',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = 'Please enter your name.';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Please provide a valid phone or WhatsApp number.';
    } else if (formData.phone.trim().length < 8) {
      errs.phone = 'Please enter a complete phone number with country code.';
    }
    if (!formData.date.trim()) {
      errs.date = 'Please provide your anticipated wedding date or season.';
    }
    if (!formData.location.trim()) {
      errs.location = 'Please share the event location (city or venue).';
    }
    if (!formData.service.trim()) {
      errs.service = 'Please choose a photography service.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
      // Construct WhatsApp URL
      const waUrl = SITE_CONFIG.createWhatsAppUrl({
        name: formData.name,
        partnerName: formData.partnerName,
        date: formData.date,
        location: formData.location,
        service: formData.service,
        message: formData.message,
      });

      // If configured or clicked, open WhatsApp window safely
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const handleCopyInquiry = () => {
    const partnerText = formData.partnerName ? `\nPartner's Name: ${formData.partnerName}` : '';
    const text = `Hello Seenu Photography,\n\nI would like to enquire about your photography services.\n\nName: ${formData.name}${partnerText}\nWedding Date: ${formData.date}\nEvent Location: ${formData.location}\nService: ${formData.service}\nPreferred Contact: ${formData.preferredContact}\nMessage: ${formData.message || 'None'}\n\nPlease let me know the next steps.`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section
      id="contact"
      className="relative bg-[#191816] text-[#F8F5EF] py-28 md:py-40 px-6 md:px-12 lg:px-20 overflow-hidden border-t border-[#C7A77B]/20"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=2200&q=85"
          alt="Atmospheric couple backdrop in deep tones"
          className="w-full h-full object-cover opacity-15 filter brightness-50"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#191816] via-[#191816]/95 to-[#191816]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Headline, Supporting Text & Studio Commitments */}
          <div className="lg:col-span-5 space-y-8">
            <div className="inline-flex items-center gap-2 text-[10px] md:text-xs font-mono uppercase tracking-[0.25em] text-[#C7A77B]">
              <Calendar className="w-3.5 h-3.5" />
              <span>COMMISSIONS & ENQUIRIES</span>
            </div>

            {/* Exact Required Headline */}
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white font-light tracking-tight leading-[1.1]">
              Let's make your memories{' '}
              <span className="italic font-normal text-[#C7A77B]">
                last forever.
              </span>
            </h2>

            {/* Exact Required Supporting Text */}
            <p className="text-stone-300 font-sans font-light text-base md:text-lg leading-relaxed">
              Tell us a little about your celebration. We'd love to hear your story.
            </p>

            <div className="space-y-4 pt-4 border-t border-white/10">
              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C7A77B] mt-2 shrink-0" />
                <p className="text-xs text-stone-300 font-sans font-light leading-relaxed">
                  <strong className="text-[#F8F5EF] font-medium block">Curated Commissions:</strong>
                  We accept a selective number of weddings each season to dedicate undivided creative focus to each family.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C7A77B] mt-2 shrink-0" />
                <p className="text-xs text-stone-300 font-sans font-light leading-relaxed">
                  <strong className="text-[#F8F5EF] font-medium block">Personal Consultation:</strong>
                  We discuss your rituals, timing, and aesthetic desires to tailor your collection.
                </p>
              </div>
            </div>

            {/* Quick WhatsApp Alternative Box */}
            <div className="p-6 bg-white/5 border border-white/10 rounded-xs space-y-3">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#C7A77B] block font-semibold">
                Direct WhatsApp Availability
              </span>
              <p className="text-xs text-stone-300 font-sans font-light leading-relaxed">
                Need a fast date check? You can start a conversation with Seenu Photography immediately on WhatsApp.
              </p>
              <a
                href={SITE_CONFIG.createWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C7A77B] hover:text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Chat on WhatsApp →</span>
              </a>
            </div>
          </div>

          {/* Right Column: Functional Enquiry Form with Validation */}
          <div className="lg:col-span-7 bg-[#201E1C] border border-[#C7A77B]/30 p-8 md:p-12 shadow-2xl rounded-xs">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="border-b border-white/10 pb-4 mb-2 flex items-center justify-between">
                  <h3 className="font-serif text-2xl text-white tracking-wide">
                    Enquire With Seenu Photography
                  </h3>
                  <span className="text-[10px] font-mono text-[#C7A77B] uppercase tracking-widest">
                    * Required fields
                  </span>
                </div>

                {/* Names: Your Name & Partner's Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="enquiry-name"
                      className="block text-xs font-mono uppercase tracking-widest text-stone-300 mb-1.5"
                    >
                      Your Name *
                    </label>
                    <input
                      id="enquiry-name"
                      type="text"
                      required
                      placeholder="e.g. Priya Sharma"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: '' });
                      }}
                      className={`w-full px-4 py-3 bg-[#191816] border ${
                        errors.name ? 'border-red-400' : 'border-white/20'
                      } text-stone-100 placeholder-stone-600 rounded-xs text-sm focus:outline-none focus:border-[#C7A77B] transition-colors`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-400 font-mono flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="enquiry-partner"
                      className="block text-xs font-mono uppercase tracking-widest text-stone-300 mb-1.5"
                    >
                      Partner's Name (Optional)
                    </label>
                    <input
                      id="enquiry-partner"
                      type="text"
                      placeholder="e.g. Kabir Mehta"
                      value={formData.partnerName}
                      onChange={(e) =>
                        setFormData({ ...formData, partnerName: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-[#191816] border border-white/20 text-stone-100 placeholder-stone-600 rounded-xs text-sm focus:outline-none focus:border-[#C7A77B] transition-colors"
                    />
                  </div>
                </div>

                {/* Phone & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="enquiry-phone"
                      className="block text-xs font-mono uppercase tracking-widest text-stone-300 mb-1.5"
                    >
                      WhatsApp / Phone *
                    </label>
                    <input
                      id="enquiry-phone"
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: '' });
                      }}
                      className={`w-full px-4 py-3 bg-[#191816] border ${
                        errors.phone ? 'border-red-400' : 'border-white/20'
                      } text-stone-100 placeholder-stone-600 rounded-xs text-sm focus:outline-none focus:border-[#C7A77B] transition-colors`}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-red-400 font-mono flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="enquiry-email"
                      className="block text-xs font-mono uppercase tracking-widest text-stone-300 mb-1.5"
                    >
                      Email Address (Optional)
                    </label>
                    <input
                      id="enquiry-email"
                      type="email"
                      placeholder="couple@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-[#191816] border border-white/20 text-stone-100 placeholder-stone-600 rounded-xs text-sm focus:outline-none focus:border-[#C7A77B] transition-colors"
                    />
                  </div>
                </div>

                {/* Date & Event Location */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="enquiry-date"
                      className="block text-xs font-mono uppercase tracking-widest text-stone-300 mb-1.5"
                    >
                      Wedding Date or Season *
                    </label>
                    <input
                      id="enquiry-date"
                      type="text"
                      required
                      placeholder="e.g. December 18, 2026 or Winter 2026"
                      value={formData.date}
                      onChange={(e) => {
                        setFormData({ ...formData, date: e.target.value });
                        if (errors.date) setErrors({ ...errors, date: '' });
                      }}
                      className={`w-full px-4 py-3 bg-[#191816] border ${
                        errors.date ? 'border-red-400' : 'border-white/20'
                      } text-stone-100 placeholder-stone-600 rounded-xs text-sm focus:outline-none focus:border-[#C7A77B] transition-colors`}
                    />
                    {errors.date && (
                      <p className="mt-1 text-xs text-red-400 font-mono flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.date}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="enquiry-location"
                      className="block text-xs font-mono uppercase tracking-widest text-stone-300 mb-1.5"
                    >
                      Event Location / City *
                    </label>
                    <input
                      id="enquiry-location"
                      type="text"
                      required
                      placeholder="e.g. Udaipur, Jaipur, Goa, etc."
                      value={formData.location}
                      onChange={(e) => {
                        setFormData({ ...formData, location: e.target.value });
                        if (errors.location) setErrors({ ...errors, location: '' });
                      }}
                      className={`w-full px-4 py-3 bg-[#191816] border ${
                        errors.location ? 'border-red-400' : 'border-white/20'
                      } text-stone-100 placeholder-stone-600 rounded-xs text-sm focus:outline-none focus:border-[#C7A77B] transition-colors`}
                    />
                    {errors.location && (
                      <p className="mt-1 text-xs text-red-400 font-mono flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.location}
                      </p>
                    )}
                  </div>
                </div>

                {/* Photography Service Selection */}
                <div>
                  <label
                    htmlFor="enquiry-service"
                    className="block text-xs font-mono uppercase tracking-widest text-stone-300 mb-1.5"
                  >
                    Photography Service *
                  </label>
                  <select
                    id="enquiry-service"
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-[#191816] border border-white/20 text-stone-100 rounded-xs text-sm focus:outline-none focus:border-[#C7A77B] transition-colors"
                  >
                    <option value="Wedding Photography & Cinematography">
                      Comprehensive Wedding Photography & Cinematography
                    </option>
                    <option value="Wedding Photography">
                      Wedding Photography (Tradition & Candid)
                    </option>
                    <option value="Candid Photography">
                      Candid Documentary Photography
                    </option>
                    <option value="Pre-Wedding Photography">
                      Editorial Pre-Wedding Session
                    </option>
                    <option value="Wedding Cinematography">
                      Wedding Cinematography & Films
                    </option>
                    <option value="Destination Wedding Collection">
                      Multi-Day Destination Wedding
                    </option>
                  </select>
                </div>

                {/* Preferred Contact Method */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-stone-300 mb-2">
                    Preferred Contact Method
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { id: 'whatsapp', label: 'WhatsApp', icon: MessageCircle },
                      { id: 'phone', label: 'Phone Call', icon: Calendar },
                      { id: 'email', label: 'Email', icon: Mail },
                    ].map((m) => (
                      <button
                        key={m.id}
                        type="button"
                        onClick={() =>
                          setFormData({
                            ...formData,
                            preferredContact: m.id as 'whatsapp' | 'phone' | 'email',
                          })
                        }
                        className={`py-2 px-3 text-xs font-mono tracking-wider flex items-center justify-center gap-1.5 border rounded-xs transition-colors cursor-pointer ${
                          formData.preferredContact === m.id
                            ? 'bg-[#C7A77B] text-[#191816] border-[#C7A77B] font-semibold'
                            : 'bg-[#191816] text-stone-300 border-white/20 hover:border-white/40'
                        }`}
                      >
                        <m.icon className="w-3.5 h-3.5" />
                        <span>{m.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message (Optional) */}
                <div>
                  <label
                    htmlFor="enquiry-message"
                    className="block text-xs font-mono uppercase tracking-widest text-stone-300 mb-1.5"
                  >
                    A Short Message (Optional)
                  </label>
                  <textarea
                    id="enquiry-message"
                    rows={3}
                    placeholder="Tell us about your celebration, ceremonies, or any specific details..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-[#191816] border border-white/20 text-stone-100 placeholder-stone-600 rounded-xs text-sm focus:outline-none focus:border-[#C7A77B] transition-colors resize-none"
                  />
                </div>

                {/* Submit Button & WhatsApp Notice */}
                <div className="pt-2 space-y-3">
                  <button
                    type="submit"
                    className="w-full py-4 bg-[#C7A77B] text-[#191816] font-sans text-xs font-semibold uppercase tracking-[0.2em] rounded-xs hover:bg-[#D9C19D] transition-all transform hover:-translate-y-0.5 shadow-xl flex items-center justify-center gap-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#C7A77B]"
                  >
                    <span>Enquire on WhatsApp</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-start gap-2 p-3 bg-white/5 border border-white/10 rounded-xs text-[11px] text-stone-400 font-sans leading-relaxed">
                    <Info className="w-4 h-4 text-[#C7A77B] shrink-0 mt-0.5" />
                    <span>
                      Clicking submit formats your details into an elegant enquiry and opens WhatsApp on your device. You can review the prefilled message before sending.
                    </span>
                  </div>
                </div>
              </form>
            ) : (
              /* Success / Ready State */
              <div className="space-y-6 py-4 animate-fadeIn">
                <div className="flex items-center gap-3 text-emerald-400">
                  <div className="p-2.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                    <Check className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-2xl text-white">
                      Enquiry Formatted for WhatsApp
                    </h4>
                    <p className="text-xs text-stone-400 font-sans">
                      Your details are ready to be sent directly to Seenu Photography.
                    </p>
                  </div>
                </div>

                {/* Formatted Message Preview */}
                <div className="p-5 bg-[#191816] border border-[#C7A77B]/30 rounded-xs space-y-2 text-xs font-mono text-stone-300">
                  <div className="text-[10px] text-[#C7A77B] uppercase tracking-widest pb-1 border-b border-white/10 font-semibold">
                    PREFILLED MESSAGE STRUCTURE
                  </div>
                  <div className="text-stone-400 italic">Hello Seenu Photography,</div>
                  <div className="text-stone-400 italic">I would like to enquire about your photography services.</div>
                  <div className="pt-2 border-t border-white/5 space-y-1">
                    <div>Name: <span className="text-white font-sans">{formData.name}</span></div>
                    {formData.partnerName && (
                      <div>Partner's Name: <span className="text-white font-sans">{formData.partnerName}</span></div>
                    )}
                    <div>Wedding Date: <span className="text-[#C7A77B] font-sans">{formData.date}</span></div>
                    <div>Event Location: <span className="text-white font-sans">{formData.location}</span></div>
                    <div>Service: <span className="text-white font-sans">{formData.service}</span></div>
                    {formData.message && (
                      <div>Message: <span className="text-white font-sans">{formData.message}</span></div>
                    )}
                  </div>
                  <div className="text-stone-400 italic pt-1">Please let me know the next steps.</div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <a
                    href={SITE_CONFIG.createWhatsAppUrl({
                      name: formData.name,
                      partnerName: formData.partnerName,
                      date: formData.date,
                      location: formData.location,
                      service: formData.service,
                      message: formData.message,
                    })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-sans text-xs font-semibold uppercase tracking-[0.2em] rounded-xs transition-all flex items-center justify-center gap-2 shadow-lg"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Open in WhatsApp</span>
                  </a>

                  <a
                    href={SITE_CONFIG.createMailtoUrl({
                      name: formData.name,
                      partnerName: formData.partnerName,
                      date: formData.date,
                      location: formData.location,
                      service: formData.service,
                      message: formData.message,
                    })}
                    className="w-full py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-stone-200 font-sans text-xs font-medium uppercase tracking-[0.2em] rounded-xs transition-all flex items-center justify-center gap-2"
                  >
                    <Mail className="w-4 h-4 text-[#C7A77B]" />
                    <span>Send via Email Instead</span>
                  </a>

                  <button
                    onClick={handleCopyInquiry}
                    className="w-full py-2.5 text-stone-400 hover:text-white font-mono text-[11px] uppercase tracking-wider flex items-center justify-center gap-1.5 focus:outline-none cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied to Clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Message Text</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="pt-4 border-t border-white/10 text-center">
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-[11px] text-stone-400 hover:text-white font-mono underline cursor-pointer"
                  >
                    ← Edit your enquiry details
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

// Re-export alias for backward compatibility
export { EnquirySection as BookingSection };
