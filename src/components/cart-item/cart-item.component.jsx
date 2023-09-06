// import './cart-item.styles.scss'
import { CartItemContainer, ItemDetails } from './cart-item.styles';

const CartItem = ({ item }) => {
    const { name, imageUrl, cnt, price } = item;
    return (
        <CartItemContainer>
            <img src={imageUrl} alt={`${name}`} />
            <ItemDetails>
                <span className='name'>{name}</span>
                <span className='price'>{cnt} x ${price}</span>
            </ItemDetails>
        </CartItemContainer>
    )
}

export default CartItem;