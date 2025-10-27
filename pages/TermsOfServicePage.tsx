
import React from 'react';

const TermsOfServicePage: React.FC = () => {
    return (
        <div className="bg-white">
            <header className="bg-soft-gray pt-24 pb-16">
                <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold font-heading text-deep-navy">Terms of Service</h1>
                    <p className="text-lg text-dark-gray mt-4">Last Updated: October 27, 2025</p>
                </div>
            </header>
            <main className="py-16 md:py-24">
                <div className="container mx-auto max-w-4xl px-4 md:px-6 lg:px-8 space-y-8 text-lg text-dark-gray/90 leading-relaxed">
                    <section className="space-y-4">
                        <h2 className="text-3xl font-bold font-heading text-deep-navy">1. Acceptance of Terms</h2>
                        <p>By accessing and using the ArioLabs website (the "Site"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use this Site.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-3xl font-bold font-heading text-deep-navy">2. Services Description</h2>
                        <p>ArioLabs provides AI automation consulting and implementation services ("Services"). Our services include project-based work and retainer agreements designed to help businesses automate their processes. All services are detailed in a separate Statement of Work (SOW) or client agreement.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-3xl font-bold font-heading text-deep-navy">3. Payment Terms</h2>
                        <p>Fees for our Services are due as specified in the client agreement or invoice. Typically, payment is required before project work begins. We may offer specific guarantees on our services, which will be explicitly stated in the SOW. Refund policies, if any, will be governed by the terms of the individual client agreement.</p>
                    </section>
                    
                    <section className="space-y-4">
                        <h2 className="text-3xl font-bold font-heading text-deep-navy">4. Intellectual Property</h2>
                        <p>Upon full payment, the client owns the final, delivered work product (e.g., the specific automation workflows we build for you). However, ArioLabs retains all rights to our underlying methodologies, processes, and pre-existing intellectual property used to create the deliverables.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-3xl font-bold font-heading text-deep-navy">5. Limitation of Liability</h2>
                        <p>Our services are provided "as is" without warranty of any kind. In no event shall ArioLabs be liable for any direct, indirect, incidental, special, or consequential damages (including, but not limited to, loss of profits, business interruption, or loss of data) arising out of the use or inability to use our services, even if we have been advised of the possibility of such damages.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-3xl font-bold font-heading text-deep-navy">6. Governing Law</h2>
                        <p>This agreement shall be governed by and construed in accordance with the laws of the State of Texas, without regard to its conflict of law provisions.</p>
                    </section>
                    
                    <section className="space-y-4">
                        <h2 className="text-3xl font-bold font-heading text-deep-navy">7. Contact Us</h2>
                        <p>If you have any questions about these Terms of Service, please contact us:</p>
                        <ul className="list-disc list-inside pl-4 space-y-2">
                             <li><strong>Email:</strong> info@ariolabs.tech</li>
                        </ul>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default TermsOfServicePage;
