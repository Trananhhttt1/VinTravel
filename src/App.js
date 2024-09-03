import "./App.scss";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Offers from "./components/Offers/Offers";
import Popular from "./components/Popular/Popular";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
      <Popular></Popular>
      <Offers></Offers>
      <About></About>
      <Blog></Blog>
      <Footer></Footer>
    </>
  );
}

export default App;
