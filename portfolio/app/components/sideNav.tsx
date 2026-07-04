"use client"

import {useEffect, useState} from "react"

const sections = ["About", "Skills", "Projects", "Experience", "Education"]

export default function SideNav(){
    const [active, setActive] = useState("About")

    useEffect(() => {
        const observers: IntersectionObserver[] = []

        sections.forEach((section) => {
            const el = document.getElementById(section.toLowerCase())
            if (!el) return 

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) setActive(section)
                },
                {threshold: 0.5}
            )

            observer.observe(el)
            observers.push(observer)
        })

        return () => observers.forEach((o) => o.disconnect())
    
    }, [])

    return (
    <nav className="fixed left-8 flex flex-col gap-6" style={{ top: '50%', transform: 'translateY(-50%)'}}>
      {sections.map((section) => (
        <a
          key={section}
          href={`#${section.toLowerCase()}`}
          className="transition-all duration-300 cursor-pointer"
          style={{
            fontSize: active === section ? '1.55rem' : '1.025rem', /*1.25rem 0.875rem*/
            fontWeight: active === section ? '600' : '400',
          }}
        >
          {section}
        </a>
      ))}
    </nav>
  )
}