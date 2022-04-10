import React from 'react';
import './Shop.css';
import useProducts from '../../Hooks/useProducts';
import Product from '../Product/Product';

const Shop = () => {
    const [products] = useProducts();
    console.log(products);
    return (
        <section className='shop-container'>
            <article className="products-list">
                {
                    products?.map(product => <Product
                        key={product.id}
                        product={product}
                    ></Product>)
                }
            </article>
            <article className="order-info">
                <h1>Order Info</h1>
            </article>
        </section>
    );
};

export default Shop;