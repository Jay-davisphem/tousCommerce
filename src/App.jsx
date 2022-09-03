import {Routes, Route} from 'react-router-dom'
import HomePage from "./pages/homepage/HomePage";

const HatsPage = (props)=>{
  console.log(props)
  return <div><h1>HATS PAGE</h1></div>
}

function App() {
  return (
    <main>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shop/hats' element={<HatsPage />} />
      </Routes>
    </main>
  );
}

export default App;
