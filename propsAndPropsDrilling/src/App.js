import { useState } from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";


// import Nav from "./nav";

function App() {
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
  const [newItem, setNewItem] = useState('')
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
  handleSubmit =( e) => {
    e.preventDefault();
    if(!newItem) return;
    setNewItem('')
  }

  return (
    <div className="App">
      <Header  title = "Welcome to props"/>
      <Content 
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length}  />
      
    </div>
  );
}

export default App;
