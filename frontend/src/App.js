import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Dogs from "./components/Dogs/Dogs";
import Cart from "./components/Cart/Cart";
import NavBar from "./components/Navbar/NavBar";
import { useEffect, useState } from "react";
import axios from "axios";
import { CartContext } from "./components/Context/CartContext";

function App() {
  const [allDogs, setAllDogs] = useState([]);
  const [myCart, addToCart] = useState([{}]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    async function getData() {
      const res = await axios.get("http://localhost:8080/v1/dogs");
      return res;
    }
    getData().then((res) => setAllDogs(res.data));
    getData().catch(function () {
      console.log("Show error notification!");
    });
  }, []);
  return (
    <CartContext.Provider value={{ myCart, addToCart, total, setTotal }}>
      <Router>
        <NavBar />
        <div className="page-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dogs" element={<Dogs allDogs={allDogs} />} />
            <Route path="/checkout" element={<Cart />} />
          </Routes>
        </div>
      </Router>
    </CartContext.Provider>
  );
}

export default App;
