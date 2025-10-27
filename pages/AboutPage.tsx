
import React from 'react';
import SectionWrapper from '../components/SectionWrapper';

const AboutPage: React.FC = () => {
    return (
        <div className="bg-white">
            <header className="bg-deep-navy text-white pt-24 pb-16">
                 <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8 text-center">
                     <h1 className="text-4xl md:text-5xl font-bold font-heading">About ArioLabs</h1>
                     <p className="text-lg md:text-xl text-gray-300 mt-4">We empower small businesses with the power of AI automation.</p>
                 </div>
            </header>
            <SectionWrapper className="py-16 md:py-24">
                <div className="max-w-3xl mx-auto text-lg leading-relaxed space-y-6">
                    <h2 className="text-3xl font-bold font-heading text-deep-navy">Our Mission</h2>
                    <p>
                        At ArioLabs, we believe that the power of artificial intelligence and automation shouldn't be reserved for large corporations. Our mission is to democratize this technology, making it accessible, affordable, and easy to implement for small and medium-sized businesses in the United States and the Philippines.
                    </p>
                    <p>
                        We were founded on the principle that business owners should spend their time on what they do best—growing their business and serving their clients—not on repetitive, manual tasks. By building custom-tailored automation solutions, we help our clients reclaim their most valuable asset: their time.
                    </p>
                    <p>
                        Our team of experts is passionate about problem-solving and dedicated to delivering tangible results quickly. We don't just build workflows; we build efficiency engines that power growth and reduce stress.
                    </p>
                </div>
            </SectionWrapper>
        </div>
    );
};

export default AboutPage;
