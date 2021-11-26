import React from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import "./Header.css"
import { useStateValue } from '../Pages/ContextApi/StateProvider';
import { auth } from '../Firebase/firebase';
function Header() {
    const [{basket ,user}] =useStateValue() ;
     console.log(basket) ;

     const login =() =>
     {
         if(user) {
             auth.signOut() ;
         }
     }
    return (
        <nav className="header">
            {/* logo on the left */}

            <Link to="/">
                <img className="header__logo"
                    src="https://pngimg.com/uploads/amazon/amazon_PNG27.png"
                    alt="not found" />
            </Link>
            {/* search box  */}
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />


            </div>


            {/* 3 link on the right */}

            <div className="header__nav" >
                {/* 1st link  */}
                <Link to={!user && "/login"} className="header__link">
                    <div onClick={login} className="header__option">
                        <span className="header__optionLineOne" >Hello {user?.email}</span>
                        <span className="header__optionLineTwo">{user ? 'Sing Out' : 'Sign In' }</span>
                    </div>
                </Link>
                {/* 2nd link  */}
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo" > & order </span>
                    </div>
                </Link>
                {/* 3st link  */}
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne" >Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link >
                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        {/* shoping basket icon */}
                        <ShoppingBasketIcon />


                        {/* number of icon in the basket */}
                        <span className="header__optionLineTwo header__basketCount" >
                         {basket?.length}</span>
                    </div>
                </Link>


            </div>
            {/* nasket icon with number */}

        </nav>
    )
}

export default Header
