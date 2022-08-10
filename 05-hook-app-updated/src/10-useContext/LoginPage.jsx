import { useContext } from "react"
import { UserContext } from "./context/UserContext"

export const LoginPage = () => {

  const {user, setUser} = useContext( UserContext );

    return (
      <div>
          <h1>LoginPage app</h1>
          <hr />

          <pre>
            {JSON.stringify(user, null, 2)}
          </pre>

          <button className="btn btn-primary" onClick={()=>setUser({
            name: "John",
            age: 30
          }) }>
              Establecer usuario
          </button>
      </div>
    )
  }
  