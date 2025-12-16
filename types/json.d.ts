// types/json.d.ts
declare module '@/data/skills.json' {
    import { SkillsData } from './index'
    const value: SkillsData
    export default value
}

declare module '@/data/certifications.json' {
    import { CertificationsData } from './index'
    const value: CertificationsData
    export default value
}

declare module '@/data/about-page.json' {
    import { AboutPageData } from './index'
    const value: AboutPageData
    export default value
}

declare module '@/data/projects-showcase.json' {
    export interface ProjectsShowcaseData {
        title: string
        description: string
        categories: string[]
        stats: Array<{ value: string; label: string }>
        viewAll: {
            text: string
            link: string
        }
    }

    const data: ProjectsShowcaseData
    export default data
}