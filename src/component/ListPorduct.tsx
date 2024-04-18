import { useEffect, useState } from 'react'
import {FetchData} from '../utils/FetchData'
import { Product } from '../model/ProductModel';
import ProductComp from '../component/ProductComp';

function ListPorduct() {
    var [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {

        FetchData('https://dummyjson.com/products').then((data: any) => setProducts(data.products));

    },[])

    

    return (
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
    )
}

export default ListPorduct
