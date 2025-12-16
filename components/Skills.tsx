'use client'

import { motion } from 'framer-motion'
import { FiShield, FiServer, FiWifi, FiCpu, FiCode, FiTool, FiAward } from 'react-icons/fi'
import { useState } from 'react'
import CertificateModal from './CertificateModal'
import CertificateBadge from './CertificateBadge'
import type { Certificate, SkillsData, CertificationsData } from '@/types'

// Import data with type assertion
import skillsDataJson from '@/data/skills.json'
import certificationsDataJson from '@/data/certifications.json'

export default function Skills() {
    // Type assertions
    const skillsData = skillsDataJson as SkillsData
    const certificationsData = certificationsDataJson as CertificationsData

    const { title, description, skillCategories } = skillsData
    const { items: certifications } = certificationsData

    // State for showing all certifications
    const [showAllCerts, setShowAllCerts] = useState<boolean>(false)

    // Certificate modal state
    const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null)
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

    // Display certifications
    const displayedCerts = showAllCerts ? certifications : certifications.slice(0, 4)

    // Icon mapping
    const iconMap: Record<string, React.ComponentType> = {
        FiShield,
        FiServer,
        FiWifi,
        FiCpu,
        FiCode,
        FiTool,
        FiAward
    }

    // Get icon component by name
    const getIconComponent = (iconName: string): React.ComponentType => {
        return iconMap[iconName] || FiShield
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
        <section id="skills" className="section-container bg-primary-offwhite">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-center mb-12"
            >
                <h2 className="text-4xl font-bold mb-4 gradient-text">{title}</h2>
                <p className="text-lg text-primary-gray max-w-3xl mx-auto">
                    {description}
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillCategories.map((category, index) => {
                    const IconComponent = getIconComponent(category.icon)

                    return (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className={`bg-white rounded-xl p-6 shadow-lg border border-gold-100 hover:shadow-xl transition-shadow`}
                        >
                            <div className="flex items-center mb-4">
                                <div className={`p-3 rounded-lg bg-gradient-to-br ${category.color} mr-4`}>
                                    <div className="text-2xl text-gold-600">
                                        <IconComponent />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-primary-dark">{category.title}</h3>
                            </div>

                            <ul className="space-y-2">
                                {category.skills.map((skill) => (
                                    <li key={skill} className="flex items-center text-primary-gray">
                                        <span className="w-2 h-2 bg-gold-500 rounded-full mr-3"></span>
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    )
                })}
            </div>

            {/* Certification Badges */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mt-16"
            >
                <h3 className="text-2xl font-bold mb-8 text-center gradient-text flex items-center justify-center gap-2">
                    <FiAward /> {certificationsData.title}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                    {displayedCerts.map((cert, index) => (
                        <CertificateBadge
                            key={cert.code || cert.name}
                            certificate={cert}
                            index={index}
                            onClick={handleCertificateClick}
                        />
                    ))}
                </div>

                {/* Show More/Less Button */}
                {certifications.length > 4 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-center mt-8"
                    >
                        <button
                            onClick={() => setShowAllCerts(!showAllCerts)}
                            className="btn-secondary flex items-center gap-2 mx-auto"
                        >
                            {showAllCerts ? 'Show Less Certifications' : `Show All ${certifications.length} Certifications`}
                            <span className={`transform transition-transform ${showAllCerts ? 'rotate-180' : ''}`}>
                                ▼
                            </span>
                        </button>
                    </motion.div>
                )}

                {/* Certification Summary */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mt-8 text-center"
                >
                    <p className="text-primary-gray">
                        <span className="font-semibold text-gold-600">{certifications.length} industry certifications</span>
                        {' '}validating expertise across multiple domains. Click any certificate to view.
                    </p>
                </motion.div>
            </motion.div>

            {/* Certificate Modal */}
            <CertificateModal
                isOpen={isModalOpen}
                certificate={selectedCertificate}
                onClose={closeModal}
            />
        </section>
    )
}