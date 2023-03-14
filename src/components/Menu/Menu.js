import { Outlet, Link, useLocation } from 'react-router-dom';
import css from './Menu.module.css';

export const Menu = () => {
  const location = useLocation();

  return (
    <>
      <nav className={css.menu}>
        <Link to="/" className={location.pathname === '/' ? css.active : ''}>
          Home
        </Link>
        <Link
          to="/movies"
          className={location.pathname === '/movies' ? css.active : ''}
        >
          Movies
        </Link>
      </nav>
      <Outlet />
    </>
  );
};
