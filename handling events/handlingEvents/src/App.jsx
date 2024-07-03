import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  // const [name, setName] = useState("yash");
  const [form, setForm] = useState({email : "", phone : ""});

  const handleClick = () => {
    alert("Hey i am clicked!!");
  };

  const handleMouseOver = () => {
    alert("Hey i am a mouse over");
  };

  const handleChange = (e) => {
    setForm({...form, [e.target.name]:e.target.value});
    console.log(form)
  };

  return (
    <>
      <div className="button">
        <button onClick={handleClick}>Click me</button>
      </div>

      {/* <div className="red" onMouseOver={handleMouseOver}>
        I am a div red
      </div> */}

      <input type="text" name="email" value={form.email} onChange={handleChange} />
      <input type="text" name="phone" value={form.phone} onChange={handleChange} />
      {/* when we put value is equal to something as in this case value = {name} it is permanently set  and to change it we must use onChnage and give some function to change the value when need to change on giving input on page  */}
    </>
  );
}

export default App;

