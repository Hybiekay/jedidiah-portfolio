'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiDownload } from 'react-icons/fi'
import { Certificate } from '@/types'

interface CertificateModalProps {
    isOpen: boolean
    certificate: Certificate | null
    onClose: () => void
}

export default function CertificateModal({
    isOpen,
    certificate,
    onClose
}: CertificateModalProps) {
    if (!isOpen || !certificate) return null

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    >
                        {/* Modal */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white rounded-xl max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl"
                        >
                            {/* Header */}
                            <div className="flex justify-between items-center p-4 border-b border-gray-200">
                                <div>
                                    <h3 className="text-xl font-bold text-primary-dark">
                                        {certificate.name}
                                    </h3>
                                    <p className="text-primary-gray">Issued: {certificate.year}</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    {/* Download Button */}
                                    <a
                                        href={certificate.image}
                                        download
                                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                                        title="Download Certificate"
                                    >
                                        <FiDownload className="text-xl text-primary-gray hover:text-gold-600" />
                                    </a>

                                    {/* Close Button */}
                                    <button
                                        onClick={onClose}
                                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                                        title="Close"
                                    >
                                        <FiX className="text-xl text-primary-gray hover:text-gold-600" />
                                    </button>
                                </div>
                            </div>

                            {/* Certificate Image */}
                            <div className="p-4 overflow-auto max-h-[calc(90vh-80px)]">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 }}
                                    className="relative"
                                >
                                    <img
                                        src={certificate.image}
                                        alt={certificate.name}
                                        className="w-full h-auto rounded-lg shadow-lg"
                                    />

                                    {/* Watermark Protection */}
                                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-white/5"></div>
                                </motion.div>

                                {/* Certificate Details */}
                                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                                    <h4 className="font-bold text-primary-dark mb-2">Certificate Details</h4>
                                    <div className="grid grid-cols-2 gap-4 text-sm">
                                        <div>
                                            <span className="text-primary-gray">Issuing Authority:</span>
                                            <p className="font-medium text-primary-dark">
                                                {certificate.issuer || 'Various'}
                                            </p>
                                        </div>
                                        <div>
                                            <span className="text-primary-gray">Valid Until:</span>
                                            <p className="font-medium text-primary-dark">
                                                {certificate.validity || `${parseInt(certificate.year) + 3} (3 years validity)`}
                                            </p>
                                        </div>
                                        <div>
                                            <span className="text-primary-gray">Certificate ID:</span>
                                            <p className="font-medium text-primary-dark">
                                                {certificate.code || `${certificate.name.substring(0, 3).toUpperCase()}-${certificate.year}-XXXX`}
                                            </p>
                                        </div>
                                        <div>
                                            <span className="text-primary-gray">Level:</span>
                                            <p className="font-medium text-primary-dark">
                                                {certificate.level || 'Professional'}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}