import { UpdateTopicDetailsInStore } from "@/services/content.service"
import { useEffect } from "react"

export default function Test(){
    // id= 3ZOy8Ln0pvv2U5jsQKIN;
    useEffect(()=>{
        UpdateTopicDetailsInStore('3ZOy8Ln0pvv2U5jsQKIN')
    },[])
    return <div>this is the test html</div>
};

