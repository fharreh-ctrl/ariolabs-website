import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-deep-navy text-white">
            <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <Link to="/">
                            <img src="/images/logo.png" alt="ArioLabs - AI Automation Solutions" className="h-12 brightness-0 invert" />
                        </Link>
                        <p className="text-sm text-gray-300">AI Automation for Small Businesses. Save time, scale faster.</p>
                        <p className="text-sm text-gray-300">Houston, Texas</p>
                        <p className="text-sm text-gray-300">+1 (346) 336-9252</p>
                    </div>

                    {/* Company Column */}
                    <div>
                        <h4 className="font-heading font-semibold text-lg mb-4">Company</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/about" className="hover:text-electric-teal transition-colors">About Us</Link></li>
                            <li><Link to="/case-studies" className="hover:text-electric-teal transition-colors">Case Studies</Link></li>
                            <li><Link to="/contact" className="hover:text-electric-teal transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Services Column */}
                    <div>
                        <h4 className="font-heading font-semibold text-lg mb-4">Services</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/us-businesses" className="hover:text-electric-teal transition-colors">U.S. Businesses</Link></li>
                            <li><Link to="/ph-businesses" className="hover:text-electric-teal transition-colors">PH Businesses</Link></li>
                        </ul>
                    </div>

                    {/* Legal Column */}
                    <div>
                        <h4 className="font-heading font-semibold text-lg mb-4">Legal</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/privacy-policy" className="hover:text-electric-teal transition-colors">Privacy Policy</Link></li>
                            <li><Link to="/terms-of-service" className="hover:text-electric-teal transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-700">
                <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center">
                    <p className="text-xs text-gray-400">&copy; {new Date().getFullYear()} ArioLabs. All rights reserved.</p>
                    <div className="flex space-x-4 mt-4 sm:mt-0">
                        <a href="https://www.linkedin.com/company/ariolabs" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-electric-teal transition-colors"><Linkedin size={20} /></a>
                        <a href="https://www.instagram.com/ARIOLABSOFFICIAL" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-electric-teal transition-colors"><Instagram size={20} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;