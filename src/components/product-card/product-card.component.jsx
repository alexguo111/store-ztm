// import './product-card.styles.scss'
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { useContext } from 'react';
import { DropdownContext } from '../../contexts/dropdown.context';
import { ProductCardContainer, ProductCardFooter } from './product-card.styles';


const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;
    const { addToCart } = useContext(DropdownContext)

    const addHandler = () => {
        addToCart(product);
    }

    return (
        <ProductCardContainer>
            <img src={imageUrl} alt={`${name}`} />
            <ProductCardFooter >
                <span className="name">{name}</span>
                <span className="cost">{price}</span>
            </ProductCardFooter>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addHandler}>Add to card</Button>
        </ProductCardContainer>
    )
}

export default ProductCard;