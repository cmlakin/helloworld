import React from "react"
import ProductTable from "../components/ProductTable"
import products from "../api/products"
import { valueOfStore } from "../api/values"


const StoreManager = () => {
    return (
        <div>
            <div>StoreManager Page!</div>
            <div>Total Value of Store: {valueOfStore(products)}</div>
            <ProductTable products={products} showTotalValue={true} showStockValue = {true}/>
        </div>
    )
}

// this is the better way to do it
export default StoreManager