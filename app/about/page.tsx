'use client'

import { motion } from 'framer-motion'
import { FiTarget, FiUsers, FiTrendingUp, FiAward, FiBriefcase, FiClock, FiEye } from 'react-icons/fi'
import Link from 'next/link'
import { useState } from 'react'
import CertificateModal from '@/components/CertificateModal'

// Define TypeScript interfaces
interface Certificate {
    name: string
    image: string
    year: string
    issuer?: string
    code?: string
    validity?: string
    level?: string
}

interface ValueItem {
    icon: string
    title: string
    description: string
}

interface ExperienceItem {
    year: string
    role: string
    company: string
    duration: string
}

interface AboutPageData {
    hero: {
        title: string
        subtitle: string
    }
    biography: {
        title: string
        paragraphs: string[]
        highlight: string
    }
    values: {
        title: string
        items: ValueItem[]
    }
    experience: {
        title: string
        items: ExperienceItem[]
    }
    certifications: {
        title: string
        description: string
        reference: string
    }
    cta: {
        title: string
        description: string
        buttonText: string
        buttonLink: string
    }
}

interface CertificationsData {
    title: string
    description: string
    items: Certificate[]
}

// Import your data with type assertion
import aboutPageData from '@/data/about-page.json'
import certificationsDataJson from '@/data/certifications.json'

export default function AboutPage() {
    const aboutData = aboutPageData as AboutPageData
    const certificationsData = certificationsDataJson as CertificationsData

    const {
        hero,
        biography,
        values,
        experience,
        certifications,
        cta
    } = aboutData

    // Get certificates from shared file
    const certificates = certificationsData.items

    // State for modal with TypeScript types
    const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null)
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

    // Icon mapping
    const iconMap: Record<string, React.ComponentType> = {
        FiTarget,
        FiUsers,
        FiTrendingUp,
        FiAward,
        FiBriefcase,
        FiClock
    }

    // Handle certificate click
    const handleCertificateClick = (certificate: Certificate) => {
        setSelectedCertificate(certificate)
        setIsModalOpen(true)
    }

    // Close modal
    const closeModal = () => {
        setIsModalOpen(false)
        setTimeout(() => setSelectedCertificate(null), 300)
    }

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
                        <h1 className="text-5xl lg:text-6xl font-bold mb-6 gradient-text">
                            {hero.title}
                        </h1>
                        <p className="text-xl text-[var(--color-primary-gray)] max-w-3xl mx-auto">
                            {hero.subtitle}
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
                            <h2 className="text-3xl font-bold mb-8 gradient-text">
                                {biography.title}
                            </h2>

                            <div className="space-y-6 text-[var(--color-primary-gray)] text-lg leading-relaxed">
                                {biography.paragraphs.map((paragraph, index) => (
                                    <p key={index}>
                                        {index === 0 ? (
                                            <>
                                                {paragraph} <span className="font-semibold text-[var(--color-gold-600)]">
                                                    {biography.highlight}
                                                </span>.
                                            </>
                                        ) : (
                                            paragraph
                                        )}
                                    </p>
                                ))}
                            </div>

                            {/* Values */}
                            <div className="mt-12">
                                <h3 className="text-2xl font-bold mb-6 gradient-text">
                                    {values.title}
                                </h3>
                                <div className="grid grid-cols-2 gap-4">
                                    {values.items.map((value, index) => {
                                        const IconComponent = iconMap[value.icon] || FiTarget

                                        return (
                                            <div key={index} className="bg-white p-4 rounded-xl border border-[var(--color-gold-200)]">
                                                <div className="text-2xl text-[var(--color-gold-600)] mb-2">
                                                    {IconComponent && <IconComponent />}
                                                </div>
                                                <h4 className="font-bold text-[var(--color-primary-dark)]">
                                                    {value.title}
                                                </h4>
                                                <p className="text-sm text-[var(--color-primary-gray)] mt-1">
                                                    {value.description}
                                                </p>
                                            </div>
                                        )
                                    })}
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
                                    <FiBriefcase /> {experience.title}
                                </h3>

                                <div className="space-y-6">
                                    {experience.items.map((job, index) => (
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
                                                    <h4 className="text-lg font-bold text-[var(--color-primary-dark)]">
                                                        {job.role}
                                                    </h4>
                                                    <p className="text-[var(--color-gold-600)] font-medium">
                                                        {job.company}
                                                    </p>
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
                                <h3 className="text-2xl font-bold mb-6 gradient-text">
                                    {certificationsData.title}
                                </h3>
                                <p className="text-primary-gray mb-6 text-sm">
                                    {certificationsData.description}
                                </p>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                    {certificates.map((cert, index) => (
                                        <motion.button
                                            key={cert.name}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: index * 0.1 }}
                                            whileHover={{ scale: 1.05, y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => handleCertificateClick(cert)}
                                            className="group relative px-4 py-3 bg-gradient-to-r from-[var(--color-gold-500)]/10 to-[var(--color-gold-600)]/10 border border-[var(--color-gold-300)] text-[var(--color-gold-700)] rounded-lg font-medium text-left overflow-hidden"
                                        >
                                            {/* Hover effect */}
                                            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-gold-500)]/0 to-[var(--color-gold-600)]/0 group-hover:from-[var(--color-gold-500)]/5 group-hover:to-[var(--color-gold-600)]/5 transition-all duration-300"></div>

                                            <div className="relative z-10">
                                                <div className="flex justify-between items-start mb-1">
                                                    <span className="font-semibold">{cert.name.split('(')[0]}</span>
                                                    <FiEye className="opacity-0 group-hover:opacity-100 transition-opacity text-[var(--color-gold-600)]" />
                                                </div>
                                                <div className="flex justify-between items-center text-sm">
                                                    <span className="text-[var(--color-primary-gray)]">View Certificate</span>
                                                    <span className="text-[var(--color-gold-600)] font-semibold">{cert.year}</span>
                                                </div>
                                            </div>
                                        </motion.button>
                                    ))}
                                </div>
                            </div>

                            {/* Call to Action */}
                            <div className="mt-12 p-6 bg-gradient-to-r from-[var(--color-gold-500)]/10 to-transparent rounded-xl border border-[var(--color-gold-300)]">
                                <h4 className="text-xl font-bold mb-4 gradient-text">
                                    {cta.title}
                                </h4>
                                <p className="text-[var(--color-primary-gray)] mb-6">
                                    {cta.description}
                                </p>
                                <Link
                                    href={cta.buttonLink}
                                    className="inline-flex items-center gap-2 bg-[var(--color-gold-500)] hover:bg-[var(--color-gold-600)] text-[var(--color-primary-dark)] font-semibold py-3 px-6 rounded-lg transition-colors"
                                >
                                    {cta.buttonText}
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Certificate Modal */}
            <CertificateModal
                isOpen={isModalOpen}
                certificate={selectedCertificate}
                onClose={closeModal}
            />
        </div>
    )
}