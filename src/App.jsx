import { Routes, Route } from "react-router-dom";
import {useState, useEffect} from 'react';
import HomePage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shop/ShopPage";
import Header from "./components/header/Header";
import AuthPage from "./pages/auth/AuthPage";
import {auth} from './firebase/firebase.utils';

import "./App.css";

function App() {
  const [state, setState] = useState({currentUser: null})
  
  let unsubscribeAuth = null;
  useEffect(() => {
    unsubscribeAuth = auth.onAuthStateChanged(user => {
      setState(state => ({...state, currentUser: user?.multiFactor.user}))
      console.log(`${user?.multiFactor.user.displayName} | ${user?.multiFactor.user.email}`)
    })
    return () => {
      unsubscribeAuth()
    }
  }, [])

  return (
    <main>
      <Header currentUser={state.currentUser}/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </main>
  );
}

export default App;
