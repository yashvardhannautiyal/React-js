import React, {useEffect, useState} from "react";

//---------------useEffect() when mounting on screen----------------
// const MyComponent = () =>{
//     useEffect(()=>{
//         console.log("My component is mouting...")
//     }, [])

//     return (
//         <h3>My Component</h3>
//     )

//--------useEffect() when updating -----------------
const MyComponent = ()=>{

    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(10);
    

    useEffect(()=>{
        console.log("MyComponent is mounting....")
    }, []) //empty dependency tells that this needs to be run when mounting

    useEffect(()=>{
        console.log("Count got updated")
    }, [count, count2]); //runs everytime when updating count

    return (
        <div>
            <p>Count is {count}</p>
            <p>Count2 is {count2}</p>
            <button onClick={ () => setCount( count + 1 )}>Press button</button>
            <button onClick={ () => setCount2( count2 + 10 )}>Press button</button>
        </div>
    )
}


export default MyComponent;







// Notes 
//useEffect when mounting on screen then leave dependencyArray empty
//useEffect when updating on screen then add function variable in dependencyArray 