import React, {useContext} from "react";
import { Link } from "react-router-dom";
import CartContext from "../context/cart/cartContext";

export const Header = () => {
  const { cartItems, showHideCart } = useContext(CartContext)

  return (
    <header>
      <nav>
        <div className="nav__left">Store
            <Link to="/" className="nav__link">Products</Link>
        </div>
        <div className="nav__right">
          <div className="cart__icon">
            <i
              className="fa fa-shopping-cart"
              aria-hidden="true"
              onClick={showHideCart}
            />
            { cartItems.length > 0 && (
            <div className='item__count'>
              <span>{cartItems.length}</span>
            </div>
          )}
          </div>
        </div>
      </nav>
    </header>
  );
};
