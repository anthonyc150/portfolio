import Image from "next/image"

const languages = [
    {name: "Python", logo: "/logos/python-svgrepo-com.svg"},
    {name: "Javascript", logo: "/logos/javascript-svgrepo-com.svg"},
    {name: "SQL", logo:"/logos/sql-svgrepo-com.svg"},
    {name: "Typescript", logo:"/logos/typescript-svgrepo-com.svg"},
    {name: "C", logo: "/logos/c-svgrepo-com.svg"},
    {name: "PHP", logo: "/logos/php-svgrepo-com.svg"}
]

const frameworks =[
    {name: "React", logo: "/logos/reactjs-svgrepo-com.svg"},
    {name: "Next.js", logo: "/logos/next-dot-js-svgrepo-com.svg"},
    {name: "Numpy", logo: "/logos/numpy-svgrepo-com.svg"},
    {name: "Pandas", logo: "/logos/pandas-svgrepo-com.svg"},
    {name: "PostgreSQL", logo: "/logos/postgresql-svgrepo-com.svg"}
]

const tools =[
    {name: "Linux", logo: "/logos/linux-svgrepo-com.svg"},
    {name: "Supabase", logo: "/logos/supabase.svg"},
    {name: "Git", logo: "/logos/git.svg"},
    {name: "Github", logo:"/logos/github.svg"}
]
export default function Skills(){
    return(
        <div id="Skills">
            <div className="section-container">
                <h1 className="font-semibold text-2xl pb-3">Skills</h1>
                <div 
                    style={{height: '1.5px', background: 'linear-gradient(to right, transparent 0%, #FF8400 15%, #FF8400 80%, transparent 100%)', marginBottom: '2rem'}}> 
                </div>
                <p style={{color:'#FF8400', opacity: 0.8}} className="font-medium text-sm uppercase tracking-widest text-gray-500 pb-2">Languages</p>
                <div className="flex flex-wrap gap-3 pt-2">
                    {languages.map ((language) =>(
                        <span
                            key={language.name}
                            className="flex items-center gap-1 px-5 py-1 rounded-full border border-gray-400 text-sm font-medium shadow-sm"
                        >
                            <Image
                                src={language.logo}
                                alt={language.name}
                                width={16}
                                height={16}>
                            </Image>
                            {language.name}
                        </span> 
                    ))}
                </div>
                <p className="text-lg> pt-4">Frameworks</p>
                <div className="flex flex-wrap gap-3 pt-2">
                    {frameworks.map ((framework) =>(
                        <span
                            key={framework.name}
                            className="flex items-center gap-1 px-5 py-1 rounded-full border border-gray-400 text-sm font-medium shadow-sm"
                        >
                            <Image
                                src={framework.logo}
                                alt={framework.name}
                                width={16}
                                height={16}>
                            </Image>
                            {framework.name}
                        </span> 
                    ))}
                </div>
                <p className="text-lg pt-4">Tools</p>
                <div className="flex flex-wrap gap-3 pt-2">
                    {tools.map ((tool) =>(
                        <span
                            key={tool.name}
                            className="flex items-center gap-1 px-5 py-1 rounded-full border border-gray-400 text-sm font-medium shadow-sm"
                        >
                            <Image
                                src={tool.logo}
                                alt={tool.name}
                                width={16}
                                height={16}>
                            </Image>
                            {tool.name}
                        </span> 
                    ))}
                </div>
            </div>
        </div>
    )
}