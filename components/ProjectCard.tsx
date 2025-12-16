'use client'

import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink, FiCalendar, FiTag } from 'react-icons/fi'
import Link from 'next/link'

interface ProjectCardProps {
    project: {
        id: number
        title: string
        description: string
        longDescription: string
        technologies: string[]
        category: string
        date: string
        image: string
        github: string
        liveUrl: string
    }
    index: number
    viewMode?: 'grid' | 'list'
}

export default function ProjectCard({ project, index, viewMode = 'grid' }: ProjectCardProps) {
    if (viewMode === 'list') {
        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex flex-col md:flex-row gap-6 p-6 hover:shadow-xl transition-shadow"
            >
                {/* Image */}
                <div className="md:w-1/3">
                    <div className="relative aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-gold-50 to-white">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        <div className="absolute top-4 left-4">
                            <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-gold-700 rounded-full text-sm font-medium">
                                {project.category}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="md:w-2/3">
                    <div className="flex flex-col h-full">
                        <div>
                            <h3 className="text-2xl font-bold text-primary-dark mb-2">{project.title}</h3>
                            <p className="text-primary-gray mb-4">{project.description}</p>

                            <div className="flex items-center gap-4 text-sm text-primary-gray mb-4">
                                <span className="flex items-center gap-1">
                                    <FiCalendar /> {new Date(project.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                                </span>
                                <span className="flex items-center gap-1">
                                    <FiTag /> {project.category}
                                </span>
                            </div>
                        </div>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.technologies.slice(0, 4).map((tech) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1 bg-gold-50 text-gold-700 rounded-full text-sm"
                                >
                                    {tech}
                                </span>
                            ))}
                            {project.technologies.length > 4 && (
                                <span className="px-3 py-1 bg-gold-100 text-gold-700 rounded-full text-sm">
                                    +{project.technologies.length - 4} more
                                </span>
                            )}
                        </div>

                        {/* Actions */}
                        <div className="mt-auto flex items-center gap-4">
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-gold-600 hover:text-gold-700 font-medium"
                                >
                                    <FiGithub /> Code
                                </a>
                            )}
                            {project.liveUrl && (
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-gold-600 hover:text-gold-700 font-medium"
                                >
                                    <FiExternalLink /> Live Demo
                                </a>
                            )}
                            <Link
                                href={`/projects/${project.id}`}
                                className="ml-auto text-gold-600 hover:text-gold-700 font-medium"
                            >
                                View Details →
                            </Link>
                        </div>
                    </div>
                </div>
            </motion.div>
        )
    }

    // Grid View (default)
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl shadow-lg border border-gold-100 overflow-hidden hover:shadow-xl transition-shadow"
        >
            {/* Image */}
            <div className="relative h-48 bg-gradient-to-br from-gold-50 to-white">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-gold-700 rounded-full text-sm font-medium">
                        {project.category}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="text-xl font-bold text-primary-dark mb-2">{project.title}</h3>
                <p className="text-primary-gray mb-4">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 3).map((tech) => (
                        <span
                            key={tech}
                            className="px-2 py-1 bg-gold-50 text-gold-700 rounded text-xs"
                        >
                            {tech}
                        </span>
                    ))}
                    {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-gold-100 text-gold-700 rounded text-xs">
                            +{project.technologies.length - 3}
                        </span>
                    )}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gold-100">
                    <div className="text-sm text-primary-gray flex items-center gap-1">
                        <FiCalendar /> {new Date(project.date).getFullYear()}
                    </div>
                    <div className="flex items-center gap-4">
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gold-600 hover:text-gold-700"
                                title="View Code"
                            >
                                <FiGithub />
                            </a>
                        )}
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gold-600 hover:text-gold-700"
                                title="Live Demo"
                            >
                                <FiExternalLink />
                            </a>
                        )}
                        <Link
                            href={`/projects/${project.id}`}
                            className="text-sm text-gold-600 hover:text-gold-700 font-medium"
                        >
                            Details
                        </Link>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}