import React from "react"
import ProductTable from "../components/ProductTable"
import products from "../api/products"


const Customer = () => {
    return (
        <div>
            <div>Customer Page!</div>
            <ProductTable products={products} showTotalValue={false} showStockValue = {false} />
        </div>
    )
}

// this is the better way to do it
export default Customer