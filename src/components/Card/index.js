import { ThemeButton } from "../../style/global.js";
import { StyledCard } from "./style.js";
function Card({ product, currentSale, setCurrentSale }) {
  function addProdCart() {
    if (!currentSale.includes(product)) {
      setCurrentSale([...currentSale, product]);
    } else {
      alert("Produto ja foi adicionao ao carrinho");
    }
  }

  let prodPrice = product.price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <StyledCard>
      <div className="contentImg">
        <img src={product.img} alt={product.name}></img>
      </div>
      <div className="contentCard">
        <h3>{product.name}</h3>
        <span>{product.category}</span>
        <p>{prodPrice}</p>
        <ThemeButton buttonSize="medium" onClick={addProdCart}>
          Adicionar
        </ThemeButton>
      </div>
    </StyledCard>
  );
}
export default Card;
