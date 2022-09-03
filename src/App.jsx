import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shop/ShopPage";
import './App.css'
function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </main>
  );
}

export default App;
