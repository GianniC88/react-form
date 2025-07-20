import { useState } from "react";

function App() {
  const listProducts = ["prodotto 1", "prodotto 2", "prodotto 3", "prodotto 4"];
  console.log(listProducts);
  const [newProduct, setNewProduct] = useState("");
  const [products, setNewProducts] = useState(listProducts);

  return (
    <>
      <div className="container p-5">
        <h1>bazar</h1>

        <ul className="list-group">
          {products.map((products, index) => {
            <li key={index} className="list-unstyled ">
              {products}
            </li>;
            console.log(products);
          })}
        </ul>
        <div className="d-flex">
          <input
            type="text"
            className="form-control mt-2"
            placeholder="insert new task"
            value={newProduct}
            onChange={(e) => setNewProduct(e.target.value)}
          />
        </div>
      </div>
    </>
  );
}

export default App;
