export const ExperienceField = () => (
  <div className='text-xl py-2'>
    <h2 className='text-center '> Experience - Skills</h2>
    <p className='text-sm text-center'>(relative)</p>

    <ExperienceItem skill='Next.JS - React.JS' rating='90%'/>
    <ExperienceItem skill='Flutter' rating='75%'/>
    <ExperienceItem skill='MongoDB' rating='70%'/>
    <ExperienceItem skill='Figma - Inkscape' rating='60%'/>
    <ExperienceItem skill='Git' rating='80%'/>
    <ExperienceItem skill='Linux' rating='100%'/>
    <ExperienceItem skill='HTML, CSS, JS' rating='95%'/>
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