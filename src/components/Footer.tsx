import React, { Children } from 'react'
import {SiNotion} from "react-icons/si";
import footer from "../fake-db/footer.json"
type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='flex mt-5 '> 
        
       
        
<div className=" ml-5">
    <div className="flex gap-3 ">
     <SiNotion fontSize={30}/>
     <div className="">Notion</div>
     </div>
     </div>
<div className="flex-1">
    <ul className="flex justify-around">
     {
      footer.data.map((item) => (
          <li className="">
            <p className='flex font-bold'>{item.title}</p>
            <ul>
            {item.children.map(ChildrenItems => (
           <li>
            <a href="#" className=' hover:underline  text-zinc-500 decoration-red-600 hover:text-red-600'>{ChildrenItems.title}</a>
           </li>
))}
            </ul>
          </li>
      ))
     }
      
      </ul>

      </div>
</div>
        
  )
}
export default Footer