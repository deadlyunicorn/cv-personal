export const ExperienceField = () => (
  <div className='text-xl py-2'>
    <h2 className='text-center '> Experience - Skills</h2>
    <p className='text-sm text-center'>(relative)</p>

    <ExperienceItem skill='NextJS - ReactJS' rating='90%'/>
    <ExperienceItem skill='MongoDB' rating='80%'/>
    <ExperienceItem skill='NodeJS' rating='80%'/>
    <ExperienceItem skill='Git' rating='80%'/>
    <ExperienceItem skill='Linux' rating='90%'/>
    <ExperienceItem skill='SQL' rating='40%'/>
    <ExperienceItem skill='TypeScript' rating='80%'/>
    <ExperienceItem skill='Notion' rating='70%'/>
  </div>

)



function ExperienceItem({skill,rating}:{skill:string,rating:string}){

  return(
    <>
      <h2 className="no-underline font-medium text-blue-950">{skill}</h2>
      <div className='w-full h-4 rounded-md '>
        <div 
          className='skillBarAnimation bg-gradient-to-l from-blue-600 to-blue-950 h-full rounded-md'
          style={{
            maxWidth:rating,
          }}>

        </div>
      </div>
    </>
  )
}