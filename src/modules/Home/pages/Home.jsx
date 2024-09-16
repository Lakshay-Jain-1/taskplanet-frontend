import Carasouel from "../../../shared/components/Carasouel";
import Refer from "../components/Refer";
import { Socialmedia } from "../components/Socialmedia";



export default function Home(){


    return (
     <>
     
     <Carasouel images={["./carasouelAd2.png","./carasouelAd1.png","./carasouleAd3.png","./carasouleAd4.png"]} />
     <Socialmedia/>
     <Refer/>
     
     </>

    )
}