import { Outlet, Link, useLocation } from 'react-router-dom';
import css from './Menu.module.css';

export const Menu = () => {
  const location = useLocation();

  return (
    <>
      <nav className={css.menu}>
        <Link
          to="/"
          className={location.pathname === '/' ? css.active : css.visited}
        >
          Home
        </Link>
        <Link
          to="/movies"
          className={location.pathname === '/movies' ? css.active : css.visited}
        >
          Movies
        </Link>
      </nav>
      <Outlet />
    </>
  );
};
