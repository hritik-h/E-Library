import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Header() {

    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className='header'>
            <Link to='/'>
                <img className="header__logo" src="https://www.virtusa.com/content/dam/virtusa/images/logo/shared/virtusa-logo.png" />
            </Link>

            <div className="header__search">
                <input className="header__searchInput" type="text" placeholder="Welcome! Can search here" />
                {/* Search Icon */}
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">
                <Link to='/login'>
                    <div className="header__option">
                        <span className="header__optionLineOne">Hello Guest</span>
                        <span className="header__optionLineTwo">Sign In</span>
                    </div>
                </Link>

                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>

                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>

                <Link to='/checkout'>
                    <div className="header_optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header