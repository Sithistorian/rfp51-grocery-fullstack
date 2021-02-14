import React from 'react';

function GroceryListEntry ({item}) {
  console.log('item', item)

  return <div>{item.item}</div>
}

export default GroceryListEntry;