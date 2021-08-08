import React from "react";
import LibraryCard from "./LibraryCard";

export default function LibraryList(props) {
  let data = props.list.features;

  //   console.log(typeof data);
  console.log(data);

  let arr = [];
  console.log(typeof data);

  // this is an object
  for (let i = 0; i < data.length; i++) {
    arr.push(data[i]);
  }
  //   console.log("array", arr);
  //   console.log("Values", Object.values(data));
  //   let values = Object.values(data);
  //   console.log(typeof values);
  //   console.log(values.length);
  //   let array = [];
  //   for (let [key, value] in values) {
  //     console.log(key);
  //     console.log(value);
  //   }
  //   console.log(data.features);

  return (
    <div>
      <h1>Library List</h1>
      {data.map((item, index) => {
        <div>{item.type}</div>;
      })}
    </div>
  );
}
