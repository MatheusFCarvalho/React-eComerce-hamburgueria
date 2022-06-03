import { InputSearch, ThemeButton } from "../../style/global";
import "./style.css";

function Header({ props }) {
  const { products, filteredProducts, setFilteredProducts } = props;

  function filtrarProdutos(event) {
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
      <InputSearch>
        <input placeholder="Digitar Pesquisa" onInput={filtrarProdutos} />
        <ThemeButton buttonSize="medium">Pesquisar</ThemeButton>
      </InputSearch>
    </header>
  );
}
export default Header;
