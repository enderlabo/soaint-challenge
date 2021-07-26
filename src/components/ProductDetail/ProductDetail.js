import { useContext } from "react";
import formatCurrency from "format-currency";
import { useParams } from "react-router-dom";
import CartContext from "../../context/cart/cartContext";
import { Rating } from "../Home/Rating";

export const ProductDetail = () => {
  const { productsId } = useParams();
  const intProductsId = parseInt(productsId);
  //Get data from Context
  const dataState = useContext(CartContext);
  const { addToCart } = useContext(CartContext);
  const [products] = dataState.value;
  //filer the data by id
  const detail = products.filter((product) => product.id === intProductsId);

  //format currency
  let opts = { format: "%s%v", symbol: "$" };

  return (
    <>
      {detail.map((product) => (
        <>
          <div className="container" key={product.id}>
            <div className="row">
              <div className="col-md-6">
                <img className="productCard__img" src={product.image} alt="" />
              </div>

              <div className="col-md-6">
                <div className="">
                  <h1>Product title</h1>

                  <h3>product Description</h3>
                  <p></p>

                  <p>product category</p>

                  <button onClick={() => addToCart(product)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
    </>
  );
};
