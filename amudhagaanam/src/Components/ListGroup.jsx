import React from "react";

function ListGroup({ itemsList, style, clickHandler }) {
  console.log("itemlist ", itemsList);
  return (
    <div style={style}>
      <ul className="list-group">
        {itemsList.map((item) => (
          <li
            onClick={() => clickHandler(item.id)}
            key={item.id}
            className="list-group-item clickable"
          >
            {item.name} {item.type ? item.type : null}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListGroup;
