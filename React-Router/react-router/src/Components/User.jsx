import React from "react";
import { useParams } from "react-router-dom";

const User = () =>{
    const {userId} = useParams(); //this is used to take dynamic data from user 
    return (
        <>
        <div>User : {userId}</div>
        </>
    )
};
export default User;