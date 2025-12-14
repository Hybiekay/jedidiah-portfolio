import { notFound } from 'next/navigation'
import projects from '@/data/projects.json'
import { FiGithub, FiExternalLink, FiCalendar, FiTag, FiArrowLeft } from 'react-icons/fi'
import Link from 'next/link'

interface ProjectPageProps {
    params: Promise<{ id: string }>
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    // Await the params Promise
    const { id } = await params
    const project = projects.find(p => p.id === parseInt(id))

    if (!project) {
        notFound()
    }

    return (
        <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
            {/* Back Button */}
            <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-[var(--color-gold-600)] hover:text-[var(--color-gold-700)] mb-8 group"
            >
                <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                Back to Projects
            </Link>

            {/* Project Header */}
            <div className="mb-12">
                <div className="flex flex-wrap items-center gap-4 mb-6">
                    <span className="bg-[var(--color-gold-500)]/10 text-[var(--color-gold-700)] border border-[var(--color-gold-300)] rounded-full px-4 py-2 text-sm font-medium text-lg">
                        {project.category}
                    </span>
                    <div className="flex items-center gap-6 text-[var(--color-primary-gray)]">
                        <span className="flex items-center gap-2">
                            <FiCalendar /> {new Date(project.date).toLocaleDateString('en-US', { dateStyle: 'long' })}
                        </span>
                    </div>
                </div>

                <h1 className="text-4xl lg:text-5xl font-bold mb-8 gradient-text">{project.title}</h1>

                <div className="flex flex-wrap gap-4 mb-8">
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary flex items-center gap-2"
                        >
                            <FiGithub /> View Code
                        </a>
                    )}
                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary flex items-center gap-2"
                        >
                            <FiExternalLink /> Live Demo
                        </a>
                    )}
                </div>
            </div>

            {/* Main Content */}
            <div className="grid lg:grid-cols-3 gap-12">
                {/* Content */}
                <div className="lg:col-span-2">
                    {/* Description */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold mb-6 gradient-text">Project Overview</h2>
                        <div className="prose prose-lg max-w-none text-[var(--color-primary-gray)]">
                            <p className="text-lg leading-relaxed">{project.longDescription}</p>
                        </div>
                    </div>

                    {/* Key Features */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold mb-6 gradient-text">Key Features</h2>
                        <ul className="space-y-4">
                            {[
                                'Multi-layered security architecture',
                                'Real-time threat monitoring',
                                'Automated incident response',
                                'Compliance reporting',
                                'Scalable infrastructure'
                            ].map((feature, index) => (
                                <li key={index} className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-[var(--color-gold-500)] rounded-full"></div>
                                    <span className="text-[var(--color-primary-gray)]">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1">
                    <div className="bg-gradient-to-b from-[var(--color-gold-50)] to-white p-6 rounded-xl border border-[var(--color-gold-200)] sticky top-24">
                        <h3 className="text-xl font-bold mb-6 gradient-text flex items-center gap-2">
                            <FiTag /> Technologies Used
                        </h3>

                        <div className="flex flex-wrap gap-3 mb-8">
                            {project.technologies.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-4 py-2 bg-white border border-[var(--color-gold-300)] text-[var(--color-gold-700)] rounded-lg font-medium"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* Results */}
                        <div className="space-y-6">
                            <h4 className="font-bold text-lg text-[var(--color-primary-dark)]">Results Achieved</h4>
                            <div className="space-y-4">
                                {[
                                    { label: 'Security Incidents Reduced', value: '85%' },
                                    { label: 'Deployment Time Saved', value: '90%' },
                                    { label: 'Network Uptime', value: '99.95%' }
                                ].map((result) => (
                                    <div key={result.label} className="bg-white p-4 rounded-lg border border-[var(--color-gold-100)]">
                                        <div className="text-2xl font-bold gradient-text">{result.value}</div>
                                        <div className="text-sm text-[var(--color-primary-gray)]">{result.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}