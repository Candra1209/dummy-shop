import React, { useState } from "react"
import { Page } from "../model/pagging"

type props = {
    page : {
        limit : number,
        skip : number
    },
    setPage : React.Dispatch<React.SetStateAction<Page>>,
    total: number,
}

    
function PaggingComp({page, setPage , total} : props) {
    
    let numPage: any[] = []
    let [pageSekarang, setPageSekarang] = useState<number>(1);


    function nextPage(pageMove: number, index: number){
        setPage({limit : page.limit, skip: page.skip + pageMove})
        setPageSekarang(pageSekarang + index)
    }

    function goToPage(pageMove:number, index:number){
        setPage({limit : page.limit, skip: pageMove - page.limit})
        setPageSekarang(index)
    }

    for (let index = 1; index <= (total/page.limit); index++) {
        
        numPage.push(
        <button className={"space-x-5 px-4 ring-1 ring-keempat p-2 " + (pageSekarang == index? 'bg-ketiga text-white': '') + "hover:bg-slate-300"} 
        onClick={() => goToPage((index * page.limit), index)}
        >
            {index} 
        </button>
        )
        
    }
    

    return (
        <div className="flex justify-center mb-3">
            <div className="flex gap-4  rounded-xl">
                <div className={"ring-1 ring-keempat p-2 rounded-l-full " + (0 == page.skip? 'invisible': 'visible') + " hover:bg-ketiga hover:text-white hover:ring-0"}>
                    <button disabled={ 0 == page.skip } onClick={() => nextPage(-20,-1)}>Back</button>
                </div>

                <div className="">
                    {
                        numPage
                    }
                </div>

                <div className={`ring-1 ring-keempat p-2 rounded-r-full ${(total-page.limit) == page.skip? 'invisible': 'visible'} hover:bg-ketiga hover:text-white hover:ring-0`}>
                    <button disabled={(total-page.limit) == page.skip} onClick={() => nextPage(20,1)}>Next</button>
                </div>
            </div>
        </div>
    )
}

export default PaggingComp
