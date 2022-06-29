import React from 'react'
import {SiNotion} from "react-icons/si";
type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='flex mt-5 justify-center'> 
        
       
        
  <div className="flex-1 ml-5">
    <div className="flex gap-3 ">
     <SiNotion fontSize={30}/>
     <div className=""> Notion</div>
     </div>
     </div>
  <div className="contents">
    <div className="flex-1 ...">Product</div>
    <div className="flex-1 ...">Product</div>
    <div className="flex-1 ...">Product</div>
    <div className="flex-1 ...">Product</div>
  </div>
  
</div>
        
  )
}
export default Footer