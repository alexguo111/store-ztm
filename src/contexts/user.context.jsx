import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth, signOutUser } from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => { },
});


export const UserProvider = ({ children }) => {

    console.log("Context");
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };

    useEffect(() => {
        // signOutUser();
        console.log("Context useEffect")
        const unsubscribe = onAuthStateChangedListener((user) => {
            console.log("222222--->", user);

            if (user) {
                console.log("222222--->creating user")
                createUserDocumentFromAuth(user)
            }
            setCurrentUser(user)
        });
        return unsubscribe;
    }, []);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}