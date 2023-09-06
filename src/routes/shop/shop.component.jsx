import CategoryPreview from '../category-preview/category-preview.component';
import { Routes, Route } from 'react-router-dom';
import Category from '../category/category.component';

const Shop = () => {
    return (
        <Routes>
            <Route index element={<CategoryPreview />} />
            <Route path=':category' element={<Category />} />
        </Routes>
    )
}

export default Shop;