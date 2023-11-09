import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'

const LineItem = ({item,handleCheck,handledelete}) => {
  return (
    <div><li className='item'>
    <input type="checkbox" 
        onChange={()=>handleCheck(item.id)} 
        checked={item.checked}/>
    <label style={(item.checked)?{textDecoration:'line-through'}:null} onDoubleClick={()=>handleCheck(item.id)}>
        {item.value}
    </label>
    <button>
        <FaTrashAlt onClick={()=>handledelete(item.id)} tabIndex="0" aria-label={`Delete ${item.value}`}/>
    </button>
  </li></div>
  )
}

export default LineItem