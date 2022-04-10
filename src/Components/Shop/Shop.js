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

    const AddToCart = (selectedProduct) => {
        let newOrder = [];
        const exist = orders.find(product => product.id === selectedProduct.id)
        if (!exist) {
            selectedProduct.quantity = 1;
            newOrder = [...orders, selectedProduct]
        }
        else {
            const rest = orders.filter(product => product.id !== selectedProduct.id)
            exist.quantity = exist.quantity + 1;
            newOrder = [...rest, exist];
        }

        setOrders(newOrder);
        addToDb(selectedProduct.id)
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