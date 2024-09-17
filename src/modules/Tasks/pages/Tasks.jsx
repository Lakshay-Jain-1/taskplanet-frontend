import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllSpecificPlatformTasksArray } from "../../../services/apiClient";
import Task from "../components/Task";
import DisclaimerDialogBox from "../components/DisclaimerDialogBox";
import SubmitDialogBox from "../components/SubmitDialogBox";

export default function Tasks() {
   const { id } = useParams();
   const [imgName, setImgName] = useState("");
   const [tasks, setTasks] = useState([]);

   useEffect(() => {  
       setImgName(`/${id}.png`);
       getAllSpecificPlatformTasks(id);
   }, [id]);

   const getAllSpecificPlatformTasks = async (id) => {
     try {
       const data = await getAllSpecificPlatformTasksArray(id);
      
       setTasks([...data]);
     } catch (error) {
       console.error("Error fetching tasks:", error);
     }
   };

   return (
    <>
    <SubmitDialogBox/>
    <DisclaimerDialogBox/>
     <div style={{display: "grid",gridTemplateColumns:"auto ", justifyContent:"center" ,paddingBottom:"120px" }}>
       {tasks.length > 0 ? (
         tasks.map((task, index) => (
           <Task 
             key={index} 
             imgName={imgName} 
             id={id} 
             task={task} 
           
           />
         ))
       ) : (
         <p>Loading tasks...</p>
       )}
      
     </div>
     </>
   );
   
}