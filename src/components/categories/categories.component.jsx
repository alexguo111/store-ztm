import "./categories.styles.scss"
import CategoryItem from "../category-item/category-item.component"
import CategoriesContainer from "./categories.styles"


const Categories = ({ categories }) => {
    return (
        <CategoriesContainer>
            {categories.map(category =>
                <CategoryItem key={category.id} category={category} />
            )}
        </CategoriesContainer>
    )
}

export default Categories;