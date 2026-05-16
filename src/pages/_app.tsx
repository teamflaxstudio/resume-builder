import type { AppProps } from 'next/app'
import "@/styles/globals.css"
import { useEffect, useRef, useState } from "react"
import { ResumeDataContext } from "@/components/resume/ResumeContext"
import { starterResume, TemplateId } from "@/components/resume/resume-data"
import { loadResumeData, saveResumeData } from "@/lib/local-storage-manager"


export default function MyApp({ Component, pageProps }: AppProps) {
    const [resumeData, setResumeData] = useState(starterResume)
    const [selectedTemplate, setSelectedTemplate] = useState<TemplateId>("modern")
    const hydrated = useRef(false)

    useEffect(() => {
        setResumeData(loadResumeData())
        hydrated.current = true
    }, [])

    useEffect(() => {
        if (!hydrated.current) return
        saveResumeData(resumeData)
    }, [resumeData])

    return (
        <ResumeDataContext.Provider value={{ resumeData, setResumeData, selectedTemplate, setSelectedTemplate }}>
            <Component {...pageProps} />
        </ResumeDataContext.Provider>
    )
}
