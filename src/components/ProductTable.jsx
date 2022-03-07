import React from "react"
import { valueOfProduct } from "../api/values"

const ProductTable = ({ products = [], showTotalValue = false, showStockValue = false }) => {
    const stockValue = value => {
        if (showStockValue)  {
            return value
        }

        return  value  > 0 ? 'Available' : 'Out of Stock'
    }
    
    const tableRows = products.map(products => {

        return (
            <tr key={products.name}>
                <td>
                    {products.name}
                </td>
                <td>
                    {products.price}
                </td>
                <td>
                    {stockValue(products.inStock)}
                </td>
                {
                    showTotalValue &&
                    (
                    <td>
                        {valueOfProduct(products.price, products.inStock)}
                    </td>
                    ) 
                }
            </tr>
        )

    })

    return (
        <table border = {1}>
            <tbody>
                <tr>
                    <td>Product Name</td>
                    <td>Price</td>
                    <td>In Stock</td>
                    {showTotalValue && <td>Value in Store</td>}
                </tr>
                {tableRows}
            </tbody>
        </table>
    )
}

export default ProductTable