
import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
        `py-2 text-base font-medium transition-colors hover:text-electric-teal ${isActive ? 'text-electric-teal' : 'text-white'}`;
    
    const mobileNavLinkClasses = ({ isActive }: { isActive: boolean }) =>
        `py-3 text-2xl font-medium transition-colors hover:text-electric-teal ${isActive ? 'text-electric-teal' : 'text-white'}`;

    const navLinks = [
        { to: '/', text: 'Home' },
        { to: '/case-studies', text: 'Case Studies' },
        { to: '/about', text: 'About' },
        { to: '/contact', text: 'Contact' },
    ];

    return (
        <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-deep-navy/90 shadow-lg backdrop-blur-sm' : 'bg-deep-navy'}`}>
            <div className={`container mx-auto max-w-7xl px-4 md:px-6 lg:px-8 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
                <div className="flex items-center justify-between">
                    <Link to="/" className="flex-shrink-0">
                         <img src="/images/logo.png" alt="ArioLabs - AI Automation Solutions" className={`transition-all duration-300 ${isScrolled ? 'h-10' : 'h-12'}`} />
                    </Link>
                    <nav className="hidden lg:flex items-center space-x-8">
                        {navLinks.slice(0, 1).map(link => (
                            <NavLink key={link.to} to={link.to} className={navLinkClasses}>
                                {link.text}
                            </NavLink>
                        ))}
                        <div className="relative" onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)}>
                            <button className="flex items-center py-2 text-base font-medium text-white transition-colors hover:text-electric-teal">
                                Services <ChevronDown className="ml-1 h-4 w-4" />
                            </button>
                            <AnimatePresence>
                                {isServicesOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                                    >
                                        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            <Link to="/us-businesses" className="block px-4 py-2 text-sm text-dark-gray hover:bg-soft-gray" role="menuitem">🇺🇸 U.S. Businesses</Link>
                                            <Link to="/ph-businesses" className="block px-4 py-2 text-sm text-dark-gray hover:bg-soft-gray" role="menuitem">🇵🇭 PH Businesses</Link>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                        {navLinks.slice(1).map(link => (
                            <NavLink key={link.to} to={link.to} className={navLinkClasses}>
                                {link.text}
                            </NavLink>
                        ))}
                    </nav>
                    <div className="hidden lg:block">
                        <Link to="/schedule" className="bg-electric-teal text-white font-bold py-3 px-6 rounded-lg hover:bg-light-teal hover:text-deep-navy transition-all duration-300 transform hover:scale-105">
                            Book Free Call
                        </Link>
                    </div>
                    <div className="lg:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: "-100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "-100%" }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="lg:hidden absolute top-full left-0 w-full bg-deep-navy h-screen"
                    >
                        <nav className="flex flex-col items-center justify-center h-full space-y-6 px-4">
                            {navLinks.map(link => (
                                <NavLink key={link.to} to={link.to} className={mobileNavLinkClasses} onClick={() => setIsOpen(false)}>
                                    {link.text}
                                </NavLink>
                            ))}
                            <div className="relative group text-center">
                                <span className="flex items-center justify-center py-3 text-2xl font-medium text-white">Services <ChevronDown className="ml-2 h-6 w-6" /></span>
                                <div className="mt-2 space-y-2">
                                    <Link to="/us-businesses" onClick={() => setIsOpen(false)} className="block text-xl text-white hover:text-electric-teal">🇺🇸 U.S. Businesses</Link>
                                    <Link to="/ph-businesses" onClick={() => setIsOpen(false)} className="block text-xl text-white hover:text-electric-teal">🇵🇭 PH Businesses</Link>
                                </div>
                            </div>
                             <Link to="/schedule" onClick={() => setIsOpen(false)} className="bg-electric-teal text-white font-bold py-4 px-8 rounded-lg hover:bg-light-teal hover:text-deep-navy transition-all duration-300 transform hover:scale-105 text-xl mt-8">
                                Book Free Call
                            </Link>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
