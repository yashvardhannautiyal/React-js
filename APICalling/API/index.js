export const getPosts = async()=>{ 
  const response = await fetch('https://jsonplaceholder.typicode.com/posts',{ 
        method: 'GET', 
    });
    return await response.json();
};


//promise : A promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value

//async function denotes that it will return a promise and can have await in it

// await is used to pause the execution of async function until promise request is completed and respomse is recieved 

//GET method is used to retrieve data from server

//JSON (JavaScript Object Notation) is a lightweight data-interchange format that is easy for humans to read and write and easy for machines to parse and generate. It is often used for transmitting data in web applications between a server and a client.
// The json() method reads the response stream to completion and returns a promise that resolves with the result of parsing the body text as JSON.

