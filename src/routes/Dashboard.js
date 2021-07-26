import { Home } from "../pages/Home";
import { Header } from "../layout/Header";
// import { Footer } from "../layout/Footer";
import { ProductDetails } from "../pages/ProductDetails";
import { Switch, Route } from "react-router-dom";

export const Dashboard = () => {
  return (
    <>
      <Header />
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/:productsId" component={ProductDetails} />
        </Switch>
      </div>
      {/* <Footer />  */}
    </>
  );
};
