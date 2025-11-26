import React, { useState } from 'react';
import { Send, CheckCircle, Loader2 } from 'lucide-react';

export const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    cabinType: 'Sea Terrace',
    guests: '2',
    notes: ''
  });
  
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setStatus('success');
  };

  if (status === 'success') {
    return (
      <section id="booking" className="scroll-mt-24">
        <div className="rounded-[3rem] bg-white border border-rose-100 p-12 md:p-24 text-center shadow-2xl shadow-rose-200/40 flex flex-col items-center justify-center min-h-[600px] animate-in fade-in duration-700">
          <div className="w-24 h-24 rounded-full bg-green-50 text-green-600 flex items-center justify-center mb-8 shadow-sm">
            <CheckCircle size={48} strokeWidth={1.5} />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">Request Received!</h2>
          <p className="text-slate-600 text-lg max-w-md mb-10 leading-relaxed">
            Thank you, <span className="font-bold text-slate-900">{formData.firstName}</span>. Joanne has received your booking inquiry and will be in touch shortly to finalize your cabin on the Vintage & Vibrant Voyage.
          </p>
          <button 
            onClick={() => setStatus('idle')}
            className="px-8 py-4 rounded-full bg-slate-100 text-slate-600 hover:bg-brand-red hover:text-white font-bold text-xs uppercase tracking-widest transition-all duration-300"
          >
            Send another request
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="scroll-mt-24">
      <div className="rounded-[3rem] bg-gradient-to-br from-rose-50/50 via-white to-amber-50/50 border border-rose-100 p-6 md:p-16 text-center overflow-hidden relative shadow-2xl shadow-rose-900/5">
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3 pointer-events-none" />
        
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-red/5 border border-brand-red/10 text-brand-red font-bold text-[10px] uppercase tracking-widest mb-8 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-red opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-red"></span>
            </span>
            Limited Availability
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black text-slate-900 mb-6 tracking-tight">
            Secure your <span className="italic bg-gradient-to-r from-brand-red to-brand-orange bg-clip-text text-transparent pr-2">spot today</span>
          </h2>
          <p className="text-slate-600 mb-12 max-w-xl mx-auto text-lg font-light leading-relaxed">
            Ready to join the celebration? Fill out the form below to request your booking. A $400 deposit locks in your rate and cabin.
          </p>

          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6 text-left bg-white/60 backdrop-blur-xl p-8 md:p-10 rounded-[2.5rem] border border-white shadow-xl shadow-slate-200/50">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-800 uppercase tracking-widest pl-1">First Name</label>
                <input 
                  type="text" 
                  name="firstName"
                  required
                  className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 text-sm font-medium text-slate-900 focus:border-brand-red focus:ring-4 focus:ring-rose-100/50 focus:outline-none transition-all placeholder:text-slate-400"
                  placeholder="Jane"
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-800 uppercase tracking-widest pl-1">Last Name</label>
                <input 
                  type="text" 
                  name="lastName"
                  required
                  className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 text-sm font-medium text-slate-900 focus:border-brand-red focus:ring-4 focus:ring-rose-100/50 focus:outline-none transition-all placeholder:text-slate-400"
                  placeholder="Doe"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-800 uppercase tracking-widest pl-1">Email</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 text-sm font-medium text-slate-900 focus:border-brand-red focus:ring-4 focus:ring-rose-100/50 focus:outline-none transition-all placeholder:text-slate-400"
                  placeholder="jane@example.com"
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-800 uppercase tracking-widest pl-1">Phone</label>
                <input 
                  type="tel" 
                  name="phone"
                  className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 text-sm font-medium text-slate-900 focus:border-brand-red focus:ring-4 focus:ring-rose-100/50 focus:outline-none transition-all placeholder:text-slate-400"
                  placeholder="(555) 123-4567"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-800 uppercase tracking-widest pl-1">Preferred Cabin</label>
                <div className="relative">
                  <select 
                    name="cabinType"
                    className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 text-sm font-medium text-slate-900 focus:border-brand-red focus:ring-4 focus:ring-rose-100/50 focus:outline-none transition-all appearance-none cursor-pointer"
                    onChange={handleChange}
                    defaultValue="Sea Terrace"
                  >
                    <option value="Insider">The Insider</option>
                    <option value="Sea View">Sea View</option>
                    <option value="Sea Terrace">Sea Terrace (Balcony)</option>
                    <option value="Suite">RockStar Suite</option>
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">▼</div>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-800 uppercase tracking-widest pl-1">Number of Guests</label>
                <div className="relative">
                  <select 
                     name="guests"
                     className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 text-sm font-medium text-slate-900 focus:border-brand-red focus:ring-4 focus:ring-rose-100/50 focus:outline-none transition-all appearance-none cursor-pointer"
                     onChange={handleChange}
                     defaultValue="2"
                  >
                    <option value="1">1 (Solo)</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">▼</div>
                </div>
              </div>
            </div>

            <div className="space-y-2">
               <label className="text-xs font-bold text-slate-800 uppercase tracking-widest pl-1">Special Requests / Notes</label>
               <textarea 
                  name="notes"
                  className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 text-sm font-medium text-slate-900 focus:border-brand-red focus:ring-4 focus:ring-rose-100/50 focus:outline-none transition-all min-h-[120px] placeholder:text-slate-400 resize-y"
                  placeholder="Any dietary restrictions, special occasions, or questions..."
                  onChange={handleChange}
                />
            </div>

            <button 
              type="submit" 
              disabled={status === 'submitting'}
              className="w-full py-5 rounded-xl bg-gradient-to-r from-brand-red to-brand-orange text-white font-bold text-sm tracking-[0.15em] uppercase hover:shadow-xl hover:shadow-brand-red/30 hover:scale-[1.01] active:scale-[0.98] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <span>Submit Request</span>
                  <Send size={18} />
                </>
              )}
            </button>
            
            <p className="text-center text-[10px] text-slate-400 font-medium">
              No payment is taken at this time. Joanne will contact you to finalize details.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};