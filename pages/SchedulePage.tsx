
import React from 'react';
import { InlineWidget } from 'react-calendly';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const SchedulePage: React.FC = () => {
    return (
        <div className="bg-white">
            <header className="bg-soft-gray pt-24 pb-16">
                 <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8 text-center">
                     <h1 className="text-4xl md:text-5xl font-bold font-heading text-deep-navy">Book Your Free Strategy Session</h1>
                     <p className="text-lg md:text-xl text-dark-gray mt-4 max-w-2xl mx-auto">Schedule a quick 20-minute AI consultation call with our team to discover your automation opportunities.</p>
                 </div>
            </header>
            <main className="py-16 md:py-24">
                 <div className="container mx-auto max-w-4xl px-4 md:px-6 lg:px-8">
                     <Link to="/" className="inline-flex items-center text-electric-teal font-bold mb-8 hover:underline">
                         <ArrowLeft className="h-4 w-4 mr-2" />
                         Back to Home
                     </Link>
                     <div className="bg-white rounded-lg shadow-2xl overflow-hidden border">
                        <InlineWidget 
                            url="https://calendly.com/ariolabs/ai-consultation-ph"
                            styles={{
                                height: '700px',
                                minWidth: '320px',
                            }}
                        />
                     </div>
                 </div>
            </main>
        </div>
    );
};

export default SchedulePage;
