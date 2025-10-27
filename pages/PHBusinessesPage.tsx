
import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';

const PricingCard: React.FC<{ title: string, price: string, description: string, features: string[], featured?: boolean }> = ({ title, price, description, features, featured }) => {
    return (
        <div className={`border rounded-lg p-8 flex flex-col ${featured ? 'border-electric-teal border-2 transform scale-105 shadow-2xl bg-white' : 'border-gray-200 bg-gray-50'}`}>
            {featured && <span className="bg-electric-teal text-white text-xs font-bold uppercase px-3 py-1 rounded-full self-start mb-4">Most Popular</span>}
            <h3 className="text-2xl font-bold font-heading mb-2">{title}</h3>
            <p className="text-4xl font-bold mb-4">₱{price}</p>
            <p className="text-gray-600 mb-6">{description}</p>
            <ul className="space-y-3 mb-8 flex-grow">
                {features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-success-green mr-2 flex-shrink-0 mt-1" />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
            <Link to={`/order?package=${encodeURIComponent(title)}`} className={`w-full mt-auto text-center font-bold py-3 px-6 rounded-lg transition-all duration-300 ${featured ? 'bg-electric-teal text-white hover:bg-light-teal hover:text-deep-navy' : 'bg-deep-navy text-white hover:bg-gray-700'}`}>
                Simulan Na!
            </Link>
        </div>
    );
};

const PHBusinessesPage: React.FC = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="bg-deep-navy text-white pt-24 pb-16">
                <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold font-heading leading-tight mb-4">Pagod na sa Manual na Trabaho? Automate na para Lumago!</h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">Tinutulungan namin ang mga SMEs sa Pilipinas na makatipid ng oras at pera. AI automation na abot-kaya at madaling intindihin, walang overcomplication.</p>
                    <Link to="/schedule" className="bg-electric-teal text-white font-bold py-4 px-8 rounded-lg hover:bg-light-teal hover:text-deep-navy transition-all duration-300 transform hover:scale-105">
                        Book Free Assessment
                    </Link>
                </div>
            </section>
            
            {/* Pricing Section */}
            <SectionWrapper className="py-16 md:py-24 bg-soft-gray">
                 <div className="text-center mb-16">
                     <h2 className="text-4xl md:text-5xl font-bold font-heading text-deep-navy mb-4">Affordable Packages Para Sa'yo</h2>
                     <p className="text-lg md:text-xl text-dark-gray max-w-3xl mx-auto">Pumili ng package na swak sa budget at pangangailangan ng iyong negosyo.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8 items-stretch">
                    <PricingCard 
                        title="Starter Pack"
                        price="15,000"
                        description="Solusyon para sa isang paulit-ulit na gawain."
                        features={["1 Core Automation", "Strategy Call", "FB Messenger/IG DM Integration", "Delivery in 3 Days"]}
                    />
                    <PricingCard 
                        title="Growth Engine"
                        price="80,000"
                        description="Pinaka-sikat na package para i-level up ang iyong sales at operations."
                        features={["Hanggang 3 Core Automations", "Automated Lead Follow-up", "E-commerce Order Processing", "30 Days Support", "Delivery in 7 Days"]}
                        featured
                    />
                    <PricingCard 
                        title="Business OS"
                        price="150,000"
                        description="Buong automation system para sa isang department."
                        features={["Unlimited Automations (1 Dept.)", "Custom System Integration", "Sales & Ops Dashboard", "Team Training", "60 Days Priority Support"]}
                    />
                </div>
            </SectionWrapper>
        </>
    );
};

export default PHBusinessesPage;
