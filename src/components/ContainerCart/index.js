import CartLonely from "./CartLonely";
import ProductsSaled from "./ProductsSaled";
import { StyledCart, StyledLine } from "./style";
import TotalValue from "./TotalValue";

function ContainerCart({ props }) {
  return (
    <StyledCart>
      <div className="headerCart">
        <h3>Carrinho de compras</h3>
      </div>
      <div className="mainCart">
        {props.currentSale.length > 0 ? (
          <>
            <ProductsSaled props={props} />
            <StyledLine />
            <TotalValue props={props} />
          </>
        ) : (
          <>
            <CartLonely />
          </>
        )}
      </div>
    </StyledCart>
  );
}
export default ContainerCart;
