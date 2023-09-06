// import './category-preview.styles.scss'
import { Fragment, useContext } from 'react';
import ProductCard from "../../components/product-card/product-card.component";
import { CategoriesContext } from '../../contexts/categories.context';
import { CategoryPreviewContainer, Preview, Title } from './category-preview.styles';

const CategoryPreview = () => {
    const { categoriesMap } = useContext(CategoriesContext)
    return (
        <Fragment>
            {
                Object.keys(categoriesMap).map(title => (
                    <CategoryPreviewContainer key={title}>
                        <h2><Title to={title}>{title.toUpperCase()}</Title></h2>
                        <Preview>
                            {categoriesMap[title]
                                .filter((item, idx) => idx < 4)
                                .map(product => (
                                    <ProductCard key={product.id} product={product} />))
                            }
                        </Preview>
                    </CategoryPreviewContainer>
                ))
            }
        </Fragment>
    )
}

export default CategoryPreview