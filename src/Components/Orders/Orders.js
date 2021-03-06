import React from 'react';
import './Orders.css';
import useCart from '../../Hooks/useCart';
import useProducts from '../../Hooks/useProducts';
import OrderReview from '../OrderReview/OrderReview';
import OrderSummary from '../OrderSummary/OrderSummary';
import { removeFromDb } from '../../Utilities/fakedb';
import { Link } from 'react-router-dom';

const Orders = () => {
    const [products] = useProducts();
    const [orders, setOrders] = useCart(products);

    const handleRemoveProduct = product => {
        const rest = orders.filter(pd => pd._id !== product._id)
        setOrders(rest);
        removeFromDb(product._id)
    }

    return (
        <section className="orders-container">
            <div className="orders-list">
                {
                    orders.map(product => <OrderReview
                        key={product._id}
                        product={product}
                        handleRemoveProduct={handleRemoveProduct}
                    ></OrderReview>)
                }
            </div>
            <div className="order-info">
                <OrderSummary orders={orders}>
                    <Link to={'/shipping'}>Proceed Shipping</Link>
                </OrderSummary>
            </div>
        </section>
    );
};

export default Orders;