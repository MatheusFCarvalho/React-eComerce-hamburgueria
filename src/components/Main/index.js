import ContainerCards from "../ContainerCards";
import ContainerCart from "../ContainerCart";
import ResultSearch from "../ResultSearch";
import { StyledMain } from "./style";

function Main({ props }) {
  return (
    <>
      <ResultSearch filterValue={props.filterValue} />
      <StyledMain>
        <ContainerCards props={props} />
        <ContainerCart props={props} />
      </StyledMain>
    </>
  );
}
export default Main;
