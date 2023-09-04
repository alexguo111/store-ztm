import { Fragment, useContext } from 'react';
import ProductCard from '../../components/product-card/product-card.component';
import { CategoriesContext } from '../../contexts/categories.context';
import { Link } from 'react-router-dom';
import './shop.styles.scss'



const Shop = () => {
    const { categoriesMap } = useContext(CategoriesContext)
    return (
        <Fragment>
            {
                Object.keys(categoriesMap).map(title => (
                    <Fragment key={title}>
                        <h2><Link className="nav-link" to={`/shop/${title}`}>{title.toUpperCase()}</Link></h2>
                        <div className='products-container'>
                            {categoriesMap[title]
                                .filter((item, idx) => idx < 4)
                                .map(product => (
                                    <ProductCard key={product.id} product={product} />))
                            }
                        </div>
                    </Fragment>
                ))
            }
        </Fragment>
    )
}

export default Shop;