import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import './Navbar.css'
import State from '../pages/State';
import MapCharts from '../pages/MapCharts';

const Navbar = () => {
  const { logout } = useLogout();

  const handleClick = () => {
    logout();
  };

  return (
    <header>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <h1>BotanyFix</h1>
        </Link>
        <nav className="navbar-links">
          <ul>
            <li>
              <Link to="/" className="navbar-link">Test Disease</Link>
            </li>
            <li>
              <Link to="/diseases" className="navbar-link">Diseases</Link>
            </li>
            <li>
              <Link to="/profile" className="navbar-link">Profile</Link>
            </li>
            <li>
              <Link to="/india" className="navbar-link">Analysis</Link>
            </li>
            <li>
              <button onClick={handleClick} className="navbar-button" aria-label="Log out">
                Log out
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
