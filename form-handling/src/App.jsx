import React from "react";
import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    setError, // for custom error
    formState: { errors, isSubmitting },
  } = useForm();

  //delay function
  //this process is done to tell user that the form is submiting and gives message
  const delay = (time) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, time * 1000);
    });
  };

  const onSubmitFunc = async (data) => {
    let r = await fetch("http://localhost:3000/",{method : "POST", body: JSON.stringify(data)})
    let res = await r.text()
    console.log(data, res)
    // await delay(2); //stimulating netword delay
    // console.log(data);
    // if (data.username !== String) {
    //   setError("myForm", {
    //     message: "username should not be number or characters",
    //   });
    // }
    // if (data.username === "rohan") {
    //   setError("blocked", { message: "rohan is blocked" });
    // }

  };

  return (
    <>
      <p>this is app</p>
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmitFunc)}>
          <input
            type="text"
            placeholder="username"
            {...register("username", {
              required: { value: true, message: "this field is required" },
              minLength: { value: 3, message: "min length is 3" },
              maxLength: { value: 8, message: "max length is 8" },
            })}
          />
          {errors.username && <div>{errors.username.message}</div>}
          <br />
          <input
            type="password"
            placeholder="password"
            {...register("password", {
              required: { value: true, message: "this field is required" },
              minLength: { value: 4, message: "min length is 6" },
              maxLength: { value: 8, message: "max length is 8" },
            })}
          />
          {errors.password && <div>{errors.password.message}</div>}
          <br />
          {isSubmitting && <div>Submitting...</div>}
          <input disabled={isSubmitting} type="submit" value="submit" />
          {errors.myForm && <div>{errors.myForm.message}</div>}
          {errors.blocked && <div>{errors.blocked.message}</div>}
        </form>
      </div>
    </>
  );
}

export default App;
