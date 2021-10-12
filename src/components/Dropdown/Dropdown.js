import React, { useState } from "react";
import "./dropdown.css";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const SelectionOptionBars = ({ desselectAll, selectAll }) => {
  return (
    <div className="dropdon-selection-container">
      <Button onClickFn={desselectAll} cName={"dropdown-selection-button"}>
        Clear Selection
      </Button>
      <Button onClickFn={selectAll} cName={"dropdown-selection-button"}>
        Select All
      </Button>
    </div>
  );
};

const TitleBar = ({ selectedLength, mappedSelected, isOpen }) => {
  const downArrow = <FontAwesomeIcon icon={faChevronDown} />;
  const upArrow = <FontAwesomeIcon icon={faChevronUp} />;

  return (
    <div>
      {selectedLength > 0 ? mappedSelected : "Please Make a Selection"}
      <span className="dropdown-title-arrow">
        {isOpen ? upArrow : downArrow}
      </span>
    </div>
  );
};

/**
 *
 * @param {title} String title of the dropdown
 * @param {items} List list containing the contents of the dropdown menu
 */
const Dropdown = ({
  title,
  items,
  updateSelectedOption,
  setAllSelectFalse,
  setAllSelectTrue,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState([]);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (item) => {
    let itemName = item.item;
    let ind = selected.indexOf(itemName);

    updateSelectedOption(item.id);

    if (ind === -1) {
      setSelected((arr) => [...arr, itemName]);
    } else {
      let copy = [...selected];
      copy.splice(ind, 1);

      setSelected(copy);
    }
  };

  const desselectAll = () => {
    setAllSelectFalse();
    setSelected([]);
  };

  const selectAll = () => {
    setAllSelectTrue();

    let copyItems = [...items];
    let copySelected = [];

    copyItems.forEach((el) => {
      copySelected.push(el.item);
    });

    setSelected(copySelected);
  };

  let mappedSelected = selected.map((item) => (
    <span key={item}>{item + " "}</span>
  ));

  let mappedItems = items.map((item) => (
    <button
      className={item.selected ? "dropdown-item-selected" : "dropdown-item"}
      key={item.id}
      onClick={() => selectOption(item)}
    >
      {item.item}
    </button>
  ));

  return (
    <div className="container">
      <div className="dropdown-title">{title}</div>
      <div className="dropdown-container">
        <SelectionOptionBars
          desselectAll={desselectAll}
          selectAll={selectAll}
        />
        <Button
          onClickFn={toggleOpen}
          cName={
            isOpen
              ? "dropdown-title-container-open"
              : "dropdown-title-container"
          }
        >
          <TitleBar
            selectedLength={selected.length}
            mappedSelected={mappedSelected}
            isOpen={isOpen}
          />
        </Button>
        {isOpen && <div className="dropdown-list">{mappedItems}</div>}
      </div>
    </div>
  );
};

export default Dropdown;
