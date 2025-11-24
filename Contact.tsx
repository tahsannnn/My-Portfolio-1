import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    // Clear error when user types
    if (errors[id as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [id]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validate()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        // Reset success message after 5 seconds
        setTimeout(() => setIsSuccess(false), 5000);
      }, 1500);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Let's work together!</h2>
        <p className="text-slate-400 text-lg mb-8 leading-relaxed">
          I'm currently looking for new opportunities. Whether you have a question, a project proposal, or just want to say hi, fill out the form and I'll get back to you as soon as possible.
        </p>

        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-brand-500/10 flex items-center justify-center">
              <Mail className="w-6 h-6 text-brand-400" />
            </div>
            <div>
              <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">Email</p>
              <a href="mailto:hello@example.com" className="text-lg text-white font-medium hover:text-brand-400 transition-colors">hello@example.com</a>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-brand-500/10 flex items-center justify-center">
              <MapPin className="w-6 h-6 text-brand-400" />
            </div>
            <div>
              <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">Location</p>
              <p className="text-lg text-white font-medium">San Francisco, CA</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-xl relative overflow-hidden">
        {isSuccess && (
          <div className="absolute inset-0 bg-slate-800 z-10 flex flex-col items-center justify-center text-center p-8 animate-fade-in">
            <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
            <p className="text-slate-400">Thank you for reaching out. I'll get back to you shortly.</p>
            <button 
              onClick={() => setIsSuccess(false)}
              className="mt-6 text-brand-400 hover:text-brand-300 font-medium"
            >
              Send another message
            </button>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Name</label>
            <input 
              type="text" 
              id="name" 
              value={formData.name}
              onChange={handleChange}
              className={`w-full bg-slate-900 border rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all ${errors.name ? 'border-red-500' : 'border-slate-700 focus:border-transparent'}`}
              placeholder="John Doe"
            />
            {errors.name && <p className="mt-1 text-sm text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.name}</p>}
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Email</label>
            <input 
              type="email" 
              id="email" 
              value={formData.email}
              onChange={handleChange}
              className={`w-full bg-slate-900 border rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all ${errors.email ? 'border-red-500' : 'border-slate-700 focus:border-transparent'}`}
              placeholder="john@example.com"
            />
            {errors.email && <p className="mt-1 text-sm text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.email}</p>}
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-slate-400 mb-2">Subject</label>
            <input 
              type="text" 
              id="subject" 
              value={formData.subject}
              onChange={handleChange}
              className={`w-full bg-slate-900 border rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all ${errors.subject ? 'border-red-500' : 'border-slate-700 focus:border-transparent'}`}
              placeholder="Project Inquiry"
            />
            {errors.subject && <p className="mt-1 text-sm text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.subject}</p>}
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Message</label>
            <textarea 
              id="message" 
              rows={4} 
              value={formData.message}
              onChange={handleChange}
              className={`w-full bg-slate-900 border rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all resize-none ${errors.message ? 'border-red-500' : 'border-slate-700 focus:border-transparent'}`}
              placeholder="Tell me about your project..."
            ></textarea>
            {errors.message && <p className="mt-1 text-sm text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.message}</p>}
          </div>
          
          <button 
            type="submit" 
            disabled={isSubmitting}
            className={`w-full bg-brand-600 hover:bg-brand-500 text-white font-bold py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2 group ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
            {!isSubmitting && <Send className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />}
          </button>
        </form>
      </div>
    </div>
  );
};