// import './category-item.styles.scss'
import {
    CategoryContainer,
    CategoryBackgroundImage,
    CategoryBodyContainer,
} from './category-item.styles';

const CategoryItem = ({ category }) => {
    const { imageUrl, title } = category;
    return (
        // <div className="category-container">
        //     <div className="background-image" style={{
        //         backgroundImage: `url(${imageUrl})`
        //     }}>
        //     </div>
        //     <div className="category-body-container">
        //         <h2>{title}</h2>
        //         <p>Shop now</p>
        //     </div>
        // </div>
        <CategoryContainer>
            {/* <CategoryBackgroundImage style={{
                backgroundImage: `url(${imageUrl})`
            }} cus={"hello"} /> */}
            <CategoryBackgroundImage bgimg={imageUrl} />
            <CategoryBodyContainer>
                <h2>{title}</h2>
                <p>Shop now</p>
            </CategoryBodyContainer>
        </CategoryContainer>
    )
}

export default CategoryItem