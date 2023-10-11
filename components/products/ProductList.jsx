import React from "react"
import {Grid} from '@mui/material'
import ProductCard from "@/components/products/ProductCard"

const ProductList = ({products}) => {
    return (
        <Grid container spacing={4}>
            {
                products.length && products.map(product => (
                    <ProductCard
                        key={product.slug}
                        product={product}
                    />
                ))
            }
        </Grid>
    )
}

export default ProductList