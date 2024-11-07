import { Link } from 'react-router-dom';

export const Header = () => {
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
          <h2 id="username-panel">Username Here</h2>
          <img id="user-avatar" src="resources/images/blank-user-image.JPG" alt="blank user avatar placeholder image" />
        </Link>
      </nav>
    </header>
  );
};
