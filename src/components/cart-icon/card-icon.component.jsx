import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import './card-icon.styles.scss'
import { useContext } from 'react';
import { DropdownContext } from '../../contexts/dropdown.context';

const CartIcon = () => {
    const { currentStat, setCurrentStat } = useContext(DropdownContext);
    const toggleStat = () => {
        setCurrentStat(!currentStat);
    }

    return (
        <div className='cart-icon-container' onClick={toggleStat}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>0</span>
        </div>
    )
}

export default CartIcon;