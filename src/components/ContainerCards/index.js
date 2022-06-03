import Card from "../Card";
import "./style.css";

function ContainerCards({ props }) {
  const { filteredProducts, currentSale, setCurrentSale } = props;

  return (
    <div className="ContainerStyled">
      {filteredProducts.map((prod) => (
        <Card
          key={prod.id}
          product={prod}
          currentSale={currentSale}
          setCurrentSale={setCurrentSale}
        />
      ))}
    </div>
  );
}
export default ContainerCards;
