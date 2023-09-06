// import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import './card-icon.styles.scss'
import { useContext, useEffect, useState } from 'react';
import { DropdownContext } from '../../contexts/dropdown.context';
import { CartIconContainer, ShoppingIcon, ItemCount } from './card-icon.styles';

const CartIcon = () => {
    const [total, setTotal] = useState(0);
    const { currentStat, setCurrentStat, cartItems } = useContext(DropdownContext);
    const toggleStat = () => {
        setCurrentStat(!currentStat);
    }
    // useEffect() save use from unnecessary recalculating the total
    useEffect(() => {
        let total = cartItems.reduce((accumulator, item) => accumulator + item.cnt, 0);
        setTotal(total);
    }, [cartItems])

    return (
        <CartIconContainer onClick={toggleStat}>
            <ShoppingIcon />
            <ItemCount>{total}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;