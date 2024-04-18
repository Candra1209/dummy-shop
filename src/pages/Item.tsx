import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"
import { FetchData } from "../utils/FetchData";
import { Product } from "../model/ProductModel";



function Item() {
    const Location = useLocation();
    const querryParams = new URLSearchParams(Location.search)
    var [item , setItem] = useState<Product>()




    useEffect(() =>{

        FetchData(`https://dummyjson.com/products/${querryParams.get('id')}`)
        .then((data) => {
            setItem(data)
        })

    },[])
    

    return (
        <div>
            <div>
            <img src={item?.thumbnail} alt="" />
            </div>
            <div className="grid grid-cols-2">
                <div>
                    <p className="text-5xl font-cabin">{item?.title}</p>
                    <div className="flex gap-5 items-center">
                        <p className="text-ketiga font-extrabold font-quicksand text-3xl">{item?.brand}</p>
                        <p className="text-gray-500 font-semibold font-quicksand text-2xl">{item?.category}</p>
                    </div>
                </div>
                <div className="flex gap-5">
                    <span className="font-quicksand text-gray-500 text-2xl line-through ">${item?.price}</span>
                    <span className="
                    px-3 h-5
                    bg-keempat rounded-full
                    font-cabin font-extralight text-start text-white text-xs
                    ">{item?.discountPercentage}%</span>
                    {/* <span className="font-quicksand text-black text-3xl font-medium">
                        ${(item?.price - (item?.price))} USD
                    </span> */}
                </div>
            </div>
            <div>
                <p>Rating {item?.rating}</p>
                <p>sisa : {item?.stock}</p>
            </div>

            <div>
                <p>{item?.description}</p>
            </div>
        </div>
    )
}

export default Item
