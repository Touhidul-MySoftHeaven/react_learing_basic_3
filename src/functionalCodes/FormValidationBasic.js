import { useState } from "react";

export default function FormValidation()
{
    const [user,setUser]=useState("");
    const [password,setPassword]=useState("");
    const [userErr,setUserErr]=useState(false);
    const [passErr,setPassErr]=useState(false);
    const [valiation,setvalidation]=useState(false);

  function loginHandle(e)
    {
        if(valiation)
        {
            alert("all good :)")
            
        }
        else
        {
            alert("type correct values")
        }

        e.preventDefault()
    }
    function userHandler(e){
        let item=e.target.value;
        if(item.length<3 )
        {
           setUserErr(true);
           setvalidation(false);
        }
        else
        {
            setUserErr(false);
            setvalidation(true);
        }
        setUser(item)
    }
    function passwordHandler(e){
        let item=e.target.value;
        if(item.length<3 )
        {
           setPassErr(true);
           setvalidation(false);
        }
        else
        {
            setPassErr(false);
            setvalidation(true);
        }
        setPassword(item)

    }
    return (
        <div>
            <h1>Login</h1>
           <form onSubmit={loginHandle}>
           <input type="text" placeholder="Enter User Id" onChange={userHandler} />{userErr?<span>User Not Valid</span>:""}
            <br /> <br />
            <input type="password" placeholder="Enter User Password" onChange={passwordHandler}/>{passErr?<span>Password Not Valid</span>:""}

            <br /> <br />
            <button type="submit"  >Login</button>
           </form>
        </div>
    )
       
}