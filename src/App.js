import { Route, Routes } from 'react-router-dom';
import './App.css';
import A404 from './componants/Aleart/A404';
import Header from './componants/Header/Header';
import Home from './componants/Home/Home';
import OrderReview from './componants/OrderREview/OrderReview';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/orderReview' element={<OrderReview></OrderReview>}></Route>
        <Route path='*' element={<A404></A404>}></Route>
      </Routes>
    </div>
  );
}

export default App;
