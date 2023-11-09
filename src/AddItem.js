import React, { useRef } from 'react'
import { FaPlus } from 'react-icons/fa'


const AddItem = ({newItem,setNewItem,handleSubmit}) => {
  const inputRef=useRef()
  return (
    <div>
        <form className='addForm' onSubmit={handleSubmit}>
            <label htmlFor="addItem">Add Item</label>
            <input 
               ref={inputRef}
               type="text" 
                id="addItem" 
                placeholder='Add Item' 
                required 
                value={newItem} 
                onChange={(e)=>setNewItem(e.target.value)}/>
            <button type="submit" onClick={()=>inputRef.current.focus()}>
              <FaPlus/>
            </button>
            
        </form>
    </div>
  )
}

export default AddItem