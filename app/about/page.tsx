"use client"

import { motion } from 'framer-motion'
import { FiTarget, FiUsers, FiTrendingUp, FiAward, FiBriefcase, FiClock } from 'react-icons/fi'
import Link from 'next/link'

export default function AboutPage() {
    const experience = [
        { year: '2024-Present', role: 'Senior Security Engineer', company: 'Tech Security Corp', duration: '1 year' },
        { year: '2022-2024', role: 'Network Administrator', company: 'Global Networks Inc', duration: '2 years' },
        { year: '2020-2022', role: 'IT Support Specialist', company: 'Data Systems Ltd', duration: '2 years' },
        { year: '2018-2020', role: 'Junior Network Analyst', company: 'Startup Tech Ventures', duration: '2 years' },
    ]

    const certifications = [
        'CompTIA Security+',
        'Cisco Certified Network Associate (CCNA)',
        'Certified Ethical Hacker (CEH)',
        'Linux Professional Institute Certification (LPIC)',
        'AWS Certified Solutions Architect',
        'Microsoft Certified: Azure Fundamentals'
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
                        <h1 className="text-5xl lg:text-6xl font-bold mb-6 gradient-text">About Me</h1>
                        <p className="text-xl text-[var(--color-primary-gray)] max-w-3xl mx-auto">
                            Technology enthusiast with 5+ years of expertise in cybersecurity, network infrastructure, and IT systems administration
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Left Column - Biography */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            <h2 className="text-3xl font-bold mb-8 gradient-text">Professional Journey</h2>

                            <div className="space-y-6 text-[var(--color-primary-gray)] text-lg leading-relaxed">
                                <p>
                                    I am a technology enthusiast with comprehensive expertise in computer networking,
                                    network security, and IT systems administration with <span className="font-semibold text-[var(--color-gold-600)]">
                                        more than 5 years of professional experience</span>.
                                </p>

                                <p>
                                    My proficiency spans both wired and wireless network infrastructures, allowing me to
                                    design, implement, and maintain robust and efficient network environments. I am skilled
                                    in hardware and software troubleshooting, ensuring optimal performance and reliability
                                    across diverse computing systems.
                                </p>

                                <p>
                                    With extensive experience in both Windows and Linux operating systems, I can efficiently
                                    manage, configure, and secure enterprise-level environments. My cybersecurity focus is
                                    oriented towards the blue team, with practical experience in threat detection, incident
                                    response, and vulnerability management.
                                </p>

                                <p>
                                    I bring a problem-solving mindset combined with creativity and innovation, enabling me
                                    to deliver effective and secure IT solutions. Whether optimizing network performance,
                                    securing systems, or addressing technical challenges, I approach every task with precision,
                                    professionalism, and a commitment to continuous learning in the ever-evolving tech landscape.
                                </p>
                            </div>

                            {/* Values */}
                            <div className="mt-12">
                                <h3 className="text-2xl font-bold mb-6 gradient-text">Core Values</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        { icon: <FiTarget />, title: 'Integrity', desc: 'Ethical and transparent practices' },
                                        { icon: <FiUsers />, title: 'Collaboration', desc: 'Team-oriented approach' },
                                        { icon: <FiTrendingUp />, title: 'Innovation', desc: 'Creative problem solving' },
                                        { icon: <FiAward />, title: 'Excellence', desc: 'Quality-driven results' },
                                    ].map((value, index) => (
                                        <div key={index} className="bg-white p-4 rounded-xl border border-[var(--color-gold-200)]">
                                            <div className="text-2xl text-[var(--color-gold-600)] mb-2">{value.icon}</div>
                                            <h4 className="font-bold text-[var(--color-primary-dark)]">{value.title}</h4>
                                            <p className="text-sm text-[var(--color-primary-gray)] mt-1">{value.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Column - Experience & Certifications */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            {/* Experience Timeline */}
                            <div className="mb-12">
                                <h3 className="text-2xl font-bold mb-6 gradient-text flex items-center gap-2">
                                    <FiBriefcase /> Work Experience
                                </h3>

                                <div className="space-y-6">
                                    {experience.map((job, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            className="relative pl-8 pb-6 border-l border-[var(--color-gold-300)] last:pb-0"
                                        >
                                            <div className="absolute left-[-8px] top-0 w-4 h-4 bg-[var(--color-gold-500)] rounded-full"></div>
                                            <div className="flex flex-wrap justify-between items-start mb-2">
                                                <div>
                                                    <h4 className="text-lg font-bold text-[var(--color-primary-dark)]">{job.role}</h4>
                                                    <p className="text-[var(--color-gold-600)] font-medium">{job.company}</p>
                                                </div>
                                                <div className="text-sm text-[var(--color-primary-gray)] flex items-center gap-2">
                                                    <FiClock /> {job.duration}
                                                </div>
                                            </div>
                                            <div className="text-sm text-[var(--color-primary-gray)] bg-[var(--color-gold-50)] px-3 py-2 rounded">
                                                {job.year}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Certifications */}
                            <div>
                                <h3 className="text-2xl font-bold mb-6 gradient-text">Certifications</h3>
                                <div className="flex flex-wrap gap-3">
                                    {certifications.map((cert, index) => (
                                        <motion.span
                                            key={cert}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: index * 0.1 }}
                                            className="px-4 py-2 bg-gradient-to-r from-[var(--color-gold-500)]/10 to-[var(--color-gold-600)]/10 border border-[var(--color-gold-300)] text-[var(--color-gold-700)] rounded-full font-medium"
                                        >
                                            {cert}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>

                            {/* Call to Action */}
                            <div className="mt-12 p-6 bg-gradient-to-r from-[var(--color-gold-500)]/10 to-transparent rounded-xl border border-[var(--color-gold-300)]">
                                <h4 className="text-xl font-bold mb-4 gradient-text">Let&apos;s Work Together</h4>
                                <p className="text-[var(--color-primary-gray)] mb-6">
                                    Looking for a cybersecurity expert to secure your infrastructure or optimize your network?
                                </p>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 bg-[var(--color-gold-500)] hover:bg-[var(--color-gold-600)] text-[var(--color-primary-dark)] font-semibold py-3 px-6 rounded-lg transition-colors"
                                >
                                    Get In Touch
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    )
}