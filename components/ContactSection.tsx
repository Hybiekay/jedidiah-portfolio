'use client'

import { motion } from 'framer-motion'
import { FiMail, FiLinkedin, FiFacebook, FiTwitter, FiSend } from 'react-icons/fi'
import { useState } from 'react'

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false)
            setSubmitStatus('success')
            setFormData({ name: '', email: '', subject: '', message: '' })

            // Reset status after 5 seconds
            setTimeout(() => setSubmitStatus('idle'), 5000)
        }, 1500)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const contactMethods = [
        {
            icon: <FiMail />,
            title: 'Email',
            value: 'davidjedidiah2016@gmail.com',
            href: 'mailto:davidjedidiah2016@gmail.com'
        },
        {
            icon: <FiLinkedin />,
            title: 'LinkedIn',
            value: 'David Jedidiah',
            href: 'https://www.linkedin.com/in/david-jedidiah-351b80320'
        },
        {
            icon: <FiFacebook />,
            title: 'Facebook',
            value: 'David Jedidiah',
            href: 'https://www.facebook.com/profile.php?id=61575943362946'
        },
        {
            icon: <FiTwitter />,
            title: 'Twitter',
            value: '@CyberNet_Jed',
            href: 'https://x.com/CyberNet_Jed'
        }
    ]

    return (
        <section id="contact" className="section-container bg-gradient-to-b from-white to-[var(--color-gold-50)]">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-6 gradient-text">Get In Touch</h2>
                    <p className="text-xl text-[var(--color-primary-gray)] max-w-3xl mx-auto">
                        Interested in collaborating or have a security challenge? Let&apos;s discuss how I can help secure your infrastructure.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold mb-8 gradient-text">Contact Information</h3>

                        <div className="space-y-6 mb-12">
                            {contactMethods.map((method, index) => (
                                <motion.a
                                    key={method.title}
                                    href={method.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ x: 10 }}
                                    className="flex items-center p-4 bg-white rounded-xl border border-[var(--color-gold-200)] hover:border-[var(--color-gold-400)] transition-colors group"
                                >
                                    <div className="p-3 bg-[var(--color-gold-500)]/10 rounded-lg mr-4 group-hover:bg-[var(--color-gold-500)]/20 transition-colors">
                                        <div className="text-xl text-[var(--color-gold-600)]">{method.icon}</div>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-[var(--color-primary-dark)]">{method.title}</div>
                                        <div className="text-[var(--color-primary-gray)]">{method.value}</div>
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        {/* Availability Status */}
                        <div className="bg-gradient-to-r from-[var(--color-gold-500)]/10 to-transparent p-6 rounded-xl border border-[var(--color-gold-300)]">
                            <h4 className="font-bold text-lg mb-3 text-[var(--color-primary-dark)]">Availability</h4>
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="font-medium">Available for new projects</span>
                            </div>
                            <p className="text-sm text-[var(--color-primary-gray)]">
                                Typically responds within 24 hours for urgent security matters
                            </p>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold mb-8 gradient-text">Send a Message</h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-[var(--color-primary-dark)] mb-2">
                                        Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-[var(--color-gold-300)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-gold-500)] focus:border-transparent bg-white"
                                        placeholder="Your name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-[var(--color-primary-dark)] mb-2">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-[var(--color-gold-300)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-gold-500)] focus:border-transparent bg-white"
                                        placeholder="your.email@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-[var(--color-primary-dark)] mb-2">
                                    Subject *
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-[var(--color-gold-300)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-gold-500)] focus:border-transparent bg-white"
                                    placeholder="Project inquiry or consultation"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-[var(--color-primary-dark)] mb-2">
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={6}
                                    className="w-full px-4 py-3 border border-[var(--color-gold-300)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-gold-500)] focus:border-transparent bg-white resize-none"
                                    placeholder="Tell me about your project or security needs..."
                                />
                            </div>

                            {/* Submit Button */}
                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-3 ${isSubmitting
                                        ? 'bg-[var(--color-gold-400)] cursor-not-allowed'
                                        : 'bg-[var(--color-gold-500)] hover:bg-[var(--color-gold-600)] text-[var(--color-primary-dark)]'
                                    }`}
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <FiSend /> Send Message
                                    </>
                                )}
                            </motion.button>

                            {/* Status Message */}
                            {submitStatus === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-center"
                                >
                                    ✅ Message sent successfully! I&apos;ll get back to you soon.
                                </motion.div>
                            )}

                            {submitStatus === 'error' && (
                                <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-center">
                                    ❌ Something went wrong. Please try again or email me directly.
                                </div>
                            )}
                        </form>

                        {/* Privacy Notice */}
                        <div className="mt-8 p-4 bg-[var(--color-gold-50)] rounded-lg border border-[var(--color-gold-200)]">
                            <p className="text-sm text-[var(--color-primary-gray)] text-center">
                                Your information is secure and will only be used to respond to your inquiry.
                                I follow strict data protection protocols in line with cybersecurity best practices.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}