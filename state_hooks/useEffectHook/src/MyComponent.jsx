import React, {useEffect} from "react";

const MyComponent = () =>{
    useEffect(()=>{
        console.log("My component is mouting...")
    }, [])

    return (
        <h3>My Component</h3>
    )
}

export default MyComponent;