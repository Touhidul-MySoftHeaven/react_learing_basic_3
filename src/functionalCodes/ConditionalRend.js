import { useState } from "react"

export default function ConditionalRend()
{

    const [loggedIn, setLoggedIn] = useState(2)
    // loggedIn=3
// 1,2,3
    return (
        <div>
            {loggedIn==1?
            <h1>Welcome User 1</h1>
            :loggedIn==2?<h1>Welcome User2</h1>
            :<h1>Welcome User3</h1>}
        </div>
    )
}