import { useContext, useEffect, useState } from "react";
import { DropdownContext } from "../../contexts/dropdown.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import './checkout.styles.scss'

const Checkout = () => {
    const { cartItems } = useContext(DropdownContext);
    const [total, setTotal] = useState(0);

    // update the total price
    useEffect(() => {
        const total = cartItems.reduce((accumulator, item) => accumulator + item.price * item.cnt, 0)
        setTotal(total);
    }, [cartItems])

    return (
        <div className="checkout-container">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map(item => {
                console.log("ITEM->", item);
                return (<CheckoutItem key={item.id} item={item} />)
            })}
            <span className="total">Total: ${total}</span>
        </div>
    )
}

export default Checkout;