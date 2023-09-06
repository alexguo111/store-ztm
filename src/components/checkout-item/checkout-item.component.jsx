import { useContext } from "react";
import { DropdownContext } from "../../contexts/dropdown.context";
import './checkout-item.styles.scss'

import { CheckoutItemContainer, ImageContainer, RemoveButton, BaseSpan, QuantitySpan } from "./checkout-item.styles";


const CheckoutItem = ({ item }) => {

    const { name, imageUrl, price, cnt } = item;
    const { removeFromCart, addToCart, deleteFromCart } = useContext(DropdownContext);
    const addItem = () => addToCart(item);
    const reduceItem = () => removeFromCart(item);
    const deleteItem = () => deleteFromCart(item);

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={`${name}`} />
            </ImageContainer>
            <BaseSpan>{name}</BaseSpan>
            <QuantitySpan>
                <div className="arrow" onClick={reduceItem}>&#10094;</div>
                <span className="value">{cnt}</span>
                <div className="arrow" onClick={addItem}>&#10095;</div>
            </QuantitySpan>
            <BaseSpan>{price}</BaseSpan>
            <RemoveButton onClick={deleteItem}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    )
}


export default CheckoutItem