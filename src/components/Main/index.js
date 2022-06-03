import ContainerCards from "../ContainerCards";
import ContainerCart from "../ContainerCart";
import { StyledMain } from "./style";

function Main({ props }) {
  return (
    <>
      <StyledMain>
        <ContainerCards props={props} />
        <ContainerCart props={props}/>
      </StyledMain>
    </>
  );
}
export default Main;
