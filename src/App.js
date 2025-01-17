import { useEffect, useState } from 'react';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import AddItem from './AddItem';
import { SearchItem } from './SearchItem';

function App() {
  const [items,setItems]=useState(JSON.parse(localStorage.getItem('todo_list')));

   const [newItem,setNewItem]=useState('')
   const [search,setSearch]=useState('')

    useEffect(()=>{
      JSON.parse(localStorage.getItem('todo_list'))},[items])
  const handleCheck=(id)=>{
     const listItems=items.map((item)=>item.id===id?{...item,checked:!item.checked}:item)
     setItems(listItems)
     localStorage.setItem("todo_list",JSON.stringify(listItems))
  }

  const handledelete=(id)=>{
    const listItems =items.filter((item)=>item.id!==id)
    setItems(listItems)
    localStorage.setItem("todo_list",JSON.stringify(listItems))
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!newItem) return;
    addItem(newItem)
    setNewItem('')
  }

  const addItem=(item)=>{
    const id=items.length?items[items.length-1].id+1:1
    const addNewItem={id:id,checked:false,value:item}
    const listItems=[...items,addNewItem] 
    setItems(listItems)
    localStorage.setItem("todo_list",JSON.stringify(listItems))
  }

  return (
    <>
    <div className='main-section'>
    <div>
      <Header title="To Do List" />
      <AddItem newItem={newItem} setNewItem={setNewItem} handleSubmit={handleSubmit}/>
      <SearchItem search={search} setSearch={setSearch}/>
      <Content  items={items?.filter(item=>((item.value).toLowerCase()).includes(search.toLowerCase()))} handleCheck={handleCheck} handledelete={handledelete}/>
      <Footer foot={items.length}/>
    </div>
    </div></>
  );
}

export default App;
