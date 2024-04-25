import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { FetchData } from "../utils/FetchData";
import { Product } from "../model/ProductModel";
import Breadcrumbs from "../component/Breadcrumbs";
import { BackButton } from "../component/BackButton";




function Item() {
    const {id} = useParams()
    var [item , setItem] = useState<Product | null>(null)
    var [harga , setHarga] = useState<number | null>(null)




    useEffect(() =>{

        FetchData(`https://dummyjson.com/products/${id}`)
        .then((data) => {
            if (data){
                setItem(data)
                discounted(data.price, data.discountPercentage)
            }
        })

    },[])
    
    function discounted (price: number, discount: number){
        setHarga(Math.round(price - (price * (discount / 100))));
    }
    
    console.log(item?.images);
    

    return (
        <div>

            <div className="px-5 py-1 flex items-center gap-5">
                <BackButton/>
                <Breadcrumbs/>
            </div>

            <div className="mx-auto min-w-[300px]  max-w-[1000px] p-5 border rounded-3xl my-5 mx-2">
                <div className="relative bg-slate-100 min-w-[200px h-[300px] sm:h-[400px] md:h-[500px] rounded-t-3xl">
                        <img src={item?.thumbnail} alt="items"  className="absolute w-full h-full object-contain"/>
                </div>

                <div className="border-t">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-center">
                        <div>
                            <p className="text-4xl md:text-5xl font-cabin">{item?.title}</p>
                            <div className="flex gap-5 items-center">
                                <p className="text-ketiga font-extrabold font-quicksand text-3xl">{item?.brand}</p>
                                <p className="text-gray-500 font-semibold font-quicksand text-2xl">{item?.category}</p>
                            </div>
                        </div>
                        <div className="flex gap-5">
                            <span className="font-quicksand text-gray-500 text-xl md:text-2xl line-through ">${item?.price}</span>
                            <span className="
                            px-2 h-fit
                            bg-green-600 rounded-full
                            font-cabin font-extralight text-start text-white text-[10px] md:text-xs
                            ">{item?.discountPercentage}%</span>
                            <span className="font-quicksand text-black text-2xl md:text-3xl font-medium">
                                ${harga} USD
                            </span> 
                        </div>
                    </div>
                    <div className="flex gap-5 font-quicksand pt-1 pb-5">
                        <p>{item?.rating}</p> 
                        <p>sisa : {item?.stock}</p>
                    </div>

                    <div className=" font-cabin font-medium text-lg border-t">
                        <p>{item?.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item
