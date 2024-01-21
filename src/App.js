import './App.css';
import Navbar from './components/Navbar/Navbar';
import Signuppage from './components/Signuppage'
import Loginpage from './components/Loginpage';
import Homepage from './components/Homepage';
import Category from './components/Category/Category';
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/smartphones' element={<Category category="smartphones"/>} />
        <Route path='/laptops' element={<Category category="laptops"/>} />
        <Route path='/furniture' element={<Category category="furniture"/>} />
        <Route path='/skincare' element={<Category category="skincare"/>} />
        <Route path='/groceries' element={<Category category="groceries"/>} />
       {/* <Route path='/Cart' element={<Cart />} /> */}
        <Route path='/Signuppage' element={<Signuppage />} />
        <Route path='/Loginpage' element={<Loginpage />} />
      </Routes>

    </>
  );
}

export default App;
