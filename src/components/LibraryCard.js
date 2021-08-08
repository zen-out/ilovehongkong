import React from "react";

function LibraryCard(props) {
  console.log(props);
  return (
    <div>
      <h1>Library Card</h1>
      {props.item.type}
    </div>
  );
}

export default LibraryCard;
