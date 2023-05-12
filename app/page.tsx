import Image from 'next/image'
import Link from 'next/link'
import Links from "./links"
import ExperienceItem from './experience'

export default function Home() {
  return (
    <>

    <div 
      className='flex p-4 gap-4 h-full'>

      <aside className='border bg-white bg-opacity-10 rounded-md w-[35%] px-4 py-10 flex flex-col justify-between'>
        <div>
          <h1>Alexander Petrache</h1>
          <h2>Web Developer</h2>
        </div>


        
        <div className='text-xl py-2'>
          <h2 className='text-center'> Links - Contact </h2>
          <Links/>

        </div>


        <ExperienceField/>

        

      </aside>

      <main className='border bg-white bg-opacity-10 rounded-md w-[65%] px-4 py-10 flex flex-col justify-between'>
          
          <div>
            <h1 className='text-center underline'>
              Summary
            </h1>
            <p className='text-center'>
              Hello, name is Alex! 
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
              <table className='w-fit' id='studies'>
                <tr>
                  <td>2022-24</td>  
                  <td>-</td>
                  <td>I am currently studying at the
                    <br/>&quot;Vocational School of Peristeri&quot; 
                    <br/>in the specialty of 
                    <br/>&quot;Technician of Applications in Informatics&quot;.
                  </td>
                </tr>

                <tr>
                  <td>2021</td>
                  <td>-</td>
                  <td>Graduated from High School.</td>
                </tr>
              </table>
            </div>

            
          </div>



          <div>
            <h1 className='text-center underline'>Languages</h1>
            
            <div className='flex justify-center mt-2'>
              <table className='w-fit' id='languages'>
                <tr>
                  <td>Greek</td>  
                  <td>-</td>
                  <td>Native</td>
                </tr>
                <tr>
                  <td>English</td>
                  <td>-</td>
                  <td>Fluent</td>
                </tr>

                <tr>
                  <td>Romanian</td>
                  <td>-</td>
                  <td>Conversational</td>
                </tr>
              </table>
            </div>

          </div>

          
      </main>
    </div>
    
    </>

  )
}

const ExperienceField = () => (
        <div className='text-xl py-2'>
          <p className='text-center '> Experience - Skills</p>
          <p className='text-sm text-center'>(relative)</p>

          <ExperienceItem skill='NextJS' rating='85%'/>
          <ExperienceItem skill='MongoDB' rating='65%'/>
          <ExperienceItem skill='Git' rating='70%'/>
          <ExperienceItem skill='C++' rating='65%'/>
          <ExperienceItem skill='SQL' rating='40%'/>
          <ExperienceItem skill='Linux' rating='90%'/>
          <ExperienceItem skill='MSOffice' rating='60%'/>
          <ExperienceItem skill='Notion' rating='70%'/>


        </div>

)
