import axios from "axios"


const getAllSpecificPlatformTasksArray = async (platformName) => {
    try{
    const response = await axios.get(import.meta.env.VITE_NAME ,{withCredentials:true});
    let resultArray=[]
    
    response.data.forEach((ele)=>{
      let {platform}=ele
      if(platform==platformName){
        resultArray.push(ele)
      }
    })
    return resultArray;

  }
    catch(err){
      console.log(err)
    }
  };
  

 const gettingSubmitedDataAndSendingItToServer= async (name,file)=>{
    console.log(name,file)
 }

 export {getAllSpecificPlatformTasksArray,gettingSubmitedDataAndSendingItToServer}
