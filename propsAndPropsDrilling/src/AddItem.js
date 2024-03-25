import React from 'react'
import { FaPlus } from 'react-icons/fa'

const AddItem = () => {
  return (
  <form className="addForm" onSubmit={}>
    <label htmlFor="addItem">Add Item
    <input type="text"
     autoFocus id='addItem'
      placeholder='Add Item' 
      required
       value={}
        onChange={} />
    </label>
    <button type='submit'
    aria-label='Add Item'
 
    >
        <FaPlus/>
    </button>
  </form>
  )
}

export default AddItem

