import { Link } from "react-router-dom"
import shop from '../assets/shop.svg'

function Hero() {
    return (
        <div className="
        relative 
        flex justify-center items-center
        w-full h-screen bg-utama
        ">

            <div className="absolute w-[400px] top-36 md:bottom-20 md:right-36">
                <img src={shop} alt="shop icon" 
                className=""/>
            </div>

            <div className="
            relative bg-ketiga/95 w-[400px] h-[400px] rounded-full flex flex-col justify-center items-center
            ">
                <span>
                    <span className="font-anton text-[50px] text-utama">Dummy Shop</span>
                    <span className="font-quicksand font-semibold">by candra</span>
                </span>
                <Link to='/dummy-shop/products' className="
                    mt-8 px-8 py-3 bg-keempat rounded-full
                ">
                    <p className="font-cabin font-semibold text-lg text-utama">see product</p>
                </Link>
            </div>
            
        </div>
    )
}

export default Hero
