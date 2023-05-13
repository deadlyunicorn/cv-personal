import Link from "next/link"
import Image from "next/image"

const Links = () => (

  <table className="text-base linkSection flex flex-col gap-2 py-2">
    <tr>

  
      <Link target="_blank"
            rel="noopener noreferrer"
              href="https://github.com/deadlyunicorn/">
        <td>
          <Image src="/github_filled.svg" width={20} height={20} alt='github icon'/>
        </td>
        <td>Github: /deadlyunicorn</td>
      </Link>
    </tr>
      
    <tr>
      <Link target="_blank"
            rel="noopener noreferrer"
              href="https://www.linkedin.com/in/alexander-petrache/">
        <td><Image src="/linkedin.png" width={20} height={20} alt='linkedin icon'/></td>
        <td>Linkedin: /alexander-petrache</td>
      </Link>
    </tr>
      

    <tr>
      <Link target="_blank"
            rel="noopener noreferrer"
              href="https://www.deadlyunicorn.dev/">
        <td>
          <Image id="globe" src="/web.svg" width={20} height={20} alt='globe icon'/>
        </td>
        <td>
          Personal Website

        </td>
      </Link>
    </tr>

    <tr>
      <Link href="mailto:retroalex1008@gmail.com">

        <td>
          <Image src="/mail.svg"  width={20} height={20} alt='mail icon'/>
        </td>
        <td>
          retroalex1008@gmail.com
        </td>
      </Link>
    </tr>

    <tr>
      <Link href="tel:+306980234544">
        <td>
          <Image src="/tel.svg" id='tel' width={20} height={20} alt='telephone icon'/>
        </td>
        <td>
          +306980234544
        </td>
      
      </Link>
    </tr>


    <tr>
      <Link target="_blank"
            rel="noopener noreferrer"
              href="https://goo.gl/maps/Bj8fJCYPCLUjDr1H6">
        <td>
          <Image src="/house.svg" width={20} height={20} alt='house icon'/>
        </td>
        <td>
          Athens 104 44, Greece 

        </td>
      </Link>
    </tr>


  </table>

)


export default Links;