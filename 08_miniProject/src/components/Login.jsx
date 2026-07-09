import React, { useContext } from "react"
import UserContext from "../context/UserContext"

function Login(){

    const [username, setUsername] = React.useState("")
    const [password, setPassword] = React.useState("")
    const {setUser} = useContext(UserContext)

    const handleSubmit =(e) => {
        e.preventDefault()
        setUser({username, password})
    }

    return(
        <div>
            <input 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text" placeholder="Username" />
            <input 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password" placeholder="password" />
            <button onClick={handleSubmit}>submit</button>
        </div>
    )
}

export default Login