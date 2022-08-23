import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { getAuthorizationStatus } from '../../../store/user/selectors';
import { AuthorizationStatus } from '../../const';
import { AppRoute } from '../../const';
import { setAnimationLoading, logoutAction } from '../../../store/api-actions';
import { getEmail } from '../../../store/user/selectors';
import { checkAuthStatus } from '../../../store/api-actions';

export function LoginHeaderComponent():JSX.Element{
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isAuth = authorizationStatus === AuthorizationStatus.Auth;
  const dispatch = useAppDispatch();
  dispatch(checkAuthStatus());
  const navigate = useNavigate();
  const email = useAppSelector(getEmail);

  const handleLogin = (evt: React.MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    navigate(AppRoute.Login);
  };

  const handleLogOut = (evt: React.MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    dispatch(setAnimationLoading());
    dispatch(logoutAction());
  };

  const authHeader = isAuth ? (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <a className="header__nav-link header__nav-link--profile" href="http://localhost:3000">
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>
            <span className="header__user-name user__name">{email}</span>
          </a>
        </li>
        <li className="header__nav-item">
          <a className="header__nav-link" href="/" onClick={handleLogOut}>
            <span className="header__signout">Sign out</span>
          </a>
        </li>
      </ul>
    </nav>)
    : (
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <a className="header__nav-link" href="/" onClick={ handleLogin }>
              <div className="header__avatar-wrapper user__avatar-wrapper">
              </div>
              <span className="header__signout">Login</span>
            </a>
          </li>
        </ul>
      </nav>
    );

  return authHeader;
}
