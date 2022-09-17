import { Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomePage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shop/ShopPage";
import Header from "./components/header/Header";
import AuthPage from "./pages/auth/AuthPage";
import { auth } from "./firebase/firebase.utils";
import { createUserProfileDocument } from "./firebase/userProfile";
import { userActions } from "./redux";
import "./App.css";

function App() {
  const { setCurrentUser } = userActions;

  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);

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
          dispatch(setCurrentUser(currUser));
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
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route
          path="/auth"
          element={currentUser ? <Navigate to="/" replace /> : <AuthPage />}
        />
      </Routes>
    </main>
  );
}

export default App;
