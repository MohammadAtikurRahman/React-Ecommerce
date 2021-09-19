import React from 'react'
import { Grid } from '@material-ui/core';
import Product from './Product/Product'; 
const products = [
    {
        id: 1,
        name: 'laptop',
        description: 'lenovo g40 gaming laptop',
        price: '$200',
        image: 'https://images.unsplash.com/photo-1585238342024-78d387f4a707?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
        id: 2,
        name: 'desktop',
        description: 'apple gaming dekstop',
        price: '$300',
        image: 'https://images.unsplash.com/photo-1572448862527-d3c904757de6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80'
    },
];

const Products = () => {
    return (
        <main>
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3} >
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </main>

    )
}
export default Products;