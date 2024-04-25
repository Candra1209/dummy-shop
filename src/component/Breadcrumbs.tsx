import { Link, useLocation } from "react-router-dom"

function Breadcrumbs() {
    const location = useLocation();
    let page: String[] = location.pathname.split("/");

    let path: string = "";
    page = page.filter((bread) => bread != "")
    


    return (
        <div className="font-quicksand text-lg breadcrumbs">
            <ul>
                {page.map((bread, i) => {
                    
                    path = path + "/" + bread
                    
                    return( 
                        
                        <li key={i}>
                            <Link to={path} className="hover:text-ketiga">
                                {bread}
                            </Link>
                        </li>
                        
                        
                    )
                })}
            </ul>
        </div>
    )
}

export default Breadcrumbs
