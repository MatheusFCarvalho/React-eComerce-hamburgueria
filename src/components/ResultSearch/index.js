import "./style.css";

function ResultSearch({ filterValue }) {
  return (
    <>
      {filterValue.length > 0 && (
        <h1 className="resultSearch">
          Resultados para: <span>{filterValue}</span>
        </h1>
      )}
    </>
  );
}

export default ResultSearch;
