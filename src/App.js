import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Projects from "./components/Projects"
import Footer from "./components/Footer"
import { Routes, Route } from "react-router-dom"



function App() {
  return (
    <>
      <Header></Header> 
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/about' element={<About></About>} />
        <Route path='/contact' element={<Contact></Contact>} />
        <Route path='/projects' element={<Projects></Projects>} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
