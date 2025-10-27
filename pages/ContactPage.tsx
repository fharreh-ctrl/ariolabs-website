
import React, { useState } from 'react';
import { InlineWidget } from 'react-calendly';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, Phone, MapPin } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  businessType: z.string().min(1, 'Please select a business type'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormInputs = z.infer<typeof contactSchema>;

const ContactPage: React.FC = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormInputs>({
        resolver: zodResolver(contactSchema),
    });
    
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionStatus, setSubmissionStatus] = useState<'success' | 'error' | null>(null);

    const onSubmit = async (data: ContactFormInputs) => {
        setIsSubmitting(true);
        setSubmissionStatus(null);
        try {
            // IMPORTANT: Replace with your own Formspree form ID
            const response = await fetch('https://formspree.io/f/YOUR_CONTACT_FORM_ID', { 
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: JSON.stringify(data),
            });
            if (response.ok) {
                setSubmissionStatus('success');
                reset();
            } else {
                setSubmissionStatus('error');
            }
        } catch (error) {
            setSubmissionStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-white">
            <header className="bg-soft-gray pt-24 pb-16">
                 <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8 text-center">
                     <h1 className="text-4xl md:text-5xl font-bold font-heading text-deep-navy">Let's Talk</h1>
                     <p className="text-lg md:text-xl text-dark-gray mt-4">Have a question or want to work with us? Reach out!</p>
                 </div>
            </header>
            <SectionWrapper className="py-16 md:py-24">
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Left Column: Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold font-heading text-deep-navy mb-4">Contact Information</h2>
                            <p className="text-lg text-dark-gray">Fill out the form or use the contact details below. For a faster response, book a call directly using the calendar.</p>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <Mail className="h-6 w-6 text-electric-teal mr-4" />
                                <a href="mailto:info@ariolabs.tech" className="text-lg hover:underline">info@ariolabs.tech</a>
                            </div>
                            <div className="flex items-center">
                                <Phone className="h-6 w-6 text-electric-teal mr-4" />
                                <span className="text-lg">+1 (346) 336-9252</span>
                            </div>
                            <div className="flex items-center">
                                <MapPin className="h-6 w-6 text-electric-teal mr-4" />
                                <span className="text-lg">Houston, Texas</span>
                            </div>
                        </div>
                        
                        {/* Contact Form */}
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 pt-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-dark-gray">Name</label>
                                <input type="text" id="name" {...register('name')} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-electric-teal focus:border-electric-teal bg-white text-dark-gray placeholder:text-gray-400" placeholder="Your Name" />
                                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
                            </div>
                             <div>
                                <label htmlFor="email" className="block text-sm font-medium text-dark-gray">Email</label>
                                <input type="email" id="email" {...register('email')} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-electric-teal focus:border-electric-teal bg-white text-dark-gray placeholder:text-gray-400" placeholder="you@company.com" />
                                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
                            </div>
                             <div>
                                <label htmlFor="businessType" className="block text-sm font-medium text-dark-gray">Business Type</label>
                                <select id="businessType" {...register('businessType')} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-electric-teal focus:border-electric-teal bg-white text-dark-gray">
                                    <option value="">Select one...</option>
                                    <option value="Coach">Coach</option>
                                    <option value="Consultant">Consultant</option>
                                    <option value="E-commerce">E-commerce</option>
                                    <option value="Real Estate">Real Estate</option>
                                    <option value="Other">Other</option>
                                </select>
                                {errors.businessType && <p className="mt-1 text-sm text-red-600">{errors.businessType.message}</p>}
                            </div>
                             <div>
                                <label htmlFor="message" className="block text-sm font-medium text-dark-gray">Message</label>
                                <textarea id="message" {...register('message')} rows={6} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-electric-teal focus:border-electric-teal bg-white text-dark-gray placeholder:text-gray-400" placeholder="How can we help?"></textarea>
                                {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
                            </div>
                            <button type="submit" disabled={isSubmitting} className="w-full bg-electric-teal text-white font-bold py-3 px-6 rounded-lg hover:bg-light-teal hover:text-deep-navy transition-all duration-300 disabled:bg-gray-400">
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                             {submissionStatus === 'success' && <p className="mt-2 text-sm text-center text-success-green">Thanks for reaching out! We’ll get back to you within 24 hours.</p>}
                             {submissionStatus === 'error' && <p className="mt-2 text-sm text-center text-red-600">Oops! Something went wrong. Please try again or email us directly.</p>}
                        </form>
                    </div>

                    {/* Right Column: Calendly */}
                    <div>
                         <h3 className="text-2xl font-semibold mb-4 font-heading">Or Book a Call Directly</h3>
                         <div className="bg-white rounded-lg shadow-2xl overflow-hidden border">
                            <InlineWidget 
                                url="https://calendly.com/ariolabs/ai-consultation-ph"
                                styles={{
                                    height: '750px',
                                    minWidth: '320px',
                                }}
                            />
                         </div>
                    </div>
                </div>
            </SectionWrapper>
        </div>
    );
};

export default ContactPage;
