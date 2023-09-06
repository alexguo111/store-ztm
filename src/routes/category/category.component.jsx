import { useContext } from "react";
import { useParams } from "react-router-dom"
import { CategoriesContext } from "../../contexts/categories.context";
import ProductCard from "../../components/product-card/product-card.component";
import { CategoryContainer, CategoryTitle } from "./category.styles";

const Category = () => {
    const { categoriesMap } = useContext(CategoriesContext);
    let { category } = useParams();
    return (
        <div>
            <CategoryTitle as="h2">{category.toUpperCase()}</CategoryTitle>
            <CategoryContainer>
                {categoriesMap[category] && categoriesMap[category].map(product => <ProductCard key={product.id} product={product} />)}
            </CategoryContainer>
        </div>
    )
}

export default Category