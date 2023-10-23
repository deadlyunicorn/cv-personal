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
                Greetings! I am Alex and I live in Greece! 
                <br/>I love creating and I do so 
                <br/><em>by developing webapps!</em>
                <br/>I have mostly worked with 
                <br/><strong>NextJS</strong> <br/>( <em>a React Framework</em> )<br/> and <strong>MongoDB.</strong>
                <br/>
                <br/>I also have experience working with
                <br/><strong>NodeJS, TypeScript and TailwindCSS.</strong>
                <br/>
                <br/>I keep up with the new technologies.
                <br/>I currently <em>want to experiment</em> with
                <br/><strong>Flutter</strong> and <strong> Rust </strong>
                <br/>
                <br/>Some other fields I find intriguing are:
                <br/>Mixed/Virtual Reality
                <br/>Prompt Engineering 
                <br/>Cyber Security
                <br/>
                <br/>I enjoy <b>dealing up with new challenges</b>.
                <br/>I have consistently stood out due to my performance.
                <br/>Disorganization deters me.
                <br/>I am a <b>fast learner</b> and <b>adaptable</b>.
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