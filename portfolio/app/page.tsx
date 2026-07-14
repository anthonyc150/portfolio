import Image from "next/image"
import AnimatedContent from '@/app/components/verticalAni'
import SideNav from '@/app/components/sideNav'
import Skills from '@/app/components/skills'


export default function Home() {
  return (
    <main className="min-h-screen">
      {/*
        sizing scale for text
        text-sm = small
        text-base default
        text-lg = large 
        text-xl = extra-large
        text-2xl through text-9xl gets progressively bigger*/}
      <SideNav />
      <AnimatedContent
        distance={100}
        direction="vertical"
        reverse={false}
        duration={0.8}
        ease="power3.out"
        initialOpacity={0}
        animateOpacity
        scale={1}
        threshold={0.1}
        delay={0}>

        <div id="About">
          <div>
            <div className="flex flex-col items-center justify-center pt-15 px-20">
              <div className="flex items-center gap-5">
                <Image
                  src="/linkedin photo.jpeg"
                  alt="Anthony Chinchilla"
                  width={200}
                  height={200}
                  className="rounded-full"
                />
                <div className="flex flex-col">
                  <h1 className="font-semibold text-5xl">Anthony Chinchilla</h1>
                  <p className="text-xl">Software Engineering & Data Science</p>
                </div>
              </div>
            </div>
            <div className="section-container">
              <h1 className="font-semibold text-2xl">About</h1>
              <p className="font-normal text-lg pt-2">Hi! I'm Anthony, and I am a Computer Science student at the University at Buffalo.
                I love problem solving and have a passion for software engineering and data science. I'm actively expanding my skills through new
                projects and opportunities.</p>
            </div>
          </div>
        </div>
        {/*skills has separated function in skills.tsx*/}
        <Skills />
        <div id="Projects">
          <div className="section-container">
            <h1 className= "font-semibold text-2xl">Projects</h1>
          </div>
        </div>
      </AnimatedContent>
    </main>
  )
}