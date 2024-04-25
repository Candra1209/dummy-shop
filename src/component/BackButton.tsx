import { ArrowUturnLeftIcon } from "@heroicons/react/16/solid"
import { useNavigate } from "react-router-dom"

export function BackButton() {
let navigate = useNavigate();


    return (
        <button onClick={() => navigate(-1)} className="group hover:bg-keempat rounded-md py-1 px-3"> 
            <ArrowUturnLeftIcon className="w-[30px] group-hover:fill-white "/>
        </button>
    )
}


