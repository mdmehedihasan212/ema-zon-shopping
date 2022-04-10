import React, { useEffect, useState } from 'react';
import './Shop.css';
import useProducts from '../../Hooks/useProducts';
import Product from '../Product/Product';
import OrderSummary from '../OrderSummary/OrderSummary';
import { addToDb, getStoredCart } from '../../Utilities/fakedb';


const Shop = () => {
    const [products] = useProducts();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];
        for (const id in storedCart) {
            const addedProduct = products?.find(product => product.id === id)
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setOrders(savedCart);

    }, [products])

    const AddToCart = (product) => {
        const newOrder = [...orders, product];
        setOrders(newOrder);
        addToDb(product.id)
    }

    return (
        <section className='shop-container'>
            <article className="products-list">
                {
                    products?.map(product => <Product
                        key={product.id}
                        product={product}
                        AddToCart={AddToCart}
                    ></Product>)
                }
            </article>
            <article className="order-info">
                <OrderSummary
                    orders={orders}
                ></OrderSummary>
            </article>
        </section>
    );
};

export default Shop;