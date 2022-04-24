import React, { useEffect, useState } from 'react';
import './Shop.css';
import useProducts from '../../Hooks/useProducts';
import Product from '../Product/Product';
import OrderSummary from '../OrderSummary/OrderSummary';
import { addToDb } from '../../Utilities/fakedb';
import useCart from '../../Hooks/useCart';
import { Link } from 'react-router-dom';


const Shop = () => {
    const [products] = useProducts();
    const [orders, setOrders] = useCart(products);
    const [pageCount, setPageCount] = useState(0);


    useEffect(() => {
        fetch('http://localhost:5000/productCount')
            .then(res => res.json())
            .then(data => {
                const count = data.count;
                const page = Math.ceil(count / 10)
                setPageCount(page)
            })
    }, [])

    const AddToCart = (selectedProduct) => {
        let newOrder = [];
        const exist = orders.find(product => product._id === selectedProduct._id)
        if (!exist) {
            selectedProduct.quantity = 1;
            newOrder = [...orders, selectedProduct]
        }
        else {
            const rest = orders.filter(product => product._id !== selectedProduct._id)
            exist.quantity = exist.quantity + 1;
            newOrder = [...rest, exist];
        }

        setOrders(newOrder);
        addToDb(selectedProduct._id)
    }

    return (
        <section className='shop-container'>
            <article className="products-list">
                {
                    products?.map(product => <Product
                        key={product._id}
                        product={product}
                        AddToCart={AddToCart}
                    ></Product>)
                }
                <div>
                    {
                        [...Array(pageCount).keys()]
                            .map(number => <button>
                                {number + 1}
                            </button>)
                    }
                </div>
            </article>
            <article className="order-info">
                <OrderSummary
                    orders={orders}>
                    <Link to={'/orders'}>Review Orders</Link>
                </OrderSummary>
            </article>
        </section>
    );
};

export default Shop;