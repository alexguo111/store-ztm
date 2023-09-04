import { Fragment, useContext } from "react";
import { useParams } from "react-router-dom"
import { CategoriesContext } from "../../contexts/categories.context";
import ProductCard from "../../components/product-card/product-card.component";

const Category = () => {
    const { categoriesMap } = useContext(CategoriesContext);
    let { category } = useParams();
    return (
        <Fragment>
            <h2>{category.toUpperCase()}</h2>
            <div className='products-container'>
                {categoriesMap[category] && categoriesMap[category].map(product => <ProductCard key={product.id} product={product} />)}
            </div>
        </Fragment>
    )
}

export default Category