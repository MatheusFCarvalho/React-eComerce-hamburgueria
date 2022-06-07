import { InputSearch, ThemeButton } from "../../style/global";
import "./style.css";

function Header({ props }) {
  const { products, setFilterValue, filteredProducts, setFilteredProducts } =
    props;

  function resetFiltro(event) {
    if (!event.target.className.includes("searchButton")) {
      limparBarra();
      setFilterValue("");
      setFilteredProducts(products);
    }
  }

  function limparBarra() {
    document.querySelector(".searchInput").value = "";
  }

  function filtrarProdutos(event) {
    setFilterValue(event.target.value);
    setFilteredProducts(
      products.filter((prod) => {
        return (
          prod.name.toLowerCase().includes(event.target.value.toLowerCase()) ||
          prod.category.toLowerCase().includes(event.target.value.toLowerCase())
        );
      })
    );
  }

  return (
    <header>
      <img src={require("../../img/logo.png")} alt="logo" />
      <InputSearch onClick={resetFiltro}>
        <input
          className="searchInput"
          placeholder="Digitar Pesquisa"
          onInput={filtrarProdutos}
        />
        <ThemeButton
          className="searchButton"
          buttonSize="medium"
          onClick={limparBarra}
        >
          Pesquisar
        </ThemeButton>
      </InputSearch>
    </header>
  );
}
export default Header;
