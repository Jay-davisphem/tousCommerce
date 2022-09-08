import { Routes, Route } from "react-router-dom";
import {useState, useEffect} from 'react';
import HomePage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shop/ShopPage";
import Header from "./components/header/Header";
import AuthPage from "./pages/auth/AuthPage";
import {auth} from './firebase/firebase.utils';
import {createUserProfileDocument} from './firebase/userProfile'
import "./App.css";

function App() {
  const [state, setState] = useState({currentUser: null})
  
  let unsubscribeAuth = null;
  useEffect(() => {
    unsubscribeAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth){
        const docRef = await createUserProfileDocument(userAuth);

        docRef?.onSnapshot(snapShot => {
          setState(state => ({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }))
        })
        console.log(state)
      }
      else{
      setState(state => ({currentUser: userAuth}));
      }
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
