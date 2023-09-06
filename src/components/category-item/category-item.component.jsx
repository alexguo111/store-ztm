// import './category-item.styles.scss'
import { useNavigate } from 'react-router-dom';
import {
    CategoryContainer,
    CategoryBackgroundImage,
    CategoryBodyContainer,
} from './category-item.styles';


const CategoryItem = ({ category }) => {
    const { imageUrl, title, route } = category;
    const navigate = useNavigate();

    return (
        <CategoryContainer to={route}>
            {/* <CategoryBackgroundImage style={{
                backgroundImage: `url(${imageUrl})`
            }} cus={"hello"} /> */}
            < CategoryBackgroundImage bgimg={imageUrl} />
            <CategoryBodyContainer>
                <h2>{title}</h2>
                <p>Shop now</p>
            </CategoryBodyContainer>
        </CategoryContainer >
    )
}

export default CategoryItem