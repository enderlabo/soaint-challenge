import React from 'react'
import { Cart } from '../components/Home/Cart/Cart';
import { ProductDetail } from '../components/ProductDetail/ProductDetail';


export const ProductDetails = (products) => {

    return (
        <section className="ProductDetail">
            <Cart />
            <ProductDetail />
        </section>
    )
}
