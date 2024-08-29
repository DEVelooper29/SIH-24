import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useSignup } from "../hooks/useSignup"

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { signup, error, isLoading } = useSignup()
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()

    await signup(email, password)
    navigate('/')
    window.location.reload(); 
  }

  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h3>Sign Up</h3>
      
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

      <button disabled={isLoading}>Sign up</button>
      {error && <div className="error">{error}</div>}

      <div>
        <p>Already have an account? <Link to="/login">Log in</Link></p>
      </div>
    </form>
  )
}

export default Signup
