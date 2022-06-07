import { useEffect, useState } from "react";
import { RemoveButtonProd, StyledCartSaled } from "../../style";

function CartSaled({ props, saled }) {
  const { currentSale, setCurrentSale } = props;

  const [saledQtd, setSaledQtd] = useState(1);
  saled.qtd = saledQtd;

  function addQtd() {
    setSaledQtd(saledQtd + 1);
    saled.qtd++;
    setCurrentSale([...currentSale]);
  }

  function subQtd() {
    setSaledQtd(saledQtd - 1);
    saled.qtd--;
    setCurrentSale([...currentSale]);
  }
  useEffect(() => {
    if (saledQtd === 0) {
      removeProd();
    }
  }, [saledQtd]);

  function removeProd() {
    setCurrentSale(currentSale.filter((prod) => prod !== saled));
  }

  return (
    <StyledCartSaled key={saled.id}>
      <div className="imgAndTitle">
        <img src={saled.img} alt={saled.name} />
        <div className="titleAndCategory">
          <h4>{saled.name}</h4>
          <p>{saled.category}</p>
        </div>
      </div>
      <div className="removeAndQtd">
        <RemoveButtonProd onClick={removeProd}>Remover</RemoveButtonProd>
        <p>
          Qtd: <button onClick={subQtd}>-</button> {saledQtd}{" "}
          <button onClick={addQtd}>+</button>
        </p>
      </div>
    </StyledCartSaled>
  );
}
export default CartSaled;
