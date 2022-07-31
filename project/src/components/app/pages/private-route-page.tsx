import {RouteProps} from 'react-router-dom';
import {store} from '../../../store';
import {checkAuthStatus} from '../../../store/api-actions';

type PrivateRouteProps = RouteProps & {
    children: JSX.Element;
}

function PrivateRoute(props : PrivateRouteProps):JSX.Element{
  const {children} = props;
  store.dispatch(checkAuthStatus());
  return children;
}

export default PrivateRoute;
