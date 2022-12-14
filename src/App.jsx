import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Error404 from "./components/error/error-404/Error404";
import Header from "./components/header/Header";
import HomePage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shop/ShopPage";
import AuthPage from "./pages/auth/AuthPage";
import CheckoutPage from "./pages/checkout/Checkout";
import CollectionPage from "./pages/collection/Collection";
import { auth, addCollectionAndDocs } from "./firebase/firebase.utils";
import { createUserProfileDocument } from "./firebase/userProfile";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { selectCollectionsArray } from "./redux/shop/shop.selectors";
import { userActions } from "./redux";
import "./App.css";

function App() {
  const { setCurrentUser } = userActions;

  const dispatch = useDispatch();
  const currentUser = useSelector((state) => selectCurrentUser(state));
  const collectionsArray = useSelector((state) =>
    selectCollectionsArray(state)
  );

  let unsubscribeAuth = null;
  useEffect(() => {
    unsubscribeAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef?.onSnapshot((snapShot) => {
          const currUser = {
            id: snapShot.id,
            ...snapShot.data(),
          };
          console.log(currUser);
          dispatch(setCurrentUser(currUser));
          //addCollectionAndDocs('collections', collectionsArray.map(({title, items}) => ({title, items})))
          /*setState((state) => {
            return {
              currUser,
            };
          }); */
        });
      } else {
        dispatch(setCurrentUser(userAuth));
        //setState((state) => ({ currentUser: userAuth }));
      }
    });
    return () => {
      unsubscribeAuth();
    };
  }, []);

  return (
    <main className="main">
      <Header />
      <div style={{
        backgroundColor: 'var(--main-color)',
        }}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/shop/:collectionId" element={<CollectionPage />} />
        <Route path="/checkout" element={currentUser? <CheckoutPage />: <AuthPage />} />
        <Route
          path="/auth"
          element={currentUser ? <Navigate to="/" replace /> : <AuthPage />}
        />
        <Route path="*" element={<Error404 />} />
      </Routes>
      </div>
    </main>
  );
}

export default App;
