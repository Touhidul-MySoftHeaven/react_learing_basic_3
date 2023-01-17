import { useState } from "react"

export default function ShowHide()
{

let [isShowDiv,setShowDiv]=useState(true);



return (

<div>
    {

    isShowDiv ? "This is a Div" : null

    }

    <div>
    <button onClick={()=>{setShowDiv(true)}}>Show</button>
    <button onClick={()=>{setShowDiv(false)}}>Hide</button>
    <button onClick={()=>{setShowDiv(! isShowDiv)}}>Troggle</button>
    </div>


</div>
)
}
