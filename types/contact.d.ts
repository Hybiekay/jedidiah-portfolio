// types/contact.d.ts
declare module '@/data/contact.json' {
    export interface ContactMethod {
        icon: string
        title: string
        value: string
        href: string
    }

    export interface ContactFormFields {
        name: { label: string; placeholder: string }
        email: { label: string; placeholder: string }
        subject: { label: string; placeholder: string }
        message: { label: string; placeholder: string }
    }

    export interface ContactData {
        title: string
        description: string
        contactInfo: {
            title: string
            methods: ContactMethod[]
        }
        availability: {
            title: string
            status: string
            description: string
        }
        contactForm: {
            title: string
            fields: ContactFormFields
            submitButton: {
                text: string
                sendingText: string
                successMessage: string
                errorMessage: string
            }
        }
        privacyNotice: string
    }

    const data: ContactData
    export default data
}