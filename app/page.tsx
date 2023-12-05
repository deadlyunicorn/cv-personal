import Image from 'next/image'
import Links from "@/app/links"
import {ExperienceField} from '@/app/experience'
import StudiesTable from './studies'
import LanguagesTable from './languages'
import Hobbies from './hobbies'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='flex flex-col'>

      <PDFPrompt/>

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
              <h2 className='text-lg'>Full-Stack Developer</h2>
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
                Hello World! I am Alexander. 
                <br/>A Full-Stack Software Developer.
                <br/>I owe this to the fact that
                  <b> I love creating</b>. 
                <br/>I do so <em>by developing applications!</em><br/>
                <sup>Be sure to check my Github!</sup>
                
                <br/>I have significant experience with
                <br/><strong>Next.JS*, Flutter </strong> 
                  and <strong>MongoDB.</strong> <br/>
                <sup>*Next.JS is a Full-Stack JavaScript Framework, based on <b>React.js</b></sup>
                
                <br/>I make use of 
                <br/><strong>TypeScript, TailwindCSS and Git.</strong>
                <br/>
                <br/>I am into using <b>bleeding-edge technologies</b>.
                <br/>Another interest of mine is <b>Cyber Security</b>.
                <br/>
                <br/><b>Solving puzzles</b> fascinates me.
                <br/>When it comes to performance, I often stand out.
                <br/>Always looking multiple moves ahead.
                <br/>I am a <b>fast learner</b> and <b>adaptable</b>.
                <br/>
                <br/>I can communicate in <b>English</b> and <b>Greek</b> with ease.
                <br/>I am also capable of basic conversations in <b>Romanian</b>.
              </p>

            </div>
            <div>
              <h1 className='text-center underline'>Studies</h1>

              <div className='flex justify-center mt-2'>

                <StudiesTable/>
        
              </div>
              <p className='text-sm'>*Graduating in June 2024. Looking for an internship or regular job position.</p>


              
            </div>


  {/* 
            <div>
              <h1 className='text-center underline'>Languages</h1>
              
              <div className='flex justify-center mt-2'>
                <LanguagesTable/>
              </div>

            </div> */}

            <div>
              <h1 className='text-center underline'>Hobbies - Additional</h1>
              
              <div className='flex justify-center'>
                <Hobbies/>
              </div>

            </div>

            
        </main>
      </div>

      <PDFPrompt/>
    
    </div>

  )
}

const PDFPrompt = () => (
  <div className='h-10 w-full py-4 text-center
    items-center justify-center flex'>
    <Link href={"https://deadlyunicorn.s3.eu-central-1.amazonaws.com/CV/CV_Petrache_Alexander.pdf"}>
      Get the PDF
    </Link>
  </div>
)