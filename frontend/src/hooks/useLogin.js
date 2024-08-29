import { useState } from 'react'

export const useLogin = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false) // Ensure initial value is false

  const login = async (email, password) => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch('http://localhost:4000/api/user/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ email, password })
      });

      if (!response.ok) {
        const json = await response.json();
        setError(json.error)
      } else {
        // save the user to local storage
        const json = await response.json();
        localStorage.setItem('user', JSON.stringify(json));
        console.log('Logged in');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setError('An unexpected error occurred');
    } finally {
      setIsLoading(false); // Ensure isLoading is set to false after login attempt
    }
  };

  return { login, isLoading, error };
};
