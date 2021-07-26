import { useContext } from 'react'
import { Link } from 'react-router-dom'
import formatCurrency from 'format-currency'
import { Rating } from './Rating';
import CartContext from '../../context/cart/cartContext';

export const CardProduct = () => {

    // const [products, setProducts] = useState(null);
    const {addToCart} = useContext(CartContext)
    //Get data from Context
    const dataState = useContext(CartContext);
    const [products] = dataState.value

    //format currency
    let opts = { format: "%s%v", symbol: "$" };

    return (
      <>
        {
          products && (
            products.map(( product, key ) => (
              <div key={key} className='productCard__wrapper'>
                <div>
                  <Link to={`./${ product.id }`}>
                    <img className='productCard__img' src={product.image} alt='' />
                  </Link>
                  <h6>{product.title.length > 0 ?  product.title.substring(0, 21) + "..." : product.title}</h6>
                  <div className='ProductCard__Rateing'>
                    <Rating
                      value={product.rating}
                      text={`${product.numReviews} reviews`}
                    />
                  </div>
                  <div className='ProductCard__price'>
                    <h5>{formatCurrency(`${product.price}`, opts)}</h5>
                  <button
                    className='ProductCard__button'
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                  </div>
                </div>
              </div>
            ))
          )
        }
      </>
    )
}

