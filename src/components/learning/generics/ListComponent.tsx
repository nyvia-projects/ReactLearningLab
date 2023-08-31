import React, { useState } from "react";
import { List } from "./List";
import "./ListComponent.css"; // Import the CSS file for styling

export const ListComponent = () => {
  const itemList = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
    { id: 4, name: "Item 4" },
    { id: 5, name: "Item 5" },
    { id: 6, name: "Item 6" },
  ];

  const [clickedItem, setClickedItem] = useState<{
    id: number;
    name: string;
  } | null>(null);

  const handleItemClick = (item: { id: number; name: string }) => {
    setClickedItem(item);
  };

  return (
    <div className="container">
      <h2>List Component</h2>
      <div className="list-container">
        <List items={itemList} onClick={handleItemClick} />
      </div>
      {clickedItem && (
        <div className="clicked-item">
          <h4>Clicked Item</h4>
          <p>
            ID: {clickedItem.id} | Name: {clickedItem.name}
          </p>
        </div>
      )}
    </div>
  );
};
