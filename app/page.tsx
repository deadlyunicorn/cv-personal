import Image from 'next/image'
import Links from "@/app/links"
import {ExperienceField} from '@/app/experience'
import StudiesTable from './studies'
import LanguagesTable from './languages'
import Hobbies from './hobbies'

export default function Home() {
  return (
    <>

    <div 
      className='
      flex flex-col 
      md:flex-row 
      p-4 gap-4 w-full
      items-center
      md:max-w-[794px]'>

      <aside className='border bg-white bg-opacity-10 rounded-md 
      md:w-[35%] w-[70%] px-4 py-10 
      gap-y-6
      flex flex-col justify-between h-full'>
        <div className='flex flex-col'>
          <h1 className='font-semibold text-2xl'>Alexander Petrache</h1>
          
          <div className='flex gap-x-2'>
            <h2 className='text-lg'>Web Developer</h2>
            <Image 
              className='self-center'
              alt='my internet avatar'
              height={20}
              width={20}
              src={'/deadlyunicorn.png'}/>
          </div>

        </div>


        
        <div className='text-xl flex flex-col items-center'>
          <h2> Links - Contact </h2>
          <Links/>

        </div>

        <ExperienceField/>

        

      </aside>

      <main className='border bg-white bg-opacity-10 rounded-md md:w-[65%] w-[70%] px-4 py-10 
      gap-y-4
      flex flex-col justify-between h-full'>
          
          <div className='flex flex-col items-center text-center'>
            
            <h1 className='underline'>
              Summary
            </h1>
            
            <p>
              Hello, I am Alex! 
              <br/>I live in Greece. I love creating,
              <br/>I do so by developing websites!
              <br/>I have mostly worked with 
              <br/><strong>NextJS</strong> ( <em>a React Framework</em> ) and <strong>MongoDB.</strong>
              <br/>
              <br/>I also have experience working with
              <br/><strong>NodeJS, TypeScript and TailwindCSS.</strong>
              <br/>
              <br/>I keep up with the new technologies.
              <br/>I currently <em>want to gain experience</em> on
              <br/>Mobile Dev ( <strong>Flutter</strong> )
              <br/>mi<b>X</b>ed <b>R</b>eality Dev ( Unity? )
              <br/><strong>Prompt Engineering</strong> ( Llama2 )
              <br/>
              <br/>I enjoy solving challenges.
              <br/>I have consistently stood out due to my performance.
              <br/>Disorganization deters me.
              <br/>I am a fast learner and adaptable.
              <br/>
              <br/>I can communicate with ease in <b>English</b> and <b>Greek</b>.
              <br/>I can also have basic conversations in <b>Romanian</b>.
            </p>

          </div>
          <div>
            <h1 className='text-center underline'>Studies</h1>

            <div className='flex justify-center mt-2'>

              <StudiesTable/>
      
            </div>

            
          </div>


{/* 
          <div>
            <h1 className='text-center underline'>Languages</h1>
            
            <div className='flex justify-center mt-2'>
              <LanguagesTable/>
            </div>

          </div> */}

          <div>
            <h1 className='text-center underline'>Hobbies - Interests - Additional</h1>
            
            <div className='flex justify-center'>
              <Hobbies/>
            </div>

          </div>

          
      </main>
    </div>
    
    </>

  )
}

