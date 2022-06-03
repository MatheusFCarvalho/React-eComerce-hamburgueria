import "./App.css";
import { GlobalStyle } from "./style/global";
import Header from "./components/Header";
import Main from "./components/Main";
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const propsProd = {
    products,
    currentSale,
    setCurrentSale,
    filteredProducts,
    setFilteredProducts,
  };

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((resp) => resp.json())
      .then((resp) => {
        setProducts(resp);
        setFilteredProducts(resp);
      });
  }, []);

  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Header props={propsProd} />
        <Main props={propsProd} />
      </div>
    </>
  );
}

export default App;
