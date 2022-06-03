import { StyledProductsSaled } from "../style";
import CartSaled from "./CartSaled";

function ProductsSaled({ props }) {
  return (
    <StyledProductsSaled>
      {props.currentSale.map((saled) => {
        return <CartSaled key={saled.id} props={props} saled={saled} />;
      })}
    </StyledProductsSaled>
  );
}
export default ProductsSaled;
