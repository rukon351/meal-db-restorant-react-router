// import './App.css';
import { Route, Routes } from "react-router-dom";
import AboutUs from "./components/Aboutus/AboutUs";
import Contact from "./components/Contact/Contact";
import Katolsha from "./components/Contact/Katolsha";
import Muktagacha from "./components/Contact/Muktagacha";
import Mymensingh from "./components/Contact/Mymensingh";
import Online from "./components/Contact/Online";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from './components/Home/Home';
import Menu from "./components/Menu/Menu";
import MenuDetails from "./components/MenuDetails/MenuDetails";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/menu' element={<Menu></Menu>}></Route>
        <Route path='/food-details/:id' element={<MenuDetails></MenuDetails>}></Route>
        <Route path='/contact' element={<Contact></Contact>}>
          <Route path='mym-address' element={<Mymensingh></Mymensingh>}></Route>
          <Route path='muk-address' element={<Muktagacha></Muktagacha>}></Route>
          <Route path='kat-address' element={<Katolsha></Katolsha>}></Route>
          <Route path='onl-address' element={<Online></Online>}></Route>
        </Route>
        <Route path='/about' element={<AboutUs></AboutUs>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
