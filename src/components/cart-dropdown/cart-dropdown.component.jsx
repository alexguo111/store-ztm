import { useContext } from 'react';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import './cart-dropdown.styles.scss'
import { DropdownContext } from '../../contexts/dropdown.context';
import CartItem from '../cart-item/cart-item.component';
import { useNavigate } from 'react-router-dom';
import { CartDropdownContainer, CartItems, EmptyMessage } from './cart-dropdown.styles';


const CartDropdown = () => {
    const { cartItems, setCurrentStat } = useContext(DropdownContext)
    const navigate = useNavigate();

    const checkOutHandler = () => {
        navigate('./checkout');
        setCurrentStat(false);
    }
    return (
        <CartDropdownContainer >
            <CartItems>
                {cartItems.length ?
                    cartItems.map(item => (<CartItem key={item.id} item={item} />)) :
                    <EmptyMessage>your cart is empty</EmptyMessage>}
                <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={checkOutHandler} >CHECKOUT</Button>
            </CartItems>
        </CartDropdownContainer>
    )
}

export default CartDropdown;