import { Link } from "react-router-dom"
import icon from '/icon.svg'


function Navbar() {
    return (
        <nav className="grid grid-cols-2 bg-ketiga p-2">
                <Link to='/dummy-shop' className="flex items-center">
                    <img src={icon} alt="icon" className="
                        w-[50px]
                    " />
                    <p className="font-anton font-medium text-[25px] text-utama">DummyShop</p>
                </Link>
            <div className="
            flex items-center justify-end px-5 space-x-5 sm:px-20 sm:space-x-20
            ">
                <Link className="font-cabin font-semibold text-xl text-utama" 
                to='/dummy-shop'>Home</Link>
                <Link className="font-cabin font-semibold text-xl text-utama" 
                to='/dummy-shop/product'>product</Link>
            </div>
        </nav>
    )
}

export default Navbar
