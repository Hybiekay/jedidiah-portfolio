'use client'

import { motion } from 'framer-motion'
import { FiMail, FiDownload, FiArrowRight } from 'react-icons/fi'
import Link from 'next/link'
import Image from 'next/image'
export default function Hero() {
    const skills = ['Networking', 'Network Security', 'Cybersecurity', 'System Administration', 'Hardware/Software Troubleshooting', 'Prompt Engineering']

    return (
        <section className="section-container relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-gold-50 to-primary-white -z-10" />
            <div className="absolute top-20 right-20 w-64 h-64 bg-gold-300/10 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl -z-10" />

            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Column - Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="mb-6">
                        <span className="skill-badge animate-pulse-gold">5+ Years Experience</span>
                    </div>

                    <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                        <span className="block">Jedidiah</span>
                        <span className="block gradient-text">Unekwu-Ojo David</span>
                    </h1>

                    <h2 className="text-2xl text-primary-gray mb-8 font-medium">
                        Cybersecurity & Networking Specialist
                    </h2>

                    <p className="text-lg text-primary-gray mb-10 leading-relaxed">
                        Technology enthusiast with comprehensive expertise in computer networking, network security, and IT systems administration.
                        Specializing in creating robust, secure, and efficient network environments with precision and innovation.
                    </p>

                    {/* Skills Tags */}
                    <div className="flex flex-wrap gap-3 mb-10">
                        {skills.map((skill, index) => (
                            <motion.span
                                key={skill}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                                className="skill-badge cursor-default"
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-4">
                        <motion.a
                            href="mailto:davidjedidiah2016@gmail.com"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn-primary flex items-center gap-2"
                        >
                            <FiMail /> Contact Me
                        </motion.a>

                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn-secondary flex items-center gap-2"
                        >
                            View Projects <FiArrowRight />
                        </motion.a>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 text-gold-600 hover:text-gold-700 font-semibold"
                        >
                            <FiDownload /> Download CV
                        </motion.button>
                    </div>
                </motion.div>

                {/* Right Column - Profile Image/Graphic */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative"
                >
                    <div className="relative w-84 h-84 lg:w-98 lg:h-98 mx-auto">
                        {/* Animated background circles */}
                        <div className="absolute inset-0 border-4 border-gold-300/30 rounded-full animate-spin-slow" />
                        <div className="absolute inset-8 border-4 border-gold-400/20 rounded-full animate-spin-slow-reverse" />

                        {/* Profile Image Placeholder */}
                        <div className="absolute inset-8 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center">
                            <img src="/profile-pic.png" alt="Profile Picture" className="w-72 h-72 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-white shadow-lg" />
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="mt-12 grid grid-cols-3 gap-4"
                    >
                        {[
                            { value: '5+', label: 'Years Experience' },
                            { value: '50+', label: 'Projects Completed' },
                            { value: '100%', label: 'Client Satisfaction' },
                        ].map((stat, index) => (
                            <div key={index} className="bg-white p-4 rounded-xl shadow-lg border border-gold-100 text-center">
                                <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                                <div className="text-sm text-primary-gray mt-1">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}