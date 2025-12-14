'use client'

import { motion } from 'framer-motion'
import { FiLinkedin, FiFacebook, FiTwitter, FiMail, FiArrowUp } from 'react-icons/fi'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <footer className="bg-gradient-to-b from-primary-white to-gold-50 border-t border-gold-200">
            <div className="section-container">
                <div className="grid md:grid-cols-3 gap-12">
                    {/* Brand Column */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-gradient-to-br from-gold-500 to-gold-300 rounded-lg flex items-center justify-center">
                                <span className="text-primary-white font-bold text-xl">JD</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold gradient-text">Jedidiah David</h3>
                                <p className="text-sm text-primary-gray">Cybersecurity Expert</p>
                            </div>
                        </div>
                        <p className="text-primary-gray mb-6">
                            Creating secure, efficient, and reliable IT solutions with precision and innovation.
                        </p>
                        <div className="flex items-center gap-4">
                            <a href="https://www.linkedin.com/in/david-jedidiah-351b80320" target="_blank" rel="noopener noreferrer" className="p-2 bg-white border border-gold-200 rounded-lg text-primary-gray hover:text-gold-600 hover:border-gold-300 transition-colors">
                                <FiLinkedin size={20} />
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=61575943362946" target="_blank" rel="noopener noreferrer" className="p-2 bg-white border border-gold-200 rounded-lg text-primary-gray hover:text-gold-600 hover:border-gold-300 transition-colors">
                                <FiFacebook size={20} />
                            </a>
                            <a href="https://x.com/CyberNet_Jed" target="_blank" rel="noopener noreferrer" className="p-2 bg-white border border-gold-200 rounded-lg text-primary-gray hover:text-gold-600 hover:border-gold-300 transition-colors">
                                <FiTwitter size={20} />
                            </a>
                            <a href="mailto:davidjedidiah2016@gmail.com" className="p-2 bg-white border border-gold-200 rounded-lg text-primary-gray hover:text-gold-600 hover:border-gold-300 transition-colors">
                                <FiMail size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 gradient-text">Quick Links</h4>
                        <ul className="space-y-3">
                            {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a
                                        href={`#${item.toLowerCase()}`}
                                        className="text-primary-gray hover:text-gold-600 transition-colors flex items-center gap-2 group"
                                    >
                                        <span className="w-0 group-hover:w-2 h-0.5 bg-gold-500 transition-all duration-300"></span>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 gradient-text">Get In Touch</h4>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-gold-500/10 rounded-lg">
                                    <FiMail className="text-gold-600" />
                                </div>
                                <div>
                                    <p className="font-medium text-primary-dark">Email</p>
                                    <a href="mailto:davidjedidiah2016@gmail.com" className="text-primary-gray hover:text-gold-600 transition-colors">
                                        davidjedidiah2016@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-gold-200 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-primary-gray text-sm">
                        © {currentYear} Jedidiah Unekwu-Ojo David. All rights reserved.
                    </p>

                    <motion.button
                        onClick={scrollToTop}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-gold-500 text-primary-white rounded-full hover:bg-gold-600 transition-colors"
                    >
                        <FiArrowUp size={20} />
                    </motion.button>
                </div>
            </div>
        </footer>
    )
}