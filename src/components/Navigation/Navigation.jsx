import { NavLink } from "react-router";
import css from "./Navigation.module.css";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

export default function Navigation() {
  const dispatch = useDispatch();
  const handleLogOut = () => dispatch(logOut());

  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <ul className={css.navList}>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? clsx(css.active, css.navLink) : css.navLink
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        ({isLoggedIn} &&
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? clsx(css.active, css.navLink) : css.navLink
            }
            to="/contacts"
          >
            Contacts
          </NavLink>
        </li>
        ) (!{isLoggedIn} &&
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? clsx(css.active, css.navLink) : css.navLink
            }
            to="/login"
          >
            Log in
          </NavLink>
        </li>
        ) (!{isLoggedIn} &&
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? clsx(css.active, css.navLink) : css.navLink
            }
            to="/register"
          >
            Sign up
          </NavLink>
        </li>
        )
      </ul>
      ({isLoggedIn} &&<button onClick={handleLogOut}>Log out</button>)
    </>
  );
}
