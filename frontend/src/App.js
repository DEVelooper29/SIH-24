import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

// pages & components
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'
import Results from './pages/Results'
import Remedies from './pages/Remedies'
import Remedies1 from './pages/Remedies1'
import Diseases from './pages/Diseases'
import Profile from './pages/Profile'
import MapCharts from './pages/MapCharts'
import State from './pages/State'

function App() {
  // const user = JSON.parse(localStorage.getItem("user")) || null;
  const user = true;

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route 
              path="/" 
              element={user ? <Home /> : <Navigate to="/login" />} 
            />
             <Route path="/india" element={<MapCharts />} />
             <Route path="/state" element={<State />} />
            <Route 
              path="/login" 
              element={!user ? <Login /> : <Navigate to="/" />} 
            />
            <Route 
              path="/signup" 
              element={!user ? <Signup /> : <Navigate to="/" />} 
            />
            <Route 
              path="/results" 
              element={user ? <Results /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/remedies" 
              element={user ? <Remedies /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/remedies1" 
              element={user ? <Remedies1 /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/diseases" 
              element={user ? <Diseases /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/profile" 
              element={user ? <Profile /> : <Navigate to="/login" />} 
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
