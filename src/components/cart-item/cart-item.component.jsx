import './cart-item.styles.scss'

const CartItem = ({ item }) => {
    const { name, imageUrl, cnt, price } = item;
    return (
        <div className="cart-item-container">
            <img src={imageUrl} alt={`${name}`} />
            <div className='item-details'>
                <span className='name'>{name}</span>
                <span className='price'>{cnt} x ${price}</span>
            </div>
        </div>
    )
}

export default CartItem;