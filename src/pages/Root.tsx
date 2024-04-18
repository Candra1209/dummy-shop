import { Outlet } from "react-router-dom"
import Navbar from "../component/Navbar"



function Root() {


    return (
        <div className="bg-white">
            <div>
                <Navbar/>
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    )
}

export default Root
