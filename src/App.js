// import './App.css';
import { Route, Routes } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Home from './components/Home/Home';
import Menu from "./components/Menu/Menu";
import MenuDetails from "./components/MenuDetails/MenuDetails";

function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/menu' element={<Menu></Menu>}></Route>
        <Route path='/food-details/:id' element={<MenuDetails></MenuDetails>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
      </Routes>
    </div>
  );
}

export default App;
