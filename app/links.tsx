import Link from "next/link"
import Image from "next/image"
import { ItemKeys } from "./interfaces";

const Links = () => (

  <table className="text-base linkSection">
    
    <tbody>

      <Item
        href="https://github.com/deadlyunicorn/"
        id="github"
        src="github_filled.svg"
        alt="github icon"
        description="Github: /deadlyunicorn"
      />


        
      <Item
        href="https://www.linkedin.com/in/deadlyunicorn"
        id="linkedin"
        src="linkedin.svg"
        alt="linkedin icon"
        description="Linkedin: /in/deadlyunicorn"
      />


      <Item 
        href="https://www.deadlyunicorn.dev/"
        id="globe"
        src="web.svg"
        alt="globe icon"
        description="www.deadlyunicorn.dev"/>

      <Item
        href="mailto:retroalex1008@gmail.com"
        id="mail"
        src="mail.svg"
        alt="mail icon"
        description="retroalex1008@gmail.com"/>

      <Item
        href="tel:+306980234544"
        id="tel"
        src="tel.svg"
        alt="telephone icon"
        description="+30 698 023 4544"/>

      <Item 
        href="https://goo.gl/maps/Bj8fJCYPCLUjDr1H6"
        id="address"
        src="house.svg"
        alt="house icon"
        description="Athens 104 44, Greece"/>

    </tbody>
  </table>

)


const Item = ({href,src,alt,id,description}:ItemKeys) => (
  

    <tr>
   

      <td>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={href}>
        
          <div className="sm:flex hidden shrink-0 w-5 h-5">
            <Image 
              id={id} src={src} width={20} height={20} alt={alt}/>
          </div>
        
        </Link>
      </td>

      
      <td>
        <Link
          className="text-blue-800 flex text-xs sm:text-base"
          target="_blank"
          rel="noopener noreferrer"
          href={href}>
          {description}
        </Link>
      </td>

  </tr>

)

export const LinksCL = () =>( //Links for cover letter

  <table className="text-base linkSection">
    
    <tbody>

      <Item
        href="mailto:retroalex1008@gmail.com"
        id="mail"
        src="mail.svg"
        alt="mail icon"
        description="retroalex1008@gmail.com"/>

      <Item
        href="tel:+306980234544"
        id="tel"
        src="tel.svg"
        alt="telephone icon"
        description="+30 698 023 4544"/>

      <Item 
        href="https://goo.gl/maps/Bj8fJCYPCLUjDr1H6"
        id="address"
        src="house.svg"
        alt="house icon"
        description="Athens 104 44, Greece"/>

        

    </tbody>
  </table>

)

export default Links;