import { useContext } from 'react';
import Button from '../button/button.component';
import './cart-dropdown.styles.scss'
import { DropdownContext } from '../../contexts/dropdown.context';
import CartItem from '../cart-item/cart-item.component';
import { useNavigate } from 'react-router-dom';


const CartDropdown = () => {

    const { cartItems, setCurrentStat } = useContext(DropdownContext)
    const navigate = useNavigate();

    const checkOutHandler = () => {
        navigate('./checkout');
        setCurrentStat(false);
    }
    return (
        <div className='cart-dropdown-container' >
            <div className='cart-items'>
                {cartItems.map(item => {
                    console.log("ITEM->", item);
                    return (<CartItem key={item.id} item={item} />)
                })}
                <Button buttonType="inverted" onClick={checkOutHandler}>CHECKOUT</Button>
            </div>
        </div>
    )
}

export default CartDropdown;