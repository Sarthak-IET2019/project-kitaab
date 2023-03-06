import { DeleteDocumentFromStore } from "@/services/content.service";
import { useEffect } from "react";
export default function Test() {
    useEffect(() => {
        DeleteDocumentFromStore("v0mNjDjPGbn4FXrE7mxY")

    }, [])
    return <div> This is Delete Test  </div>

}
