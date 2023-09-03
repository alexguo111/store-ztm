import { useContext } from "react";
import { DropdownContext } from "../../contexts/dropdown.context";
import './checkout-item.styles.scss'

const CheckoutItem = ({ item }) => {

    const { name, imageUrl, price, cnt } = item;
    const { removeFromCart, addToCart, deleteFromCart } = useContext(DropdownContext);
    const addItem = () => addToCart(item);
    const reduceItem = () => removeFromCart(item);
    const deleteItem = () => deleteFromCart(item);

    return (
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={reduceItem}>&#10094;</div>
                <span className="value">{cnt}</span>
                <div className="arrow" onClick={addItem}>&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={deleteItem}>&#10005;</div>
        </div>
    )
}


export default CheckoutItem