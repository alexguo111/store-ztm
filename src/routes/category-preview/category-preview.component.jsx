import './category-preview.styles.scss'
import { Fragment, useContext } from 'react';
import ProductCard from "../../components/product-card/product-card.component";
import { CategoriesContext } from '../../contexts/categories.context';
import { Link } from 'react-router-dom';

const CategoryPreview = () => {
    const { categoriesMap } = useContext(CategoriesContext)
    return (
        <Fragment>
            {
                Object.keys(categoriesMap).map(title => (
                    <div className='category-preview-container' key={title}>
                        <h2><Link className="title" to={title}>{title.toUpperCase()}</Link></h2>
                        <div className='preview'>
                            {categoriesMap[title]
                                .filter((item, idx) => idx < 4)
                                .map(product => (
                                    <ProductCard key={product.id} product={product} />))
                            }
                        </div>
                    </div>
                ))
            }
        </Fragment>
    )
}

export default CategoryPreview