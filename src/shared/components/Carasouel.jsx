import { useState,useEffect } from "react"



export default function Carasouel({images}){
  
   const [imgSetter,setimgSetter]=useState(0) 

   useEffect(()=>{
       setInterval(()=>{
        setimgSetter((prev)=>(prev+1)%images.length)
    },6000)
   },[])
  
    return (
      <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"30px"}}>
    
       <img style={{borderRadius:"12px"}} src={images[imgSetter]} width="380px"/>

      </div>

    )
}