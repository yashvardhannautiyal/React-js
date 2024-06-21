import React, {useState} from "react";

const CounterComponent = () => {
    const [count, setCount] = useState(27839);
    const [value, setValue] = useState("yash");
    console.log(count); // value in console is updated as in state whenever a value is updatated the app is re-rendered with updated value


    return(
        <div>
            <p>Count Component - {count}</p>
            <h5>Value is {value}</h5>
            <button onClick={() => setValue("React")}>Change</button>
            <button onClick={()=> setCount(count + 1)}>Increment</button>
            <button onClick={()=> setCount(count - 1)}>Decrement</button>
        </div>
    );
}

export default CounterComponent;


//--------------NOTES-----------------
//HOOKS : are reusable functons that provide access to state in React app
//State : state of a component is a variable that holds some information that may change over the lifetime of a component 

//useState hook : takes two input  - [value, function] 
// value: returned by the function and function : that returns the updated value