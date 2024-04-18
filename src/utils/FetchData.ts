import axios from "axios";

export async function FetchData(url : string){
    
    var data;
    
    await axios.get(url)
    .then((res) => {
        data = res.data
    })
    .catch((error) => {
        return error
    })
    .finally(() => {
        console.log("Method done!!")
    })

    return data
}