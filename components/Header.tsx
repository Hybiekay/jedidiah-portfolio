'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiMenu, FiX, FiLinkedin, FiFacebook, FiTwitter } from 'react-icons/fi'
import Link from 'next/link'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const [hasScrolled, setHasScrolled] = useState(false)

    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Projects', href: '/projects' },
        { name: 'Contact', href: '/contact' },
    ]

    // Detect scroll to add shadow
    useEffect(() => {
        const handleScroll = () => {
            setHasScrolled(window.scrollY > 10)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`sticky top-0 z-50 bg-[var(--color-primary-white)]/90 backdrop-blur-sm border-b border-[var(--color-gold-200)] transition-shadow duration-300 ${hasScrolled ? 'shadow-sm' : 'shadow-none'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                            className="w-8 h-8 bg-gradient-to-br from-[var(--color-gold-500)] to-[var(--color-gold-300)] rounded-lg flex items-center justify-center"
                        >
                            <span className="text-[var(--color-primary-dark)] font-bold text-sm">JD</span>
                        </motion.div>
                        <div className="hidden sm:block">
                            <h1 className="text-lg font-bold gradient-text leading-tight">Jedidiah David</h1>
                            <p className="text-xs text-[var(--color-primary-gray)] leading-tight">Cybersecurity Expert</p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-6">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-sm text-[var(--color-primary-gray)] hover:text-[var(--color-gold-600)] transition-colors font-medium relative group py-2"
                            >
                                {item.name}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--color-gold-500)] group-hover:w-full transition-all duration-300"></span>
                            </Link>
                        ))}
                        <div className="flex items-center gap-3 pl-6 border-l border-[var(--color-gold-200)]">
                            <a
                                href="https://www.linkedin.com/in/david-jedidiah-351b80320"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[var(--color-primary-gray)] hover:text-[var(--color-gold-600)] transition-colors p-1"
                            >
                                <FiLinkedin size={18} />
                            </a>
                            <a
                                href="https://www.facebook.com/profile.php?id=61575943362946"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[var(--color-primary-gray)] hover:text-[var(--color-gold-600)] transition-colors p-1"
                            >
                                <FiFacebook size={18} />
                            </a>
                            <a
                                href="https://x.com/CyberNet_Jed"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[var(--color-primary-gray)] hover:text-[var(--color-gold-600)] transition-colors p-1"
                            >
                                <FiTwitter size={18} />
                            </a>
                        </div>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-[var(--color-primary-gray)] hover:text-[var(--color-gold-600)] transition-colors p-1"
                    >
                        {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden mt-3 pb-3"
                    >
                        <div className="flex flex-col gap-2">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-[var(--color-primary-gray)] hover:text-[var(--color-gold-600)] transition-colors font-medium py-2 px-2 hover:bg-[var(--color-gold-50)] rounded"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="flex items-center gap-4 pt-3 mt-2 border-t border-[var(--color-gold-200)]">
                                <a
                                    href="https://www.linkedin.com/in/david-jedidiah-351b80320"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[var(--color-primary-gray)] hover:text-[var(--color-gold-600)] transition-colors p-2"
                                >
                                    <FiLinkedin size={20} />
                                </a>
                                <a
                                    href="https://www.facebook.com/profile.php?id=61575943362946"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[var(--color-primary-gray)] hover:text-[var(--color-gold-600)] transition-colors p-2"
                                >
                                    <FiFacebook size={20} />
                                </a>
                                <a
                                    href="https://x.com/CyberNet_Jed"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[var(--color-primary-gray)] hover:text-[var(--color-gold-600)] transition-colors p-2"
                                >
                                    <FiTwitter size={20} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </div>
        </motion.header>
    )
}