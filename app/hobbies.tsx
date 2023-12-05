export default function Hobbies(){

  return (
    <div id="hobbies" className="flex w-full justify-around md:flex-row flex-col items-center">
      <ul className="list-disc list-inside">
        <li>Working Out</li>
        <li>Photography</li>
        <li>Music Mixing</li>
      </ul>
      <ul className="list-roman">
        <li>Driving Licenses</li>
        <p className="text-center">( A1, B )</p>
        <li>Near train station</li>
      </ul>
    </div>
  )
}