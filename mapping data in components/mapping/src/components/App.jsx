import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function createCard(item) {
  return (
    <Card
      key={item.id} //for each item being rendered by a loop such as map need to be given a property with unique value such as "id" in our case else console will have an error
      //key define the sequence in which the item will be renered in ReactDOM
      //key is not for our use it is only for react use and if we want id we have to create a separate prop for accessing id
      name={item.name}
      img={item.imgURL}
      tel={item.phone}
      email={item.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>

       {/* creating map function to go through each of the element required from function creatCard from contacts.js file */}
       {contacts.map(createCard)}

      {/* <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      /> */}
    </div>
  );
}

export default App;
