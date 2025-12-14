'use client'

import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi'
import Link from 'next/link'

interface ProjectCardProps {
    project: {
        id: number
        title: string
        description: string
        technologies: string[]
        category: string
        date: string
        image: string
        github?: string
        liveUrl?: string
    }
    index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="group bg-white rounded-xl shadow-lg overflow-hidden border border-gold-100 hover:shadow-2xl transition-all duration-300"
        >
            {/* Project Header */}
            <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <FiFolder className="text-2xl text-gold-500" />
                            <span className="skill-badge">{project.category}</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-3 group-hover:text-gold-600 transition-colors">
                            <Link href={`/projects/${project.id}`}>
                                {project.title}
                            </Link>
                        </h3>
                    </div>

                    <div className="flex gap-3">
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 text-primary-gray hover:text-gold-600 hover:bg-gold-50 rounded-lg transition-colors"
                            >
                                <FiGithub size={20} />
                            </a>
                        )}
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 text-primary-gray hover:text-gold-600 hover:bg-gold-50 rounded-lg transition-colors"
                            >
                                <FiExternalLink size={20} />
                            </a>
                        )}
                    </div>
                </div>

                {/* Project Description */}
                <p className="text-primary-gray mb-6 line-clamp-3">
                    {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                        <span
                            key={tech}
                            className="px-3 py-1 bg-gold-50 text-gold-700 text-sm rounded-full border border-gold-200"
                        >
                            {tech}
                        </span>
                    ))}
                    {project.technologies.length > 4 && (
                        <span className="px-3 py-1 bg-gold-50 text-gold-700 text-sm rounded-full border border-gold-200">
                            +{project.technologies.length - 4} more
                        </span>
                    )}
                </div>

                {/* Date & View Details */}
                <div className="flex justify-between items-center pt-4 border-t border-gold-100">
                    <span className="text-sm text-primary-gray">
                        {new Date(project.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                    </span>
                    <Link
                        href={`/projects/${project.id}`}
                        className="flex items-center gap-2 text-gold-600 hover:text-gold-700 font-medium group/link"
                    >
                        View Details
                        <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                    </Link>
                </div>
            </div>
        </motion.article>
    )
}