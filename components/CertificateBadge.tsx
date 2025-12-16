'use client'

import { motion } from 'framer-motion'
import { FiAward, FiEye } from 'react-icons/fi'
import { Certificate } from '@/types'

interface CertificateBadgeProps {
    certificate: Certificate
    onClick: (certificate: Certificate) => void
    index: number
}

export default function CertificateBadge({
    certificate,
    onClick,
    index
}: CertificateBadgeProps) {
    return (
        <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onClick(certificate)}
            className="group relative w-full px-6 py-4 bg-gradient-to-r from-gold-500/10 to-gold-600/10 border border-gold-300 rounded-xl cursor-pointer hover:border-gold-500 hover:bg-gradient-to-r hover:from-gold-500/15 hover:to-gold-600/15 transition-all shadow-sm hover:shadow-md"
        >
            {/* Hover effect background */}
            <div className="absolute inset-0 bg-gradient-to-r from-gold-500/0 to-gold-600/0 group-hover:from-gold-500/5 group-hover:to-gold-600/5 rounded-xl transition-all duration-300"></div>

            <div className="relative z-10 flex items-start gap-4">
                {/* Icon Container */}
                <div className="p-3 bg-gold-500/10 rounded-lg group-hover:bg-gold-500/20 transition-colors flex-shrink-0">
                    <FiAward className="text-xl text-gold-600" />
                </div>

                {/* Content */}
                <div className="flex-1 text-left">
                    <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold text-primary-dark group-hover:text-gold-700 transition-colors">
                            {certificate.name}
                        </h4>
                        <FiEye className="text-gold-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>

                    {/* Badges */}
                    <div className="flex flex-wrap gap-2 mb-2">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gold-100 text-gold-800">
                            {certificate.year}
                        </span>
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            {certificate.issuer || 'Various'}
                        </span>
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            {certificate.level || 'Certified'}
                        </span>
                    </div>

                    {/* Code & Validity */}
                    <div className="flex items-center justify-between text-sm text-primary-gray">
                        <span className="font-mono">{certificate.code || 'CERT-XXXX'}</span>
                        <span className="text-xs">Valid: {certificate.validity || '3 years'}</span>
                    </div>
                </div>
            </div>

            {/* Click hint */}
            <div className="absolute bottom-2 right-2 text-xs text-gold-500 opacity-0 group-hover:opacity-100 transition-opacity">
                Click to view
            </div>
        </motion.button>
    )
}