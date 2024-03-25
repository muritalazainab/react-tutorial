import { useState } from "react";
import "./Content.css";
import { FaTrash } from "react-icons/fa";

const Content = () => {
  // const [name, setName] = useState('Bashirat')
  const [items, setItem] = useState([
    {
      id: 1,
      checked: false,
      item: "A bag of garri",
    },
    {
      id: 2,
      checked: false,
      item: "A bag of rice",
    },
    {
      id: 3,
      checked: false,
      item: "A bag of semo",
    },
    {
      id: 4,
      checked: false,
      item: "ponmo",
    },
  ]);
  const handleCheck = (id) => {
    // console.log(`key: ${id}`)
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItem(listItems);
    localStorage.setItem('shoppingList', JSON.stringify(listItems));
  };
  const handleDelete = (id)=>{
   const listItems = items.filter((item)=> item.id !==id);
   setItem(listItems)
  }

  return (
    <main className="student">
      {items.length ? (      <ul>
        {items.map((item) => (
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
        ))}
      </ul>
      ) : (
        <p style={{marginTop:"2rem"}}>Your list is empty</p>
      )}
    </main>
  );
};

export default Content;
