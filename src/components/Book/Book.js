import React from 'react'

let productList = [];

export const addToProductList = (book) => {
  if(!book || book == "")
    return productList
  productList.push(book);
  return productList;
}

function Book(props) {
  return (
    <div>
      <div data-testid = "bookName">{props.name}</div>
      <button data-testid="addButton" onClick={() => addToProductList(props.name)}>Add to Product List</button>
    </div>
    
  )
}

export default Book