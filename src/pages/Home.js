import React from 'react'
import { Cart } from '../components/Home/Cart/Cart'
import { CardProduct } from '../components/Home/CardProduct'


export const Home = () => {
    return (
        <section className="products__wrapper">
            <Cart />
            <CardProduct />
        </section>
    )
}