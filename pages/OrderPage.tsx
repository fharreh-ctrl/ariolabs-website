
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useSearchParams, Link } from 'react-router-dom';
import { ArrowLeft, Send } from 'lucide-react';

const orderSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  businessType: z.string().min(1, 'Please select a business type'),
  selectedPackage: z.string().min(1, 'Please select a package'),
  projectDetails: z.string().min(10, 'Details must be at least 10 characters'),
});

type OrderFormInputs = z.infer<typeof orderSchema>;

const usPackages = ["Pilot Sprint", "Quick Win Automation", "Department Suite"];
const phPackages = ["Starter Pack", "Growth Engine", "Business OS"];
const allPackages = [...usPackages, ...phPackages];

const OrderPage: React.FC = () => {
    const [searchParams] = useSearchParams();
    const packageName = searchParams.get('package') || '';
    
    const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<OrderFormInputs>({
        resolver: zodResolver(orderSchema),
        defaultValues: {
            selectedPackage: allPackages.includes(packageName) ? packageName : '',
            name: '',
            email: '',
            phone: '',
            businessType: '',
            projectDetails: '',
        }
    });

    useEffect(() => {
        if (allPackages.includes(packageName)) {
            setValue('selectedPackage', packageName);
        }
    }, [packageName, setValue]);
    
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionStatus, setSubmissionStatus] = useState<'success' | 'error' | null>(null);

    const onSubmit = async (data: OrderFormInputs) => {
        setIsSubmitting(true);
        setSubmissionStatus(null);
        try {
            // IMPORTANT: Replace with your own Formspree form ID
            const response = await fetch('https://formspree.io/f/YOUR_ORDER_FORM_ID', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: JSON.stringify({
                    ...data,
                    _subject: `New ArioLabs Order: ${data.selectedPackage}`,
                }),
            });
            if (response.ok) {
                setSubmissionStatus('success');
                // Don't reset form, we are showing a success page
            } else {
                setSubmissionStatus('error');
            }
        } catch (error) {
            setSubmissionStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (submissionStatus === 'success') {
        return (
            <div className="bg-white py-24 md:py-32">
                 <div className="container mx-auto max-w-2xl px-4 md:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-bold font-heading text-success-green mb-4">Thank You!</h1>
                    <p className="text-lg text-dark-gray mb-8">Thank you for your submission! Our team will review and contact you within 24 hours.</p>
                    <Link to="/" className="inline-flex items-center bg-deep-navy text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors">
                        <ArrowLeft className="h-5 w-5 mr-2" />
                        Return to Homepage
                    </Link>
                 </div>
            </div>
        )
    }

    return (
        <div className="bg-white">
            <header className="bg-soft-gray pt-24 pb-16">
                 <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8 text-center">
                     <h1 className="text-4xl md:text-5xl font-bold font-heading text-deep-navy">Place Your Order</h1>
                     <p className="text-lg md:text-xl text-dark-gray mt-4">Fill out the form below to get started. We'll be in touch shortly!</p>
                 </div>
            </header>
            <main className="py-16 md:py-24">
                 <div className="container mx-auto max-w-2xl px-4 md:px-6 lg:px-8">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white p-8 border rounded-lg shadow-lg">
                        <div>
                            <label htmlFor="selectedPackage" className="block text-sm font-medium text-dark-gray">Selected Package</label>
                            <select id="selectedPackage" {...register('selectedPackage')} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-electric-teal focus:border-electric-teal bg-gray-100 text-dark-gray" required>
                                <option value="">Select a package...</option>
                                <optgroup label="U.S. Packages">
                                    {usPackages.map(p => <option key={p} value={p}>{p}</option>)}
                                </optgroup>
                                 <optgroup label="PH Packages">
                                    {phPackages.map(p => <option key={p} value={p}>{p}</option>)}
                                </optgroup>
                            </select>
                            {errors.selectedPackage && <p className="mt-1 text-sm text-red-600">{errors.selectedPackage.message}</p>}
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-dark-gray">Name</label>
                                <input type="text" id="name" {...register('name')} placeholder="John Doe" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-electric-teal focus:border-electric-teal bg-white text-dark-gray" />
                                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-dark-gray">Email</label>
                                <input type="email" id="email" {...register('email')} placeholder="you@company.com" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-electric-teal focus:border-electric-teal bg-white text-dark-gray" />
                                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-dark-gray">Phone Number <span className="text-gray-500">(Optional)</span></label>
                                <input type="tel" id="phone" {...register('phone')} placeholder="+1 (555) 123-4567" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-electric-teal focus:border-electric-teal bg-white text-dark-gray" />
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
                        </div>
                        
                        <div>
                           <label htmlFor="projectDetails" className="block text-sm font-medium text-dark-gray">Project Details</label>
                           <textarea id="projectDetails" {...register('projectDetails')} rows={6} placeholder="Tell us a bit about your business and the problem you're trying to solve..." className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-electric-teal focus:border-electric-teal bg-white text-dark-gray"></textarea>
                           {errors.projectDetails && <p className="mt-1 text-sm text-red-600">{errors.projectDetails.message}</p>}
                        </div>

                        <button type="submit" disabled={isSubmitting} className="w-full flex justify-center items-center bg-electric-teal text-white font-bold py-3 px-6 rounded-lg hover:bg-light-teal hover:text-deep-navy transition-all duration-300 disabled:bg-gray-400">
                            {isSubmitting ? 'Submitting...' : 'Submit Order'}
                            <Send className="h-5 w-5 ml-2" />
                        </button>
                        {submissionStatus === 'error' && <p className="mt-2 text-sm text-center text-red-600">Oops! Something went wrong. Please try again or email us directly at info@ariolabs.tech.</p>}
                    </form>
                 </div>
            </main>
        </div>
    );
};

export default OrderPage;
