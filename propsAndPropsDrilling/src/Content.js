
import "./Content.css";
import { FaTrash } from "react-icons/fa";

const Content = ({items, handleCheck, handleDelete}) => {
  // const [name, setName] = useState('Bashirat')
  

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
