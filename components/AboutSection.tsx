'use client'

import { motion } from 'framer-motion'
import { FiTarget, FiUsers, FiTrendingUp, FiAward, FiArrowRight } from 'react-icons/fi'
import aboutData from '@/data/about.json'

export default function AboutSection() {
    const { about, features, timeline } = aboutData

    // Map icon names to actual components
    const iconMap: any = {
        FiTarget: FiTarget,
        FiUsers: FiUsers,
        FiTrendingUp: FiTrendingUp,
        FiAward: FiAward,
        FiArrowRight: FiArrowRight
    }

    return (
        <section id="about" className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Left Column - Text Content + Features */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <div>
                        <h2 className="text-4xl font-bold mb-6 gradient-text">{about.title}</h2>
                        <div className="space-y-4 text-lg text-primary-gray">
                            <p>
                                {about.description} <span className="font-semibold text-gold-600">{about.highlightedText}</span>.
                            </p>
                        </div>
                    </div>

                    {/* Features Grid */}
                    <div>
                        <h3 className="text-2xl font-bold mb-6 gradient-text">{features.title}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {features.items.map((feature, index) => {
                                const IconComponent = iconMap[feature.icon] || FiTarget

                                return (
                                    <motion.div
                                        key={feature.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ scale: 1.02 }}
                                        className="p-4 bg-white rounded-lg shadow-md border border-gold-100 hover:shadow-lg transition-shadow"
                                    >
                                        <div className="flex items-center mb-3">
                                            <div className="p-2 bg-gold-500/10 rounded-lg mr-3">
                                                <div className="text-xl text-gold-600">
                                                    <IconComponent />
                                                </div>
                                            </div>
                                            <h4 className="text-lg font-bold text-primary-dark">{feature.title}</h4>
                                        </div>
                                        <p className="text-sm text-primary-gray">{feature.description}</p>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </div>

                    <motion.a
                        href={about.cta.link}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-secondary flex items-center gap-2 w-fit"
                    >
                        {about.cta.text}
                        <FiArrowRight />
                    </motion.a>
                </motion.div>

                {/* Right Column - Experience Timeline */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="bg-gradient-to-br from-gold-50 to-white p-8 rounded-xl border border-gold-200 shadow-lg h-full">
                        <h3 className="text-2xl font-bold mb-8 gradient-text">{timeline.title}</h3>
                        <div className="relative pl-8">
                            {/* Vertical Timeline Line */}
                            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold-400 to-gold-200"></div>

                            {timeline.items.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="relative mb-8 last:mb-0"
                                >
                                    {/* Timeline Dot */}
                                    <div className="absolute -left-11 top-0 w-6 h-6 bg-gold-500 rounded-full border-4 border-white shadow"></div>

                                    <div className="mb-2">
                                        <div className="text-gold-600 font-bold text-lg">{item.year}</div>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gold-100">
                                        <div className="font-semibold text-primary-dark text-lg">{item.role}</div>
                                        <div className="text-primary-gray">{item.company}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}