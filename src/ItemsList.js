import React from 'react'
import LineItem from './LineItem'

export const ItemsList = ({item,handleCheck,handledelete}) => {
  return ( 
    <div>
        <LineItem item={item} 
        key={item.id} 
        handleCheck={handleCheck} 
        handledelete={handledelete}/>
    </div>
  )
}
