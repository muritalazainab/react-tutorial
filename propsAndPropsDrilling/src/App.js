import { useState } from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import AddItem from "./AddItem";

function App() {
  const [items, setItem] = useState(JSON.parse(localStorage.getItem("shoppinglist")))
   
  const  setAndSaveItems = (newItems) => {
   setItem(newItems)
   localStorage.setItem('shoppingList', JSON.stringify(newItem));
   

  }
  const [newItem, setNewItem] = useState('')

  const addItem = (item) => {
  const id = items.length ? items[items.length - 1].id + 1 : 1;
  const myNewItem = {id, checked:false, item } 
  const listItems = [...items, myNewItem]
  setAndSaveItems(listItems)
  // setItem(listItems);
  // localStorage.setItem('shoppingList', JSON.stringify(listItems))
}
  const handleCheck = (value) => {
    // console.log(`key: ${id}`)
    const listItems = items.map((item) =>
      item.id === value ? { ...item, checked: !item.checked } : item

    );
    // setItem(listItems);
    // localStorage.setItem('shoppingList', JSON.stringify(listItems));
  };
  const handleDelete = (id)=>{
   const listItems = items.filter((item)=> item.id !==id);
   
   setItem(listItems)
  }
  const handleSubmit =(e) => {
    e.preventDefault();
    if(!newItem) return;
    addItem(newItem)
    setNewItem('')
  }

  return (
    <div className="App">
      <Header  title = "Welcome to props"/>
      <AddItem  
      newItem={newItem}
      setNewItem={setNewItem}
      handleSubmit={handleSubmit}
      />
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
