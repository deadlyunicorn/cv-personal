import Link from "next/link"
import Image from "next/image"
import { ItemKeys } from "./interfaces";

const Links = () => (

  <table className="text-base linkSection">
    
    <tbody>

    <Item
        ariaLabel="bussiness mail"
        href="mailto:petrache.dev@gmail.com"
        id="mail"
        src="mail.svg"
        alt="mail icon">
        petrache.dev@gmail.com
      </Item>
        
      <Item
        ariaLabel="LinkedIn profile"
        href="https://www.linkedin.com/in/alexander-petrache/"
        id="linkedin"
        src="linkedin.svg"
        alt="linkedin icon"
      >/in/alexander-petrache</Item>

      <Item
        ariaLabel="Github profile"
        href="https://github.com/deadlyunicorn/"
        id="github"
        src="github_filled.svg"
        alt="github icon"
      >/deadlyunicorn</Item>


      <Item 
        ariaLabel="Personal website"
        href="https://www.deadlyunicorn.dev/"
        id="globe"
        src="web.svg"
        alt="globe icon"
      >deadlyunicorn.dev</Item>

      <Item
        ariaLabel="phone number"
        href="tel:+306980234544"
        id="tel"
        src="tel.svg"
        alt="telephone icon"
      >+30 698 023 4544</Item>

      <Item 
        href="https://goo.gl/maps/Bj8fJCYPCLUjDr1H6"
        id="address"
        src="house.svg"
        alt="house icon"
      >Athens 104 44, Greece</Item>

    </tbody>
    <tfoot>
      <tr>
        <td className="text-sm text-center">
            Due to nationality ( Romanian )
            <br/><u>not obligated for military duties.</u>
        </td>
      </tr>
    </tfoot>
  </table>

)


const Item = ({href,src,alt,id,children,ariaLabel}:ItemKeys) => (
  

    <tr className="flex items-center w-full gap-x-[2px]">
   

      <td>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={href}>
        
          <div className="flex shrink-0 w-5 h-5 translate-y-[2px]">
            <Image 
              id={id} src={src} width={20} height={20} alt={alt}/>
          </div>
        
        </Link>
      </td>

      
      <td>
        <Link
          aria-label={ariaLabel}
          className="text-blue-800 flex text-base items-center"
          target="_blank"
          rel="noopener noreferrer"
          href={href}>
          {children}
        </Link>
      </td>

  </tr>

)

export const LinksCL = () =>( //Links for cover letter

  <table className="text-base linkSection">
    
    <tbody>

      <Item
        href="mailto:petrache.dev@gmail.com"
        id="mail"
        src="mail.svg"
        alt="mail icon"
        description="petrache.dev@gmail.com"/>

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