import { useLocation } from "react-router-dom"

function Breadcrumbs() {
    const location = useLocation();
    let page: String[] = location.pathname.split("/");
    page = page.filter((bread) => bread != "")
    

    return (
        <div className="text-sm breadcrumbs">
            <ul>
                {page.map((bread, i) => {
                    return(
                        
                        <li key={i}>
                            {bread}
                        </li>
                        
                    )
                })}
            </ul>
        </div>
    )
}

export default Breadcrumbs
