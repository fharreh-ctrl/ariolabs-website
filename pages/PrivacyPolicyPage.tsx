
import React from 'react';

const PrivacyPolicyPage: React.FC = () => {
    return (
        <div className="bg-white">
            <header className="bg-soft-gray pt-24 pb-16">
                <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold font-heading text-deep-navy">Privacy Policy</h1>
                    <p className="text-lg text-dark-gray mt-4">Last Updated: October 27, 2025</p>
                </div>
            </header>
            <main className="py-16 md:py-24">
                <div className="container mx-auto max-w-4xl px-4 md:px-6 lg:px-8 space-y-8 text-lg text-dark-gray/90 leading-relaxed">
                    <section className="space-y-4">
                        <h2 className="text-3xl font-bold font-heading text-deep-navy">1. Information We Collect</h2>
                        <p>We collect information that you voluntarily provide to us through our contact forms or other direct communication. This may include:</p>
                        <ul className="list-disc list-inside pl-4 space-y-2">
                            <li>Your name</li>
                            <li>Your email address</li>
                            <li>Information about your business (e.g., business type)</li>
                            <li>Any other information you choose to provide in your message</li>
                        </ul>
                        <p>We may also collect non-personal data about your visit to our website, such as browser type, operating system, and pages visited, through tools like Google Analytics to help us improve our website and services.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-3xl font-bold font-heading text-deep-navy">2. How We Use Your Information</h2>
                        <p>We use the information we collect for the following purposes:</p>
                        <ul className="list-disc list-inside pl-4 space-y-2">
                            <li>To respond to your inquiries and provide you with the information or services you have requested.</li>
                            <li>To understand our audience and improve our website, services, and marketing efforts.</li>
                            <li>To send you occasional updates, newsletters, or marketing materials, but only if you have given us your explicit consent to do so. You may opt out at any time.</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-3xl font-bold font-heading text-deep-navy">3. Data Security</h2>
                        <p>We are committed to protecting your information. We implement industry-standard security measures to prevent unauthorized access, disclosure, alteration, or destruction of your personal data. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee its absolute security.</p>
                        <p>We will never sell, rent, or lease your personal information to third parties.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-3xl font-bold font-heading text-deep-navy">4. Cookies</h2>
                        <p>Our website may use "cookies" to enhance user experience. A cookie is a small file placed on your device. We use cookies for purposes such as website analytics. You can set your web browser to refuse cookies or to alert you when cookies are being sent. If you do so, note that some parts of the site may not function properly.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-3xl font-bold font-heading text-deep-navy">5. Your Rights</h2>
                        <p>You have the right to access, update, or request deletion of your personal information that we hold. To make such a request, please contact us at the email address provided below.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-3xl font-bold font-heading text-deep-navy">6. Contact Us</h2>
                        <p>If you have any questions about this Privacy Policy, please contact us:</p>
                        <ul className="list-disc list-inside pl-4 space-y-2">
                            <li><strong>Email:</strong> info@ariolabs.tech</li>
                            <li><strong>Location:</strong> Houston, Texas</li>
                        </ul>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default PrivacyPolicyPage;
