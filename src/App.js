import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Product from './Components/Product/Product';
import Shop from './Components/Shop/Shop';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/product' element={<Product></Product>}></Route>
      </Routes>
    </div>
  );
}

export default App;
