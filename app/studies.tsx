import { ReactNode } from "react";
import { ItemKeys } from "./interfaces";

const LanguagesTable=()=>(

  <table id='studies'>

     <tbody>

     <StudiesItem
        description={
          <p>
            Studies for a <b>VET degree ( Level 5 )</b> with a focus 
            on <b>Software Development</b>
          </p>
        }
        years="2022 - 24"/>

      <StudiesItem 
        description={
          <p>
            Graduated from a General Lyceum 
            <br/><sup>with an average of <b>19.5/20</b></sup>
          </p>
        }
        years="2021"/>

    </tbody>

  </table>


)

export default LanguagesTable;

const StudiesItem = ({years,description}:{years:string,description:ReactNode}) => (

  <tr>
    <td className="whitespace-nowrap">{years}</td>  
    <td>-</td>
    <td>{description}</td>
  </tr>

)