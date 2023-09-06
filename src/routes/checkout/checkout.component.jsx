import { useContext, useEffect, useState } from "react";
import { DropdownContext } from "../../contexts/dropdown.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
// import './checkout.styles.scss'
import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from "./checkout.styles";

const Checkout = () => {
    const { cartItems } = useContext(DropdownContext);
    const [total, setTotal] = useState(0);

    // update the total price
    useEffect(() => {
        const total = cartItems.reduce((accumulator, item) => accumulator + item.price * item.cnt, 0)
        setTotal(total);
    }, [cartItems])

    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
            </CheckoutHeader>
            {cartItems.map(item => {
                console.log("ITEM->", item);
                return (<CheckoutItem key={item.id} item={item} />)
            })}
            <Total>Total: ${total}</Total>
        </CheckoutContainer>
    )
}

export default Checkout;