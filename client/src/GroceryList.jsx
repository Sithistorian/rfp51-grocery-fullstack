import React from 'react';
import GroceryListEntry from './GroceryListEntry.jsx';

function GroceryList ({groceries}) {

  return (

    <ol>

      {
      groceries.map((item) => {
      return <li key={item.id}><GroceryListEntry item={item}/></li>
      })
      }

    </ol>


  )


}

export default GroceryList;