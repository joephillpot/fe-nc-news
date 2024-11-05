import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="header">
      <nav>
        <Link to="/">
          <img src="resources/images/blank-user-image.JPG" alt="blank user avatar placeholder image" />
          <h2>NC News</h2>
        </Link>
        <form action="search">
          <input type="text" placeholder="Search NC News" />
        </form>
        <Link to="/users/:username">
          <h2>Username Here</h2>
          <img src="resources/images/blank-user-image.JPG" alt="blank user avatar placeholder image" />
        </Link>
      </nav>
    </header>
  );
};
