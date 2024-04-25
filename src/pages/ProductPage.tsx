import Breadcrumbs from "../component/Breadcrumbs"
import ListPorduct from "../component/ListPorduct"
import { BackButton } from "../component/BackButton"

function ProductPage() {
    return (
    <>
    <div className="px-5 py-1 flex items-center gap-5">
        <BackButton/>
        <Breadcrumbs/>
    </div>
    
    <div>
        <ListPorduct/>
    </div>
    </>
    )
}

export default ProductPage
