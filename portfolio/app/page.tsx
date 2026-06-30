import Image from "next/image"

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
    <div className="relative">
      <h1 className="absolute top-47 left-225 font-semibold text-5xl">Anthony Chinchilla</h1>
      <p className="absolute top-59 left-225 text-xl">Software Engineering & Data Science</p>
      <Image
      src="/linkedin photo.jpeg"
      alt="Anthony Chinchilla"
      width={200}
      height={200}
      className="absolute top-20 left-170 rounded-full">
      </Image>
    </div>
    
    </main>
  )
}