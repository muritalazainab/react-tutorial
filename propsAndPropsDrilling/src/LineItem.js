import React from 'react'
import { FaTrash } from "react-icons/fa";

const LineItem = ({item, handleCheck, handleDelete}) => {
  return (
   
      <li className="item" key={item.id}>
        <input
          type="checkbox"
          onClick={() => handleCheck(item.id)}
          checked={item.checked}
        />
       
        <label
         style={(item.checked) ? {textDecoration: "line-through"} : null}
         onDoubleClick={() => handleCheck(item.id)}> {item.item} </label>
        <FaTrash onDoubleClick={() => handleDelete(item.id)} role="button" tabIndex="0"/>
      </li >
      );
   
}

export default LineItem
