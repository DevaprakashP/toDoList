import React from 'react'
import { ItemsList } from './ItemsList';

const Content = ({items,handleCheck,handledelete}) => {
  return (
    <>
    <main>
    {(items.length)?(
    <ul>
      {
        items.map((item)=>(
        <ItemsList item={item} key={item.id} handleCheck={handleCheck} handledelete={handledelete}/>
        ))}
    </ul>
    ):<p>Your list is empty</p>}
    </main>
    </> 
  )
} 

export default Content