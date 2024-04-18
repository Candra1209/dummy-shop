import { Link } from "react-router-dom"
import lost from '../assets/take-bath.svg'

function ErrorPage() {
    return (
        <section className="
        h-screen 
        flex justify-center items-center
        bg-utama
        ">

            <img src={lost} alt="image" className="
            absolute 
            w-[500px]
            "/>

            <div className="
            relative p-5 text-center
            flex flex-col gap-5
            items-center
            bg-white/50 backdrop-blur-sm rounded-3xl
            ">
                <h1 className="
                font-anton
                text-9xl text-ketiga
                ">
                    404!
                </h1>
                <span className="
                font-quicksand font-semibold
                text-keempat text-lg
                ">
                    Wow!! easy boy, there no such pages here
                </span>
                <Link to='/dummy-shop/' className="
                px-5 py-3
                font-cabin font-extrabold
                text-xl text-utama hover:text-keempat
                bg-keempat rounded-lg hover:bg-transparent
                hover:ring-2 hover:ring-keempat
                ">
                    GO BACK
                </Link>
            </div>
        </section>
    )
}

export default ErrorPage
