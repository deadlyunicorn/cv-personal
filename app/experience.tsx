export default function ExperienceItem({skill,rating}:{skill:string,rating:string}){

  return(
    <div>
            <h2>{skill}</h2>
            <div className='w-full h-4 rounded-md border border-[#a786df]'>
              <div style={{width:rating}} className='bg-gradient-to-l from-[#a786df] to-[#d8bfff] h-full rounded-md'></div>
            </div>
    </div>
  )
}