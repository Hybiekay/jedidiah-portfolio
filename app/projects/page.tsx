'use client'

import { useState, useEffect, useMemo } from 'react'
import ProjectCard from '@/components/ProjectCard'
import { FiFilter, FiX, FiSearch, FiGrid, FiList } from 'react-icons/fi'

// Import data
import projectsData from '@/data/projects.json'
import pageData from '@/data/projects-page.json'

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

interface ProjectsPageData {
    title: string
    description: string
    categories: string[]
    filterPlaceholder: string
    noProjectsMessage: string
    clearFiltersText: string
}

export default function ProjectsPage() {
    const projects = projectsData as Project[]
    const page = pageData as ProjectsPageData

    // State for filters
    const [activeCategory, setActiveCategory] = useState<string>('All')
    const [searchQuery, setSearchQuery] = useState<string>('')
    const [sortBy, setSortBy] = useState<string>('date-desc') // date-desc, date-asc, name
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

    // Get unique categories from projects if page categories are empty
    const projectCategories = Array.from(new Set(projects.map(p => p.category)))
    const categories = page.categories.length > 0
        ? page.categories
        : ['All', ...projectCategories]

    // Filter and sort projects
    const filteredAndSortedProjects = useMemo(() => {
        let filtered = [...projects]

        // Apply category filter
        if (activeCategory !== 'All') {
            filtered = filtered.filter(project => project.category === activeCategory)
        }

        // Apply search filter
        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase()
            filtered = filtered.filter(project =>
                project.title.toLowerCase().includes(query) ||
                project.description.toLowerCase().includes(query) ||
                project.longDescription.toLowerCase().includes(query) ||
                project.technologies.some(tech => tech.toLowerCase().includes(query))
            )
        }

        // Apply sorting
        switch (sortBy) {
            case 'date-desc':
                filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                break
            case 'date-asc':
                filtered.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
                break
            case 'name':
                filtered.sort((a, b) => a.title.localeCompare(b.title))
                break
            default:
                filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        }

        return filtered
    }, [projects, activeCategory, searchQuery, sortBy])

    // Clear all filters
    const clearAllFilters = () => {
        setActiveCategory('All')
        setSearchQuery('')
        setSortBy('date-desc')
    }

    // Calculate project counts per category
    const getCategoryCount = (category: string) => {
        if (category === 'All') return projects.length
        return projects.filter(p => p.category === category).length
    }

    return (
        <section className="section-container">
            {/* Page Header */}
            <div className="text-center mb-12">
                <h1 className="text-5xl font-bold mb-6 gradient-text">{page.title}</h1>
                <p className="text-xl text-primary-gray max-w-3xl mx-auto">
                    {page.description}
                </p>
            </div>

            {/* Search and Filter Controls */}
            <div className="mb-12 bg-white rounded-xl p-6 shadow-lg border border-gold-100">
                {/* Search Bar */}
                <div className="relative mb-6">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiSearch className="text-gray-400" />
                    </div>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder={page.filterPlaceholder}
                        className="w-full pl-10 pr-4 py-3 border border-gold-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    />
                    {searchQuery && (
                        <button
                            onClick={() => setSearchQuery('')}
                            className="absolute inset-y-0 right-0 pr-3 flex items-center"
                        >
                            <FiX className="text-gray-400 hover:text-gold-600" />
                        </button>
                    )}
                </div>

                {/* Controls Row */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    {/* Categories */}
                    <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                            <FiFilter className="text-gold-600" />
                            <span className="text-sm font-medium text-primary-gray">Filter by category</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setActiveCategory(category)}
                                    className={`px-4 py-2 rounded-full font-medium transition-all duration-200 flex items-center gap-2 ${activeCategory === category
                                            ? 'bg-gradient-to-r from-gold-500 to-gold-600 text-white shadow-lg'
                                            : 'border border-gold-300 text-gold-600 hover:bg-gold-500/10 hover:border-gold-400'
                                        }`}
                                >
                                    {category}
                                    <span className={`text-xs px-1.5 py-0.5 rounded-full ${activeCategory === category
                                            ? 'bg-white/20'
                                            : 'bg-gold-100 text-gold-700'
                                        }`}>
                                        {getCategoryCount(category)}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* View Mode and Sort */}
                    <div className="flex items-center gap-4">
                        {/* View Mode Toggle */}
                        <div className="flex items-center gap-2 bg-gold-50 p-1 rounded-lg">
                            <button
                                onClick={() => setViewMode('grid')}
                                className={`p-2 rounded ${viewMode === 'grid' ? 'bg-white shadow' : 'hover:bg-white/50'}`}
                                title="Grid View"
                            >
                                <FiGrid className={viewMode === 'grid' ? 'text-gold-600' : 'text-gold-400'} />
                            </button>
                            <button
                                onClick={() => setViewMode('list')}
                                className={`p-2 rounded ${viewMode === 'list' ? 'bg-white shadow' : 'hover:bg-white/50'}`}
                                title="List View"
                            >
                                <FiList className={viewMode === 'list' ? 'text-gold-600' : 'text-gold-400'} />
                            </button>
                        </div>

                        {/* Sort Dropdown */}
                        <div className="relative">
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="appearance-none bg-white border border-gold-300 rounded-lg px-4 py-2 pr-8 focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                            >
                                <option value="date-desc">Newest First</option>
                                <option value="date-asc">Oldest First</option>
                                <option value="name">Alphabetical</option>
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                <svg className="w-4 h-4 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Active Filters */}
                {(activeCategory !== 'All' || searchQuery.trim()) && (
                    <div className="mt-6 pt-6 border-t border-gold-200">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <span className="text-sm text-primary-gray">Active filters:</span>
                                {activeCategory !== 'All' && (
                                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-gold-100 text-gold-700 rounded-full text-sm">
                                        Category: {activeCategory}
                                        <button
                                            onClick={() => setActiveCategory('All')}
                                            className="ml-1 hover:text-gold-800"
                                        >
                                            <FiX className="w-3 h-3" />
                                        </button>
                                    </span>
                                )}
                                {searchQuery.trim() && (
                                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-gold-100 text-gold-700 rounded-full text-sm">
                                        Search: "{searchQuery}"
                                        <button
                                            onClick={() => setSearchQuery('')}
                                            className="ml-1 hover:text-gold-800"
                                        >
                                            <FiX className="w-3 h-3" />
                                        </button>
                                    </span>
                                )}
                            </div>
                            <button
                                onClick={clearAllFilters}
                                className="text-sm text-gold-600 hover:text-gold-700 font-medium flex items-center gap-1"
                            >
                                <FiX /> {page.clearFiltersText}
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Results Summary */}
            <div className="mb-8">
                <p className="text-lg text-primary-gray">
                    Showing <span className="font-semibold text-gold-600">{filteredAndSortedProjects.length}</span> of{' '}
                    <span className="font-semibold text-gold-600">{projects.length}</span> projects
                    {activeCategory !== 'All' && ` in "${activeCategory}"`}
                    {searchQuery.trim() && ` matching "${searchQuery}"`}
                </p>
            </div>

            {/* Projects Grid/List */}
            {filteredAndSortedProjects.length > 0 ? (
                <div className={viewMode === 'grid'
                    ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-8'
                    : 'space-y-6'
                }>
                    {filteredAndSortedProjects.map((project, index) => (
                        <div key={project.id} className={viewMode === 'list'
                            ? 'bg-white rounded-xl shadow-lg border border-gold-100 overflow-hidden'
                            : ''
                        }>
                            <ProjectCard
                                project={project}
                                index={index}
                                viewMode={viewMode}
                            />
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-16">
                    <div className="mb-6">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gold-100 rounded-full mb-4">
                            <FiFilter className="text-2xl text-gold-600" />
                        </div>
                        <h3 className="text-xl font-bold text-primary-dark mb-2">{page.noProjectsMessage}</h3>
                        <p className="text-primary-gray mb-6">
                            Try adjusting your filters or search term
                        </p>
                    </div>
                    <button
                        onClick={clearAllFilters}
                        className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                    >
                        <FiX /> Clear all filters
                    </button>
                </div>
            )}

            {/* Project Stats Footer */}
            <div className="mt-16 pt-8 border-t border-gold-200">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center">
                        <div className="text-2xl font-bold text-gold-600">{projects.length}</div>
                        <div className="text-sm text-primary-gray">Total Projects</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl font-bold text-gold-600">{projectCategories.length}</div>
                        <div className="text-sm text-primary-gray">Categories</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl font-bold text-gold-600">
                            {Array.from(new Set(projects.flatMap(p => p.technologies))).length}
                        </div>
                        <div className="text-sm text-primary-gray">Technologies</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl font-bold text-gold-600">
                            {new Set(projects.map(p => new Date(p.date).getFullYear())).size}
                        </div>
                        <div className="text-sm text-primary-gray">Years Active</div>
                    </div>
                </div>
            </div>
        </section>
    )
}