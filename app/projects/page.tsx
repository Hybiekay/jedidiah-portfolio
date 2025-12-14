import ProjectCard from '@/components/ProjectCard'
import projects from '@/data/projects.json'

export default function ProjectsPage() {
    return (
        <section className="section-container">
            <div className="text-center mb-12">
                <h1 className="text-5xl font-bold mb-6 gradient-text">My Projects</h1>
                <p className="text-xl text-primary-gray max-w-3xl mx-auto">
                    A collection of my work in network security, system administration, and cybersecurity solutions
                </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {['All', 'Network Security', 'System Administration', 'Cybersecurity', 'Cloud Infrastructure', 'Networking'].map((category) => (
                    <button
                        key={category}
                        className="px-6 py-3 rounded-full border border-gold-300 text-gold-600 hover:bg-gold-500 hover:text-white transition-colors font-medium"
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                ))}
            </div>
        </section>
    )
}