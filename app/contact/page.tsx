'use client'

import { motion } from 'framer-motion'
import { FiMail, FiLinkedin, FiFacebook, FiTwitter, FiSend, FiMapPin, FiPhone } from 'react-icons/fi'
import { useState } from 'react'

export default function ContactPage() {
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

    const contactInfo = [
        {
            icon: <FiMail />,
            title: 'Email',
            value: 'davidjedidiah2016@gmail.com',
            href: 'mailto:davidjedidiah2016@gmail.com',
            description: 'Primary contact method'
        },
        {
            icon: <FiLinkedin />,
            title: 'LinkedIn',
            value: 'David Jedidiah',
            href: 'https://www.linkedin.com/in/david-jedidiah-351b80320',
            description: 'Professional network'
        },
        {
            icon: <FiFacebook />,
            title: 'Facebook',
            value: 'David Jedidiah',
            href: 'https://www.facebook.com/profile.php?id=61575943362946',
            description: 'Social connection'
        },
        {
            icon: <FiTwitter />,
            title: 'Twitter',
            value: '@CyberNet_Jed',
            href: 'https://x.com/CyberNet_Jed',
            description: 'Tech updates & insights'
        },
        {
            icon: <FiMapPin />,
            title: 'Location',
            value: 'Lagos, Nigeria',
            href: '#',
            description: 'Based in West Africa'
        },
        {
            icon: <FiPhone />,
            title: 'Availability',
            value: 'Mon - Fri, 9AM - 6PM',
            href: '#',
            description: 'WAT Timezone'
        }
    ]

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-b from-[var(--color-gold-50)] to-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        <h1 className="text-5xl lg:text-6xl font-bold mb-6 gradient-text">Contact Me</h1>
                        <p className="text-xl text-[var(--color-primary-gray)] max-w-3xl mx-auto">
                            Let&apos;s discuss your cybersecurity needs, network infrastructure challenges, or potential collaborations
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Contact Information */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="lg:col-span-1"
                        >
                            <h2 className="text-3xl font-bold mb-8 gradient-text">Get In Touch</h2>

                            <div className="space-y-6 mb-12">
                                {contactInfo.map((info, index) => (
                                    <motion.a
                                        key={info.title}
                                        href={info.href}
                                        target={info.href.startsWith('http') ? '_blank' : undefined}
                                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ x: 10 }}
                                        className="flex items-start p-4 bg-white rounded-xl border border-[var(--color-gold-200)] hover:border-[var(--color-gold-400)] transition-colors group"
                                    >
                                        <div className="p-3 bg-[var(--color-gold-500)]/10 rounded-lg mr-4 group-hover:bg-[var(--color-gold-500)]/20 transition-colors">
                                            <div className="text-xl text-[var(--color-gold-600)]">{info.icon}</div>
                                        </div>
                                        <div>
                                            <div className="font-semibold text-[var(--color-primary-dark)]">{info.title}</div>
                                            <div className="text-[var(--color-primary-gray)]">{info.value}</div>
                                            <div className="text-sm text-[var(--color-primary-gray)]/70 mt-1">{info.description}</div>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>

                            {/* Response Time */}
                            <div className="bg-gradient-to-r from-[var(--color-gold-500)]/10 to-transparent p-6 rounded-xl border border-[var(--color-gold-300)]">
                                <h4 className="font-bold text-lg mb-3 text-[var(--color-primary-dark)]">Response Time</h4>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-[var(--color-primary-gray)]">Urgent Matters</span>
                                        <span className="font-semibold text-[var(--color-gold-600)]">Within 24 hours</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-[var(--color-primary-gray)]">General Inquiries</span>
                                        <span className="font-semibold text-[var(--color-gold-600)]">1-2 business days</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-[var(--color-primary-gray)]">Project Discussions</span>
                                        <span className="font-semibold text-[var(--color-gold-600)]">Scheduled calls</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="lg:col-span-2"
                        >
                            <div className="bg-white rounded-xl border border-[var(--color-gold-200)] p-8 shadow-lg">
                                <h2 className="text-3xl font-bold mb-2 gradient-text">Send a Message</h2>
                                <p className="text-[var(--color-primary-gray)] mb-8">
                                    Fill out the form below and I&apos;ll get back to you as soon as possible
                                </p>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-[var(--color-primary-dark)] mb-2">
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 border border-[var(--color-gold-300)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-gold-500)] focus:border-transparent bg-white transition-colors"
                                                placeholder="Jedidiah Unekwu-Ojo David"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-[var(--color-primary-dark)] mb-2">
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 border border-[var(--color-gold-300)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-gold-500)] focus:border-transparent bg-white transition-colors"
                                                placeholder="davidjedidiah2016@gmail.com"
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
                                            className="w-full px-4 py-3 border border-[var(--color-gold-300)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-gold-500)] focus:border-transparent bg-white transition-colors"
                                            placeholder="Project inquiry, consultation, or collaboration"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-[var(--color-primary-dark)] mb-2">
                                            Your Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={8}
                                            className="w-full px-4 py-3 border border-[var(--color-gold-300)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-gold-500)] focus:border-transparent bg-white transition-colors resize-none"
                                            placeholder="Tell me about your project, security concerns, or how I can help secure your infrastructure..."
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
                                                Sending Message...
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
                                            ✅ Message sent successfully! I&apos;ll get back to you within 24 hours.
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
                            </div>

                            {/* Services Overview */}
                            <div className="mt-12">
                                <h3 className="text-2xl font-bold mb-6 gradient-text">Services I Provide</h3>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {[
                                        { title: 'Network Security Assessment', desc: 'Comprehensive security evaluation of your network infrastructure' },
                                        { title: 'System Administration', desc: 'Windows/Linux server management and optimization' },
                                        { title: 'Cybersecurity Consulting', desc: 'Strategic advice on security posture and threat mitigation' },
                                        { title: 'Infrastructure Setup', desc: 'Design and implementation of secure network architectures' },
                                    ].map((service, index) => (
                                        <div key={index} className="bg-white p-6 rounded-xl border border-[var(--color-gold-200)]">
                                            <h4 className="font-bold text-[var(--color-primary-dark)] mb-2">{service.title}</h4>
                                            <p className="text-sm text-[var(--color-primary-gray)]">{service.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    )
}