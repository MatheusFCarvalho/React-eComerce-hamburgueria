import { RemoveButtonProd, StyledCartSaled } from "../../style";

function CartSaled({ props, saled }) {
  const { currentSale, setCurrentSale } = props;

  function removeProd() {
    saled.qtd = 0;
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
        <p>Qtd: {saled.qtd}</p>
      </div>
    </StyledCartSaled>
  );
}
export default CartSaled;
