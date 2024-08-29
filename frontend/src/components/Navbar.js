import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import './Navbar.css'

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
              <Link to="/profile" className="navbar-link">Profile</Link>
            </li>
            <li>
              <Link to="/blogs" className="navbar-link">Blogs</Link>
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
