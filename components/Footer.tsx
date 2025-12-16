'use client'

import { motion } from 'framer-motion'
import { FiArrowUp } from 'react-icons/fi'
import { getIconComponent, IconComponentType } from '@/utils/iconMap'

// Import data
import footerData from '@/data/footer-enhanced.json'

// Define TypeScript interfaces
interface FooterData {
    brand: {
        logoInitials: string
        name: string
        title: string
        description: string
        tagline?: string
    }
    socialLinks: Array<{
        icon: string
        label: string
        href: string
        ariaLabel: string
    }>
    navigation: {
        title: string
        items: Array<{
            label: string
            href: string
            icon?: string
        }>
    }
    services?: {
        title: string
        items: Array<{
            label: string
            href: string
        }>
    }
    contactInfo: {
        title: string
        items: Array<{
            icon: string
            label: string
            value: string
            href: string
        }>
    }
    legal?: {
        links: Array<{
            label: string
            href: string
        }>
        disclaimer?: string
    }
    bottomBar: {
        copyright: string
        scrollToTop: {
            icon: string
            label: string
            ariaLabel: string
        }
        builtWith?: string
        version?: string
    }
}

export default function Footer() {
    const data = footerData as FooterData
    const currentYear = new Date().getFullYear()

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    // Replace {year} in copyright text
    const copyrightText = data.bottomBar.copyright.replace('{year}', currentYear.toString())

    return (
        <footer className="bg-gradient-to-b from-primary-white to-gold-50 border-t border-gold-200">
            <div className="section-container">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-gradient-to-br from-gold-500 to-gold-300 rounded-lg flex items-center justify-center">
                                <span className="text-primary-white font-bold text-xl">{data.brand.logoInitials}</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold gradient-text">{data.brand.name}</h3>
                                <p className="text-sm text-primary-gray">{data.brand.title}</p>
                            </div>
                        </div>
                        <p className="text-primary-gray mb-6">
                            {data.brand.description}
                        </p>
                        {data.brand.tagline && (
                            <p className="text-sm italic text-primary-gray mb-6">
                                {data.brand.tagline}
                            </p>
                        )}
                        <div className="flex items-center gap-3">
                            {data.socialLinks.map((link) => {
                                const IconComponent: IconComponentType = getIconComponent(link.icon)

                                return (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={link.ariaLabel}
                                        className="p-2 bg-white border border-gold-200 rounded-lg text-primary-gray hover:text-gold-600 hover:border-gold-300 transition-colors"
                                        title={link.label}
                                    >
                                        <IconComponent size={18} />
                                    </a>
                                )
                            })}
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 gradient-text">{data.navigation.title}</h4>
                        <ul className="space-y-3">
                            {data.navigation.items.map((item) => {
                                const IconComponent: IconComponentType | null = item.icon ? getIconComponent(item.icon) : null

                                return (
                                    <li key={item.label}>
                                        <a
                                            href={item.href}
                                            className="text-primary-gray hover:text-gold-600 transition-colors flex items-center gap-2 group"
                                        >
                                            {IconComponent && (
                                                <IconComponent className="text-gold-400 group-hover:text-gold-600 transition-colors" size={16} />
                                            )}
                                            <span className="w-0 group-hover:w-2 h-0.5 bg-gold-500 transition-all duration-300"></span>
                                            {item.label}
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>

                    {/* Services (if available) */}
                    {data.services && (
                        <div>
                            <h4 className="text-lg font-bold mb-6 gradient-text">{data.services.title}</h4>
                            <ul className="space-y-3">
                                {data.services.items.map((item) => (
                                    <li key={item.label}>
                                        <a
                                            href={item.href}
                                            className="text-primary-gray hover:text-gold-600 transition-colors flex items-center gap-2 group"
                                        >
                                            <span className="w-0 group-hover:w-2 h-0.5 bg-gold-500 transition-all duration-300"></span>
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 gradient-text">{data.contactInfo.title}</h4>
                        <div className="space-y-4">
                            {data.contactInfo.items.map((item) => {
                                const IconComponent: IconComponentType = getIconComponent(item.icon)

                                return (
                                    <div key={item.label} className="flex items-start gap-3">
                                        <div className="p-2 bg-gold-500/10 rounded-lg flex-shrink-0">
                                            <IconComponent className="text-gold-600" size={18} />
                                        </div>
                                        <div>
                                            <p className="font-medium text-primary-dark text-sm">{item.label}</p>
                                            <a
                                                href={item.href}
                                                className="text-primary-gray hover:text-gold-600 transition-colors text-sm"
                                            >
                                                {item.value}
                                            </a>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>

                {/* Legal Links */}
                {data.legal && (
                    <div className="mt-12 pt-8 border-t border-gold-200">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                            <div className="flex flex-wrap gap-6">
                                {data.legal.links.map((link) => (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        className="text-sm text-primary-gray hover:text-gold-600 transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </div>
                            {data.legal.disclaimer && (
                                <p className="text-xs text-primary-gray max-w-md">
                                    {data.legal.disclaimer}
                                </p>
                            )}
                        </div>
                    </div>
                )}

                {/* Bottom Bar */}
                <div className="mt-8 pt-8 border-t border-gold-200 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-center md:text-left">
                        <p className="text-primary-gray text-sm">
                            {copyrightText}
                        </p>
                        {(data.bottomBar.builtWith || data.bottomBar.version) && (
                            <div className="flex items-center gap-4 mt-2">
                                {data.bottomBar.builtWith && (
                                    <span className="text-xs text-primary-gray">
                                        {data.bottomBar.builtWith}
                                    </span>
                                )}
                                {data.bottomBar.version && (
                                    <span className="text-xs text-gold-600 bg-gold-100 px-2 py-1 rounded">
                                        {data.bottomBar.version}
                                    </span>
                                )}
                            </div>
                        )}
                    </div>

                    <motion.button
                        onClick={scrollToTop}
                        aria-label={data.bottomBar.scrollToTop.ariaLabel}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-gold-500 text-primary-white rounded-full hover:bg-gold-600 transition-colors flex items-center gap-2"
                        title={data.bottomBar.scrollToTop.label}
                    >
                        <FiArrowUp size={18} />
                        <span className="text-sm font-medium hidden sm:inline">
                            {data.bottomBar.scrollToTop.label}
                        </span>
                    </motion.button>
                </div>
            </div>
        </footer>
    )
}