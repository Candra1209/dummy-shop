import { useEffect, useState } from 'react'
import {FetchData} from '../utils/FetchData'
import { Product } from '../model/ProductModel';
import ProductComp from '../component/ProductComp';
import PaggingComp from './PaggingComp';

function ListPorduct() {
    var [products, setProducts] = useState<Product[]>([]);
    var [total, setTotal] = useState<number>(0)
    var [page, setPage] = useState({
        limit : 20,
        skip : 0
    });

    useEffect(() => {
        var path = `https://dummyjson.com/products?limit=${page.limit}&skip=${page.skip}`
        FetchData(path).then((data: any) => {
            setProducts(data.products)
            setTotal(data.total)
            
        });

    },[page])

    
    console.log("ini state = ", page);
    return (
        <>
            <div className='
            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
            gap-10 p-8 sm:p-14 lg:p-20 '>
                {
                    products?
                    products.map((product) => {
                        return(
                            <ProductComp
                            key={product.id} 
                            id_product={product.id} 
                            nama_product={product.title}
                            kategori_product={product.category}
                            harga_product={product.price}
                            gmbr_product={product.thumbnail} 
                            />
                        )                
                    })
                    :<p>Loading</p>
                }
            </div>
            <div>
                <PaggingComp page={page} setPage={setPage} total={total}/>
            </div>
        </>
    )
}

export default ListPorduct
