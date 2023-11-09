import React from 'react'

export const SearchItem = ({search,setSearch}) => {
  return (
    <div>
        <form className="searchForm" onSubmit={(e)=>e.preventDefault()}>
            <label htmlFor="search"></label>
            <input id="search" type="text" placeholder='Search Items' value={search} onChange={(e)=>setSearch(e.target.value)}/>
        </form>
        </div>
  )
}
