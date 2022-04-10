import { useEffect, useState } from "react";
import { getStoredCart } from "../Utilities/fakedb";

const useCart = ({ products }) => {
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
    return [orders, setOrders];
}

export default useCart;