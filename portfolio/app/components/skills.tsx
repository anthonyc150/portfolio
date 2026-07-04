import Image from "next/image"

const skills = [
    {name: "Python", logo: "/logos/python-svgrepo-com.svg"},
    {name: "Javascript", logo: "/logos/javascript-svgrepo-com.svg"},
    {name: "React", logo: "/logos/reactjs-svgrepo-com.svg"},
    {name: "Next.js", logo: "/logos/next-dot-js-svgrepo-com.svg"},
    {name: "SQL", logo:"/logos/sql-svgrepo-com.svg"},
    {name: "Typescript", logo:"/logos/typescript-svgrepo-com.svg"},

]
export default function Skills(){
    return(
        <div id="Skills">
            <div className="section-container">
                <h1 className="font-semibold text-2xl">Skills</h1>
                <div className="flex flex-wrap gap-3 pt-4">
                    {skills.map ((skill) =>(
                        <span
                            key={skill.name}
                            className="flex items-center gap-2 px-5 py-1 rounded-full border border-gray-400 text-sm font-medium shadow-sm"
                        >
                            <Image
                                src={skill.logo}
                                alt={skill.name}
                                width={16}
                                height={16}>
                            </Image>
                            {skill.name}
                        </span> 
                    ))}
                </div>
            </div>
        </div>
    )
}