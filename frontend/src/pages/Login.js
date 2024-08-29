import { useState } from "react"
import { Link, useNavigate } from "react-router-dom" // Import useNavigate
import { useLogin } from "../hooks/useLogin"

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login, error, isLoading } = useLogin()
  const navigate = useNavigate(); // Initialize navigate hook

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Await the login function
    await login(email, password)

    // After successful login, redirect to '/' and reload the page
    navigate('/')
    window.location.reload(); // Reload the page
  }

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h3>Log In</h3>
      
      <label>Email address:</label>
      <input 
        type="email" 
        onChange={(e) => setEmail(e.target.value)} 
        value={email} 
      />
      <label>Password:</label>
      <input 
        type="password" 
        onChange={(e) => setPassword(e.target.value)} 
        value={password} 
      />

      <button disabled={isLoading}>Log in</button>
      {error && <div className="error">{error}</div>}

      <div>
        <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
      </div>
    </form>
  )
}

export default Login