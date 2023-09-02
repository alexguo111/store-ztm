import { useContext } from 'react';
import { ProductContext } from '../../contexts/product.context';
import ProductCard from '../../components/product-card/product-card.component';
import './shop.styles.scss'

const Shop = () => {
    console.log("Shopppppppppp!!!!!!!");
    const { products } = useContext(ProductContext)
    console.log("Products->", products);
    return (
        <div className='products-container'>
            {
                products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))
            }
        </div>
    )
}

export default Shop;