import axios from "axios";
import { Product } from "../model/ProductModel";

export async function FetchData(url : string){
    
    let data: Product;
    
    try {
        const response = await axios.get(url)
        data = response.data
        return data
    } catch (error) {
        alert(`Error saat Fatching : ${error}`)
    } finally {
        console.log("Fatching Done")
    }
}