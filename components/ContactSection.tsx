'use client'

import { motion } from 'framer-motion'
import { FiMail, FiLinkedin, FiFacebook, FiTwitter, FiSend } from 'react-icons/fi'
import { useState } from 'react'

// Import data
import contactData from '@/data/contact.json'

// Define TypeScript interfaces
interface ContactMethod {
    icon: string
    title: string
    value: string
    href: string
}

interface ContactFormFields {
    name: { label: string; placeholder: string }
    email: { label: string; placeholder: string }
    subject: { label: string; placeholder: string }
    message: { label: string; placeholder: string }
}

interface ContactData {
    title: string
    description: string
    contactInfo: {
        title: string
        methods: ContactMethod[]
    }
    availability: {
        title: string
        status: string
        description: string
    }
    contactForm: {
        title: string
        fields: ContactFormFields
        submitButton: {
            text: string
            sendingText: string
            successMessage: string
            errorMessage: string
        }
    }
    privacyNotice: string
}

export default function ContactSection() {
    const data = contactData as ContactData

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

    // Icon mapping
    const iconMap: Record<string, React.ReactNode> = {
        FiMail: <FiMail />,
        FiLinkedin: <FiLinkedin />,
        FiFacebook: <FiFacebook />,
        FiTwitter: <FiTwitter />,
        FiSend: <FiSend />
    }

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

    return (
        <section id="contact" className="section-container bg-gradient-to-b from-white to-[var(--color-gold-50)]">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-6 gradient-text">{data.title}</h2>
                    <p className="text-xl text-[var(--color-primary-gray)] max-w-3xl mx-auto">
                        {data.description}
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold mb-8 gradient-text">{data.contactInfo.title}</h3>

                        <div className="space-y-6 mb-12">
                            {data.contactInfo.methods.map((method, index) => (
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
                                        <div className="text-xl text-[var(--color-gold-600)]">
                                            {iconMap[method.icon] || <FiMail />}
                                        </div>
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
                            <h4 className="font-bold text-lg mb-3 text-[var(--color-primary-dark)]">{data.availability.title}</h4>
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="font-medium">{data.availability.status}</span>
                            </div>
                            <p className="text-sm text-[var(--color-primary-gray)]">
                                {data.availability.description}
                            </p>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold mb-8 gradient-text">{data.contactForm.title}</h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-[var(--color-primary-dark)] mb-2">
                                        {data.contactForm.fields.name.label}
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-[var(--color-gold-300)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-gold-500)] focus:border-transparent bg-white"
                                        placeholder={data.contactForm.fields.name.placeholder}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-[var(--color-primary-dark)] mb-2">
                                        {data.contactForm.fields.email.label}
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-[var(--color-gold-300)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-gold-500)] focus:border-transparent bg-white"
                                        placeholder={data.contactForm.fields.email.placeholder}
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-[var(--color-primary-dark)] mb-2">
                                    {data.contactForm.fields.subject.label}
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-[var(--color-gold-300)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-gold-500)] focus:border-transparent bg-white"
                                    placeholder={data.contactForm.fields.subject.placeholder}
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-[var(--color-primary-dark)] mb-2">
                                    {data.contactForm.fields.message.label}
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={6}
                                    className="w-full px-4 py-3 border border-[var(--color-gold-300)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-gold-500)] focus:border-transparent bg-white resize-none"
                                    placeholder={data.contactForm.fields.message.placeholder}
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
                                        {data.contactForm.submitButton.sendingText}
                                    </>
                                ) : (
                                    <>
                                        {iconMap.FiSend} {data.contactForm.submitButton.text}
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
                                    {data.contactForm.submitButton.successMessage}
                                </motion.div>
                            )}

                            {submitStatus === 'error' && (
                                <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-center">
                                    {data.contactForm.submitButton.errorMessage}
                                </div>
                            )}
                        </form>

                        {/* Privacy Notice */}
                        <div className="mt-8 p-4 bg-[var(--color-gold-50)] rounded-lg border border-[var(--color-gold-200)]">
                            <p className="text-sm text-[var(--color-primary-gray)] text-center">
                                {data.privacyNotice}
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}