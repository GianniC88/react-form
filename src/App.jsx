import { useState } from "react";

function App() {
  const listItems = ["prodotto 1", "prodotto 2", "prodotto 3", "prodotto 4"];
  console.log(listItems);
  const [newItems, setNewItem] = useState("");
  const [items, setItems] = useState(listItems);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(newItems);
    setItems([newItems, ...items]);
  }

  // Funzione per rimuovere un elemento
  function removeItem(indexToRemove) {
    const filteredItems = items.filter(
      (item, index) => index !== indexToRemove
    );
    setItems(filteredItems);
  }

  return (
    <>
      <div className="container p-5">
        <h1>bazar</h1>

        <ul className="list-group ">
          {items.map((item, index) => (
            <li key={index} className="list-unstyled m-1 ">
              {item}

              <button className="m-2" onClick={() => removeItem(index)}>
                <i class="bi bi-x-circle-fill "></i>
              </button>
            </li>
          ))}
        </ul>
        <form onSubmit={handleSubmit}>
          <div className="d-flex">
            <input
              type="text"
              className="form-control mt-2"
              placeholder="insert new task"
              value={newItems}
              onChange={(e) => setNewItem(e.target.value)}
            />
            <button type="submit" className="btn ">
              <i className="bi bi-plus-circle "></i>save
            </button>
          </div>
          <p>{newItems}</p>
        </form>
      </div>
    </>
  );
}

export default App;
