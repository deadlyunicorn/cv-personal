import { ReactNode } from "react";
import { ItemKeys } from "./interfaces";

const LanguagesTable=()=>(

  <table id='studies'>

     <tbody>

     <StudiesItem
        description={
          <p>
            I am currently studying at the
            <br/>&quot;Vocational School of Peristeri, Greece&quot; 
            <br/>in the specialty of 
            <br/>&quot;Technician of Applications in Informatics&quot;.
          </p>
        }
        years="2022-24"/>

      <StudiesItem 
        description={
          <p>
            Graduated from High School.
          </p>
        }
        years="2021"/>

    </tbody>

  </table>


)

export default LanguagesTable;

const StudiesItem = ({years,description}:{years:string,description:ReactNode}) => (

  <tr>
    <td>{years}</td>  
    <td>-</td>
    <td>{description}</td>
  </tr>

)