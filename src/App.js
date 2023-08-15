import Layout from "./components/Layout/Layout";
import Cart from "./components/Cart/Cart";
import Products from "./components/Shop/Products";
import { useSelector } from "react-redux";

function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  //  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  /************************************* 
  return (
    <Fragment>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      <Counter />
    </Fragment>
  );
****************************************/

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
