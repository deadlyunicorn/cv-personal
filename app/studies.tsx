import { ItemKeys } from "./interfaces";

const LanguagesTable=()=>(

  <table id='languages'>

     <tbody>

      <LanguageItem
        language="Greek"
        level="Native"/>

      <LanguageItem
        language="English"
        level="Fluent"/>

      <LanguageItem
        language="Romanian"
        level="Conversational"/>

    </tbody>

  </table>


)

export default LanguagesTable;

const LanguageItem = ({language,level}:ItemKeys) => (

  <tr>
    <td>{language}</td>  
    <td>-</td>
    <td>{level}</td>
  </tr>

)