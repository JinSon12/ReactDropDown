import "./App.css";
import Dropdown from "./components/Dropdown/Dropdown";
import { useState, useEffect } from "react";
import { generateJSONItems } from "./utils/generateItems.js";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    let generatedItems = generateJSONItems(9);
    setItems(generatedItems.slice());
  }, []);

  const updateSelectedOption = (itemId) => {
    let itemsCopy = items.slice();

    itemsCopy[itemId].selected = !itemsCopy[itemId].selected;

    setItems(itemsCopy);
  };

  const setAllSelectFalse = () => {
    let itemsCopy = items.slice();

    itemsCopy.forEach((element) => {
      element.selected = false;
    });

    setItems(itemsCopy);
  };

  const setAllSelectTrue = () => {
    let itemsCopy = items.slice();

    itemsCopy.forEach((element) => {
      element.selected = true;
    });

    setItems(itemsCopy);
  };

  return (
    <div className="App">
      <h1>React Based Interactive Dropdown</h1>
      <Dropdown
        title="Please Make a Selection"
        items={items}
        updateSelectedOption={updateSelectedOption}
        setAllSelectFalse={setAllSelectFalse}
        setAllSelectTrue={setAllSelectTrue}
      />
    </div>
  );
}

export default App;
