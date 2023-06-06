export const ExperienceField = () => (
  <div className='text-xl py-2'>
    <h2 className='text-center '> Experience - Skills</h2>
    <p className='text-sm text-center'>(relative)</p>

    <ExperienceItem skill='NextJS (React Framework)' rating='85%'/>
    <ExperienceItem skill='MongoDB (Databases)' rating='65%'/>
    <ExperienceItem skill='Git' rating='70%'/>
    <ExperienceItem skill='C++' rating='65%'/>
    <ExperienceItem skill='SQL' rating='40%'/>
    <ExperienceItem skill='Linux' rating='90%'/>
    <ExperienceItem skill='MSOffice' rating='60%'/>
    <ExperienceItem skill='Notion (Documentation)' rating='70%'/>


  </div>

)



function ExperienceItem({skill,rating}:{skill:string,rating:string}){

  return(
    <>
      <h2 className="no-underline">{skill}</h2>
      <div className='w-full h-4 rounded-md border border-[#a786df]'>
        <div 
          className='skillBarAnimation bg-gradient-to-l from-[#a786df] to-[#d8bfff] h-full rounded-md'
          style={{
            maxWidth:rating,
          }}>

        </div>
      </div>
    </>
  )
}