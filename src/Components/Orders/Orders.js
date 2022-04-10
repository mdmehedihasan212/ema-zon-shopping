import React from 'react';
import './Orders.css';
import useCart from '../../Hooks/useCart';
import useProducts from '../../Hooks/useProducts';
import OrderReview from '../OrderReview/OrderReview';
import OrderSummary from '../OrderSummary/OrderSummary';

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [orders, setOrders] = useCart(products);
    return (
        <section className="orders-container">
            <div className="orders-list">
                {
                    orders.map(product => <OrderReview
                        key={product.id}
                        product={product}
                    ></OrderReview>)
                }
            </div>
            <div className="order-info">
                <OrderSummary orders={orders}></OrderSummary>
            </div>
        </section>
    );
};

export default Orders;