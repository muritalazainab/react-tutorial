
import "./Content.css";
import ListItem from "./ListItem";


const Content = ({items, handleCheck, handleDelete}) => {
  // const [name, setName] = useState('Bashirat')
  

  return (
    <main className="student">
      {items.length ? (     
        <ListItem 
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p style={{marginTop:"2rem"}}>Your list is empty</p>
      )}
    </main>
  );
};

export default Content;
