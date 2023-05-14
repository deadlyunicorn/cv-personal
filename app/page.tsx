import Image from 'next/image'
import Link from 'next/link'
import Links from "@/app/links"
import {ExperienceField} from '@/app/experience'
import StudiesTable from './studies'
import LanguagesTable from './languages'

export default function Home() {
  return (
    <>

    <div 
      className='
      flex flex-col 
      min-[580px]:flex-row 
      p-4 gap-4 w-full
      items-center
      min-[580px]:max-w-[794px]'>

      <aside className='border bg-white bg-opacity-10 rounded-md min-[580px]:w-[35%] w-[70%] px-4 py-10 flex flex-col justify-between h-full'>
        <div>
          <h1>Alexander Petrache</h1>
          <h2>Web Developer</h2>
        </div>


        
        <div className='text-xl flex flex-col items-center'>
          <h2> Links - Contact </h2>
          <Links/>

        </div>

        <ExperienceField/>

        

      </aside>

      <main className='border bg-white bg-opacity-10 rounded-md min-[580px]:w-[65%] w-[70%] px-4 py-10 flex flex-col justify-between h-full'>
          
          <div className='flex flex-col items-center text-center'>
            
            <h1 className='underline'>
              Summary
            </h1>
            
            <p>
              Hello, my name is Alex! 
              <br/>I am from Greece and I love creating,
              <br/>I do so by developing websites!
              <br/>I have mostly worked with 
              <br/>NextJS with TypeScript, TailwindCSS and MongoDB.
              <br/>
              <br/>I keep up with new technologies,
              <br/>and enjoy solving challenges.
              <br/>I have consistently stood out due to my performance.
              <br/>I possess strong organizational skills
              <br/> and a healthy skepticism.
              <br/>I am a fast learner and adaptable.
              <br/>I haven&apos;t worked on any team projects yet,
              <br/>but I would love to!
            </p>

          </div>
          <div>
            <h1 className='text-center underline'>Studies</h1>

            <div className='flex justify-center mt-2'>

              <StudiesTable/>
      
            </div>

            
          </div>



          <div>
            <h1 className='text-center underline'>Languages</h1>
            
            <div className='flex justify-center mt-2'>
              <LanguagesTable/>
            </div>

          </div>

          
      </main>
    </div>
    
    </>

  )
}

