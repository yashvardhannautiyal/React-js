import React from 'react';
import Item from './Components/Items';
import Cart from './Components/Cart';
function App() {
  

  return (
    <div>
     <Item name = "Mackbook" price = {54000} />
     <Item name = "keyboard" price = {540} />
     <Item name = "mobile" price = {5400} />
    <Cart />
    </div>
  )
}

export default App
