import { ReactElement } from "react"

interface EmploymentProps {
    isMobile: boolean
}

interface EmploymentItem {
    title: string,
    company: string,
    location: string,
    duration: string,
    job: ReactElement
}

export type { EmploymentProps, EmploymentItem }