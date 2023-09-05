import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as CrownLogo } from '../../assets/crown.svg'
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/card-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { DropdownContext } from "../../contexts/dropdown.context";
import { NavigationContainer, LogoContainer, NavLinks, NavLink } from "./navigation.styles";
// import './navigation.styles.scss'

const Navigation = () => {
    console.log("NAVIGATION");
    const { currentUser } = useContext(UserContext);
    const { currentStat } = useContext(DropdownContext);

    const signOutHandler = async () => {
        await signOutUser();
    }

    return (
        <Fragment>
            {/* <div className="navigation">
                <Link className="logo-container" to="/">
                    <CrownLogo className="logo" />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop">SHOP</Link>
                    {
                        currentUser ?
                            (<span className="nav-link" onClick={signOutHandler}>Sign Out</span>) :
                            (<Link className="nav-link" to="/auth">Sign in</Link>)
                    }
                    <CartIcon />
                </div>
                {currentStat && <CartDropdown />}
            </div> */}
            <NavigationContainer>
                <LogoContainer to="/">
                    <CrownLogo className="logo" />
                </LogoContainer>
                <NavLinks>
                    <Link to="/shop">SHOP</Link>
                    {
                        currentUser ?
                            (<NavLink as='span' onClick={signOutHandler}>Sign Out</NavLink>) :
                            (<NavLink to="/auth">Sign in</NavLink>)
                    }
                    <CartIcon />
                </NavLinks>
                {currentStat && <CartDropdown />}
            </NavigationContainer>
            <Outlet />
        </Fragment >
    )
}

export default Navigation;