import { Fragment, useContext } from "react";
import { useParams } from "react-router-dom"
import { CategoriesContext } from "../../contexts/categories.context";
import ProductCard from "../../components/product-card/product-card.component";
import './category.styles.scss'

const Category = () => {
    const { categoriesMap } = useContext(CategoriesContext);
    let { category } = useParams();
    return (
        <div>
            <h2 className="category-title">{category.toUpperCase()}</h2>
            <div className='category-full-list-container'>
                {categoriesMap[category] && categoriesMap[category].map(product => <ProductCard key={product.id} product={product} />)}
            </div>
        </div>
    )
}

export default Category