import React from "react";


export default function Users(props)
{

    const mystyle = {
        
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
      };

      return(

        <div style={mystyle}> 
        <button onClick={props.data}>Call From Member function</button>
        <button onClick={()=>alert('ffff')}>Call From Member function</button>
        </div>

      )
       
}

