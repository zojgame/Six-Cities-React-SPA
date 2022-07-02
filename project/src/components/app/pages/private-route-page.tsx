import { Navigate } from 'react-router-dom';
import { AuthorizationStatus } from '../../const';
import {RouteProps} from 'react-router-dom';
import { AppRoute } from '../../const';

type PrivateRouteProps = RouteProps & {
    authorizationStatus: AuthorizationStatus;
    children: JSX.Element;
}

function PrivateRoute(props : PrivateRouteProps):JSX.Element{
  const {authorizationStatus, children} = props;

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}

export default PrivateRoute;
