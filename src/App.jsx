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

  return (
    <>
      <div className="container p-5">
        <h1>bazar</h1>

        <ul className="list-group">
          {items.map((item, index) => (
            <li key={index} className="list-unstyled ">
              {item}
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
            <button type="submit" className="btn">
              <i className="bi bi-plus-circle"></i>save
            </button>
          </div>
          <p>{newItems}</p>
        </form>
      </div>
    </>
  );
}

export default App;
