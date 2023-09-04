import { createContext, useContext, useEffect, useState } from "react";
import { addCollectionAndDocuments, getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
});

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({});
    const val = { categoriesMap };

    // useEffect(() => { addCollectionAndDocuments('categories', SHOP_DATA) }, [])
    useEffect(() => {
        const getData = async () => {
            const data = await getCategoriesAndDocuments()
            setCategoriesMap(data);
        }
        getData();
    }, [])
    return <CategoriesContext.Provider value={val}>{children}</CategoriesContext.Provider>
}