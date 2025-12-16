// types/index.ts
export interface Certificate {
    name: string
    image: string
    year: string
    issuer?: string
    code?: string
    validity?: string
    level?: string
}

export interface SkillCategory {
    title: string
    icon: string
    skills: string[]
    color: string
}

export interface SkillsData {
    title: string
    description: string
    skillCategories: SkillCategory[]
    certifications?: {
        title: string
        description: string
    }
}

export interface CertificationsData {
    title: string
    description: string
    items: Certificate[]
}