
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Inbox, Calendar, Clock, ChevronDown, ChevronUp } from 'lucide-react';
import { InlineWidget } from 'react-calendly';
import { Link } from 'react-router-dom';
import SectionWrapper from '../components/SectionWrapper';

const HeroImage: React.FC = () => (
    <div className="relative w-full h-full rounded-lg shadow-2xl overflow-hidden">
        <svg width="100%" height="100%" viewBox="0 0 600 500" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#0F172A', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#1E293B', stopOpacity: 1}} />
                </linearGradient>
                <filter id="blur" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="15" />
                </filter>
            </defs>
            <rect width="600" height="500" fill="url(#grad1)" />
            <g opacity="0.5">
                <circle cx="150" cy="150" r="100" fill="#06B6D4" opacity="0.3" filter="url(#blur)" />
                <circle cx="450" cy="350" r="120" fill="#67E8F9" opacity="0.2" filter="url(#blur)" />
                <path d="M 50 50 L 550 50 L 550 450 L 50 450 Z" stroke="#67E8F9" strokeWidth="2" fill="none" opacity="0.1" transform="rotate(15 300 250)" />
                <path d="M 100 100 L 500 100 L 500 400 L 100 400 Z" stroke="#06B6D4" strokeWidth="1" fill="none" opacity="0.2" transform="rotate(-10 300 250)" />
            </g>
        </svg>
    </div>
);


// --- Reusable Accordion Component ---
interface AccordionItemProps {
    title: string;
    children: React.ReactNode;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center text-left py-4 px-2"
            >
                <h3 className="text-lg md:text-xl font-medium">{title}</h3>
                {isOpen ? <ChevronUp /> : <ChevronDown />}
            </button>
            {isOpen && (
                <div className="pb-4 px-2 text-base text-dark-gray/80">
                    {children}
                </div>
            )}
        </div>
    );
};

const HomePage: React.FC = () => {

    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            {/* 1. Hero Section */}
            <section className="bg-gradient-to-br from-deep-navy to-[#1E293B] text-white py-24 md:py-32">
                <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
                    <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                        <p className="text-sm font-bold uppercase text-electric-teal tracking-widest mb-4">AI AUTOMATION FOR SMALL BUSINESSES</p>
                        <h1 className="text-5xl md:text-6xl font-bold font-heading leading-tight mb-6">Save 10+ Hours a Week Without Hiring More Staff</h1>
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">Affordable AI automation for U.S. and Asia-based businesses — delivered by expert teams in days, not months.</p>
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                            <Link to="/schedule" className="text-center bg-electric-teal text-white font-bold py-4 px-8 rounded-lg hover:bg-light-teal hover:text-deep-navy transition-all duration-300 transform hover:scale-105">
                                Book Free Strategy Session
                            </Link>
                            <button onClick={() => scrollTo('how-it-works')} className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-deep-navy transition-colors duration-300">
                                See How It Works
                            </button>
                        </div>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="hidden md:block">
                        <HeroImage />
                    </motion.div>
                </div>
            </section>

            {/* 2. Pain Point Validator Section */}
            <SectionWrapper className="py-16 md:py-24 bg-soft-gray" id="pain-points">
                <div className="text-center">
                    <h2 className="text-4xl md:text-5xl font-bold font-heading text-deep-navy mb-12">Are You Drowning In...</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-lg shadow-md text-center">
                            <Inbox className="mx-auto h-12 w-12 text-electric-teal mb-4" />
                            <h3 className="text-2xl font-semibold font-heading mb-2">Inbox Chaos</h3>
                            <p>Spending 2+ hours daily responding to the same questions and trying to keep track of leads.</p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-md text-center">
                            <Calendar className="mx-auto h-12 w-12 text-electric-teal mb-4" />
                            <h3 className="text-2xl font-semibold font-heading mb-2">Scheduling Hell</h3>
                            <p>Endless back-and-forth emails just to book a single call, leading to lost opportunities.</p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-md text-center">
                            <Clock className="mx-auto h-12 w-12 text-electric-teal mb-4" />
                            <h3 className="text-2xl font-semibold font-heading mb-2">Manual Busywork</h3>
                            <p>Copy-pasting data between tools, updating spreadsheets, and other repetitive tasks that drain your energy.</p>
                        </div>
                    </div>
                    <button onClick={() => scrollTo('services')} className="mt-12 bg-success-green text-white font-bold py-4 px-8 rounded-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105">
                        See Our Solutions
                    </button>
                </div>
            </SectionWrapper>

            {/* 3. Services Overview */}
            <SectionWrapper className="py-16 md:py-24 bg-white" id="services">
                <div className="text-center">
                    <h2 className="text-4xl md:text-5xl font-bold font-heading text-deep-navy mb-4">Choose Your Path</h2>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">Select your region to see pricing and services tailored for you.</p>
                    <div className="flex justify-center space-x-4 mb-12">
                        <Link to="/us-businesses" className="bg-deep-navy text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors">🇺🇸 U.S. Businesses</Link>
                        <Link to="/ph-businesses" className="bg-deep-navy text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors">🇵🇭 PH Businesses</Link>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 text-left">
                        <div className="border border-gray-200 rounded-lg p-8">
                            <h3 className="text-2xl font-bold font-heading mb-4">For U.S. Businesses</h3>
                            <p className="mb-4">Automate your client onboarding, lead management, and daily operations to reclaim your time and focus on growth.</p>
                            <ul className="list-disc list-inside space-y-2 mb-6">
                                <li>AI-Powered Inbox Management</li>
                                <li>Automated Scheduling & Follow-ups</li>
                                <li>Custom Workflow Automation</li>
                            </ul>
                            <Link to="/us-businesses" className="font-bold text-electric-teal hover:underline">View Packages &rarr;</Link>
                        </div>
                        <div className="border border-gray-200 rounded-lg p-8">
                            <h3 className="text-2xl font-bold font-heading mb-4">For PH Businesses</h3>
                            <p className="mb-4">Affordable automation solutions to streamline your processes, from customer support to sales, without the high cost.</p>
                            <ul className="list-disc list-inside space-y-2 mb-6">
                                <li>Automated Social Media Inquiries</li>
                                <li>E-commerce Order Processing</li>
                                <li>Local-Friendly Integrations</li>
                            </ul>
                            <Link to="/ph-businesses" className="font-bold text-electric-teal hover:underline">View Packages &rarr;</Link>
                        </div>
                    </div>
                </div>
            </SectionWrapper>

            {/* 4. How It Works Section */}
            <SectionWrapper className="py-16 md:py-24 bg-soft-gray" id="how-it-works">
                <div className="text-center">
                    <h2 className="text-4xl md:text-5xl font-bold font-heading text-deep-navy mb-16">How It Works in 4 Simple Steps</h2>
                    <div className="relative">
                        <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-300 -translate-y-1/2"></div>
                        <div className="grid md:grid-cols-4 gap-8">
                            {[
                                { step: 1, title: "Book a Call", desc: "Schedule a free strategy session to discuss your challenges and goals." },
                                { step: 2, title: "Get Your Blueprint", desc: "We map out a custom automation plan tailored to your specific business needs." },
                                { step: 3, title: "We Build It", desc: "Our team builds, tests, and deploys your new automated workflows in just a few days." },
                                { step: 4, title: "You Scale", desc: "Enjoy your newfound free time and watch your business run more efficiently than ever." },
                            ].map(item => (
                                <div key={item.step} className="text-center z-10">
                                    <div className="mx-auto w-16 h-16 rounded-full bg-electric-teal text-white flex items-center justify-center font-bold text-2xl mb-4">{item.step}</div>
                                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                    <p className="text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <Link to="/schedule" className="inline-block mt-16 bg-electric-teal text-white font-bold py-4 px-8 rounded-lg hover:bg-light-teal hover:text-deep-navy transition-all duration-300 transform hover:scale-105">
                        Ready to Start?
                    </Link>
                </div>
            </SectionWrapper>
            
            {/* 5. Testimonials Section */}
            <SectionWrapper className="py-16 md:py-24 bg-white">
                <div className="text-center">
                    <h2 className="text-4xl md:text-5xl font-bold font-heading text-deep-navy mb-12">What Our Clients Say</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { quote: "ArioLabs automated our entire lead follow-up process. We're now converting 30% more leads with zero extra effort.", name: "Jane D.", title: "Real Estate Coach" },
                            { quote: "I was spending 3 hours a day just scheduling calls. Now it's completely automated. It's like I hired a full-time assistant for a fraction of the cost.", name: "Mike R.", title: "Business Consultant" },
                            { quote: "The team was incredible. They understood our unique needs and delivered a solution that saved us over 15 hours a week in manual data entry.", name: "Sarah L.", title: "E-commerce Store Owner" },
                        ].map((t) => {
                            const nameForAvatar = t.name.replace(/\./g, '').replace(/\s/g, '+');
                            return (
                             <div key={t.name} className="bg-soft-gray p-8 rounded-lg text-left">
                                 <img src={`https://ui-avatars.com/api/?name=${nameForAvatar}&background=06B6D4&color=fff&size=128`} alt={t.name} className="w-16 h-16 rounded-full mb-4" />
                                 <p className="text-lg mb-4 leading-relaxed">"{t.quote}"</p>
                                 <p className="font-bold">{t.name}</p>
                                 <p className="text-sm text-gray-500">{t.title}</p>
                             </div>
                            )
                        })}
                    </div>
                </div>
            </SectionWrapper>
            
            {/* 6. FAQ Section */}
            <SectionWrapper className="py-16 md:py-24 bg-soft-gray">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold font-heading text-deep-navy mb-12 text-center">Frequently Asked Questions</h2>
                    <AccordionItem title="How long does it take to get started?">
                        Most projects are completed within 7-14 days from our initial strategy call. We prioritize speed and efficiency to get you results fast.
                    </AccordionItem>
                    <AccordionItem title="What kind of software do you automate?">
                        We work with a wide range of popular tools like Zapier, Make, ActiveCampaign, HubSpot, Calendly, Google Workspace, and many more. If you use it, we can likely automate it.
                    </AccordionItem>
                    <AccordionItem title="Is this only for tech-savvy business owners?">
                        Absolutely not! Our solutions are designed for you to be completely hands-off. We handle all the technical setup and provide simple instructions for you and your team.
                    </AccordionItem>
                     <AccordionItem title="What's the ROI I can expect?">
                        Most clients save 10+ hours per week, which translates to thousands of dollars in reclaimed productivity. Plus, automated systems mean fewer missed leads and happier customers.
                    </AccordionItem>
                    <AccordionItem title="Do you offer ongoing support?">
                        Yes, we offer optional support and maintenance packages to ensure your automations continue to run smoothly as your business evolves.
                    </AccordionItem>
                </div>
            </SectionWrapper>

            {/* 7. Final CTA Section */}
            <section className="bg-gradient-to-tr from-electric-teal to-deep-navy text-white py-16 md:py-24">
                 <div className="container mx-auto max-w-4xl px-4 md:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">Ready to Automate Your Business?</h2>
                    <p className="text-lg md:text-xl text-gray-200 mb-8">Book a free, no-obligation 20-minute strategy session to discover how much time and money you could be saving with AI automation.</p>
                     <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
                        <InlineWidget 
                            url="https://calendly.com/ariolabs/ai-consultation-ph"
                            styles={{
                                height: '700px',
                                minWidth: '320px',
                            }}
                        />
                     </div>
                 </div>
            </section>
        </>
    );
};

export default HomePage;
