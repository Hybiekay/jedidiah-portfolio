'use client'

import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'
import { FiArrowRight, FiFilter, FiX } from 'react-icons/fi'
import Link from 'next/link'
import { useState, useEffect } from 'react'

// Import data
import projectsData from '@/data/projects.json'
import showcaseData from '@/data/projects-showcase.json'

// Define TypeScript interfaces
interface Project {
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

interface ProjectsShowcaseData {
    title: string
    description: string
    categories: string[]
    stats: Array<{ value: string; label: string }>
    viewAll: {
        text: string
        link: string
    }
}

export default function ProjectsShowcase() {
    const projects = projectsData as Project[]
    const showcase = showcaseData as ProjectsShowcaseData

    // State for active category
    const [activeCategory, setActiveCategory] = useState<string>('All')
    const [showAllCategories, setShowAllCategories] = useState<boolean>(false)
    const [availableCategories, setAvailableCategories] = useState<string[]>(['All'])
    const [isAnimating, setIsAnimating] = useState<boolean>(false)

    // Get unique categories from projects on mount
    useEffect(() => {
        const uniqueCategories = Array.from(new Set(projects.map(p => p.category)))
        console.log('Unique categories from projects:', uniqueCategories)
        setAvailableCategories(['All', ...uniqueCategories])

        // Also log to see if showcase categories match
        console.log('Showcase categories:', showcase.categories)
        console.log('All projects:', projects.map(p => ({ title: p.title, category: p.category })))
    }, [projects, showcase.categories])

    // Handle category click with debouncing
    const handleCategoryClick = (category: string) => {
        if (isAnimating || activeCategory === category) return

        setIsAnimating(true)
        console.log('Clicked category:', category)
        setActiveCategory(category)

        // Reset animation state after delay
        setTimeout(() => {
            setIsAnimating(false)
        }, 300)
    }

    // Use categories from projects, not from showcase (to avoid mismatches)
    const allCategories = availableCategories
    const displayedCategories = showAllCategories
        ? allCategories
        : allCategories.slice(0, 5)

    // Filter projects
    const filteredProjects = activeCategory === 'All'
        ? projects.slice(0, 3)  // For "All", show only 3 featured
        : projects.filter(project => {
            // Exact match check
            const match = project.category === activeCategory
            return match
        })

    console.log('Active category:', activeCategory)
    console.log('Filtered projects count:', filteredProjects.length)
    console.log('Filtered projects:', filteredProjects.map(p => p.title))

    return (
        <section id="projects" className="section-container">
            <div className="text-center mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl font-bold mb-6 gradient-text">{showcase.title}</h2>
                    <p className="text-xl text-primary-gray max-w-3xl mx-auto mb-10">
                        {showcase.description}
                    </p>
                </motion.div>

                {/* Project Categories */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    {/* Active Category Indicator */}
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <FiFilter className="text-gold-600" />
                        <span className="text-sm text-primary-gray">
                            Filtering by: <span className="font-semibold text-gold-600">{activeCategory}</span>
                            <span className="ml-2 text-xs bg-gold-100 text-gold-700 px-2 py-1 rounded-full">
                                {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
                            </span>
                        </span>
                        {activeCategory !== 'All' && (
                            <button
                                onClick={() => handleCategoryClick('All')}
                                className="text-xs text-primary-gray hover:text-gold-600 flex items-center gap-1"
                            >
                                <FiX /> Clear
                            </button>
                        )}
                    </div>

                    {/* Category Buttons */}
                    <div className="flex flex-wrap justify-center gap-2">
                        {displayedCategories.map((category, index) => {
                            // Count projects in this category
                            const projectCount = category === 'All'
                                ? projects.length
                                : projects.filter(p => p.category === category).length

                            return (
                                <motion.button
                                    key={category}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => handleCategoryClick(category)}
                                    disabled={isAnimating}
                                    className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${isAnimating ? 'opacity-70 cursor-not-allowed' : ''
                                        } ${activeCategory === category
                                            ? 'bg-gradient-to-r from-gold-500 to-gold-600 text-primary-dark shadow-lg'
                                            : 'border border-gold-300 text-gold-600 hover:bg-gold-500/10 hover:border-gold-400'
                                        }`}
                                >
                                    {category}
                                    <span className={`text-xs px-1.5 py-0.5 rounded-full ${activeCategory === category
                                        ? 'bg-primary-dark/20 text-primary-dark'
                                        : 'bg-gold-100 text-gold-700'}`}>
                                        {projectCount}
                                    </span>
                                </motion.button>
                            )
                        })}

                        {/* Show More/Less Categories Button */}
                        {allCategories.length > 5 && (
                            <motion.button
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                onClick={() => setShowAllCategories(!showAllCategories)}
                                disabled={isAnimating}
                                className={`px-5 py-2.5 rounded-full font-medium border border-gold-300 text-gold-600 hover:bg-gold-500/10 flex items-center gap-2 ${isAnimating ? 'opacity-70 cursor-not-allowed' : ''
                                    }`}
                            >
                                {showAllCategories ? (
                                    <>
                                        <FiX /> Show Less
                                    </>
                                ) : (
                                    <>
                                        <FiFilter /> +{allCategories.length - 5} More
                                    </>
                                )}
                            </motion.button>
                        )}
                    </div>
                </motion.div>
            </div>

            {/* Projects Grid - FIXED ANIMATION */}
            <motion.div
                key={activeCategory}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
            >
                {filteredProjects.length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="border border-gold-200 rounded-xl p-6 bg-white shadow-lg hover:shadow-xl transition-shadow"
                            >
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                <p className="text-primary-gray mb-4">{project.description}</p>
                                <div className="mb-4">
                                    <span className="inline-block bg-gold-100 text-gold-700 px-3 py-1 rounded-full text-sm">
                                        {project.category}
                                    </span>
                                </div>
                                <p className="text-sm text-primary-gray">
                                    Technologies: {project.technologies.join(', ')}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-12"
                    >
                        <div className="mb-6 p-6 bg-red-50 rounded-lg max-w-2xl mx-auto">
                            <h3 className="text-lg font-semibold text-red-700 mb-2">No Projects Found!</h3>
                            <p className="text-primary-gray">
                                No projects found in the <span className="font-semibold text-gold-600">{activeCategory}</span> category.
                            </p>
                            <p className="text-sm text-primary-gray mt-2">
                                Available categories: {availableCategories.slice(1).join(', ')}
                            </p>
                        </div>
                        <button
                            onClick={() => handleCategoryClick('All')}
                            className="text-gold-600 hover:text-gold-700 font-medium flex items-center gap-2 mx-auto mb-4"
                        >
                            <FiArrowRight /> View all projects
                        </button>
                    </motion.div>
                )}
            </motion.div>

            {/* View All Projects CTA */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-center"
            >
                <Link
                    href={showcase.viewAll.link}
                    className="group inline-flex items-center gap-3 text-xl font-semibold text-gold-600 hover:text-gold-700 transition-colors"
                >
                    {showcase.viewAll.text}
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
                    {showcase.stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-gradient-to-br from-white to-gold-50 p-6 rounded-xl border border-gold-200 text-center shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                            <div className="text-sm text-primary-gray">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}