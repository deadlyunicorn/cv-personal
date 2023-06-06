import Image from 'next/image'
import Link from 'next/link'
import {LinksCL} from "@/app/links"
import {ExperienceField} from '@/app/experience'


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

      <main className='border bg-white bg-opacity-10 rounded-md min-[580px]:w-[100%] w-[70%] px-4 py-5 flex flex-col justify-between h-full'>
          
      <div>
        <h1 className='underline text-center'>
          Cover Letter
        </h1>
      </div>
      
            
      <div className='flex justify-between px-4'>
          <div>
            <h1>Alexander Petrache</h1>
            <h2>Web Developer</h2>

            <p>
              To:
              <br/>the HR Team
              <br/>of [Company name]

            </p>

          </div>
          <div>
            <h2> Contact </h2>
            <LinksCL/>
          </div>
      </div>

          <div className='flex flex-col items-center text-center leading-6'>
            <p>
              
              <br/>Dear HR Team of [Company Name],
              <br/>
              <br/>I am writing this cover letter to apply 
              <br/>for the [Job Role] role at [Company Name]. 
              <br/>
              <br/>I am a fresh Web Developer who is willing to work on a larger team.
              <br/>
              <br/>[Relevant Information]
              <br/>
              <br/>I am looking for a job where I can evolve myself 
              <br/>and make continuous progress with my career.
              <br/>
              <br/>Thank you for considering my application. I am looking forward to the opportunity
              <br/>to discuss my application further and demonstrate my eagerness for this position in an Interview.
              <br/>
              <br/>Sincerely,
              <br/>Alexander Petrache

            </p>

          </div>



          
      </main>
    </div>
    
    </>

  )
}

