import {useState} from 'react'
import './Content.css'
import { FaTrash } from "react-icons/fa";

const Content = () => {
  // const [name, setName] = useState('Bashirat')
 const [items, setItem] = useState([
  {
    id: 1,
    checked: false,
    item: "A bag of garri"
  },
  {
    id: 2,
    checked: false,
    item: "A bag of rice"
  },
  {
    id: 3,
    checked: false,
    item: "A bag of semo"
  },
  {
    id: 4,
    checked: false,
    item: "ponmo"
  },
])

    // const handleNameChange = () => {
    //     const names = ["Fulani", "Oyee", "Eef"];
    //     const int = Math.floor(Math.random() * 3);
    //    setName((names[int]))
    // };
   
    // const handleClick2 = (name)=>{
    //   console.log(`${name} was clicked`)
    // }
    
  return (
    <main className='student'>
      
{/* 
      <h1>{name}</h1>
      <button onClick={handleNameChange}>Change Name</button>
      <button onClick={handleClick}>Click me</button>
      <button onClick={ () =>{handleClick2('Hayzed')}}>Click me</button> */}
      <ul>
        {items.map((item) => (
          <li className='item' key={item.id}>
            <input type="checkbox" checked={item.checked} />
            <label>{item.item}</label>
            <FaTrash />
          </li>
        ))}
        </ul>
    </main>
  );
};

export default Content
