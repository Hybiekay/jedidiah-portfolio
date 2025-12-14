'use client'

import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'
import projects from '@/data/projects.json'
import { FiArrowRight } from 'react-icons/fi'
import Link from 'next/link'

export default function ProjectsShowcase() {
    // Get featured projects (first 3)
    const featuredProjects = projects.slice(0, 3)

    return (
        <section id="projects" className="section-container">
            <div className="text-center mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl font-bold mb-6 gradient-text">Featured Projects</h2>
                    <p className="text-xl text-primary-gray max-w-3xl mx-auto mb-10">
                        A selection of my work in network security, system administration, and cybersecurity solutions
                    </p>
                </motion.div>

                {/* Project Categories */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-4 mb-12"
                >
                    {['All', 'Network Security', 'System Administration', 'Cybersecurity', 'Cloud', 'Networking'].map((category, index) => (
                        <motion.button
                            key={category}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${category === 'All'
                                    ? 'bg-[var(--color-gold-500)] text-[var(--color-primary-dark)] shadow-lg'
                                    : 'border border-[var(--color-gold-300)] text-[var(--color-gold-600)] hover:bg-[var(--color-gold-500)] hover:text-[var(--color-primary-dark)]'
                                }`}
                        >
                            {category}
                        </motion.button>
                    ))}
                </motion.div>
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {featuredProjects.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                ))}
            </div>

            {/* View All Projects CTA */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-center"
            >
                <Link
                    href="/projects"
                    className="group inline-flex items-center gap-3 text-xl font-semibold text-[var(--color-gold-600)] hover:text-[var(--color-gold-700)] transition-colors"
                >
                    View All Projects
                    <motion.span
                        className="inline-block"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                        <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
                    </motion.span>
                </Link>
            </motion.div>

            {/* Project Stats */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-20"
            >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                        { value: '50+', label: 'Projects Completed' },
                        { value: '100%', label: 'Client Satisfaction' },
                        { value: '85%', label: 'Security Improvement' },
                        { value: '99.95%', label: 'System Uptime' },
                    ].map((stat, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-br from-white to-[var(--color-gold-50)] p-6 rounded-xl border border-[var(--color-gold-200)] text-center shadow-lg"
                        >
                            <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                            <div className="text-sm text-[var(--color-primary-gray)]">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}