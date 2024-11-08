import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../context/user';

export const Header = () => {
  const { user } = useContext(UserContext);

  return (
    <header className="header">
      <nav>
        <Link to="/">
          <img id="logo" src="resources/images/blank-user-image.JPG" alt="blank user avatar placeholder image" />
          <h1 id="page-title">NC News</h1>
        </Link>
        <form action="search">
          <input type="text" placeholder="Search NC News" />
        </form>
        <Link to="/users/:username">
          <h2 id="username-panel">{user}</h2>
          <img id="user-avatar" src="resources/images/blank-user-image.JPG" alt="blank user avatar placeholder image" />
        </Link>
      </nav>
    </header>
  );
};
