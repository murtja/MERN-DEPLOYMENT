import Login from '../components/Login';
import Register from '../components/Register';
import { useState } from 'react'


const WelcomePage = () => {
    const [user, setUser] = useState(null)

    return (
      <div>
        <Register path="/register" setUser={setUser} />
        <Login path="/login" setUser={setUser}  />
      </div>
    )
  }
  
  export default WelcomePage;