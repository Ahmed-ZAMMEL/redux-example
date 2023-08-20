import Layout from "./components/Layout/Layout";
import Cart from "./components/Cart/Cart";
import Products from "./components/Shop/Products";
import { useDispatch, useSelector } from "react-redux";
import { Fragment, useEffect } from "react";
import Notification from "./components/UI/Notification/notification";
import { sendCartData, fetchCartData } from "./store/cart-actions";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    // For the first application rendering we do nothing, we don't send a request.
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (cart.charged) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

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
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
