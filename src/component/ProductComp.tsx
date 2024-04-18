import { Link } from "react-router-dom"

interface propProductComp {
    id_product : number,
    nama_product: string,
    kategori_product: String,
    harga_product: number,
    gmbr_product: string,
}

function ProductComp({id_product, nama_product, kategori_product, harga_product, gmbr_product}: propProductComp ) {
    return (
        <Link to={`/dummy-shop/product?id=${id_product}`}>
            <div className="
            flex flex-col
            min-w-[250px] max-w-[350px] h-auto
            ring-1 ring-slate-300 rounded-[10px]
            group
            ">
                <div className="relative w-full h-[200px]">
                    <img src={gmbr_product} alt="gambar product" 
                    className="
                        h-full w-full
                        absolute object-cover rounded-t-[10px]
                        brightness-50 group-hover:brightness-100
                    "/>
                </div>
                <div className="p-2">
                    <p className="line-clamp-1 text-keempat text-lg font-cabin font-semibold">{nama_product}</p>
                    <p className="text-sm text-gray-400 font-quicksand ">{kategori_product}</p>
                    <p className="font-quicksand text-ketiga text-lg">${harga_product} USD</p>
                    <br />
                </div>
            </div>
        </Link>
    )
}

export default ProductComp
