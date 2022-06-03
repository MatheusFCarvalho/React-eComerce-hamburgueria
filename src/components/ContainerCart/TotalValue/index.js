import { ThemeButton } from "../../../style/global";
import { StyledTotalValue } from "../style";

function TotalValue({ props }) {
  const { currentSale, setCurrentSale } = props;

  let totalValue = currentSale
    .reduce((cumulador, atual) => cumulador + atual.price * atual.qtd, 0)
    .toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  function removeTodosProd() {
    currentSale.forEach((prod) => {
      prod.qtd = 0;
    });
    setCurrentSale([]);
  }

  return (
    <StyledTotalValue>
      <div className="infoTotal">
        <h5>Total</h5>
        <p>{totalValue}</p>
      </div>
      <ThemeButton buttonSize="large" cinza={true} onClick={removeTodosProd}>
        Remover todos
      </ThemeButton>
    </StyledTotalValue>
  );
}
export default TotalValue;
