import Image from "next/image"
import AnimatedContent from '@/app/components/verticalAni'


export default function Home(){
  return(
    <main className="min-h-screen">
      {/*
        sizing scale for text
        text-sm = small
        text-base default
        text-lg = large 
        text-xl = extra-large
        text-2xl through text-9xl gets progressively bigger*/}

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

    <div>
    <div className="flex flex-col items-center justify-center gap-5 pt-15 px-20">
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
      <div>
        <p className="font-semibold text-lg px-83">Hi! I'm Anthony, and I am a Computer Science student at the University at Buffalo.
          I love problem solving and have a passion for software engineering and data science. I'm actively expanding my skills through new 
          projects and opportunities.</p>
      </div>
    </div>
    </div>
    </AnimatedContent>
    </main>
  )
}