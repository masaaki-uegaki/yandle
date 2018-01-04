import { AppConsts } from '../../app.constants';

export class LoginConsts {
  public static CHILD_ROUTES = {
    LOGIN: 'login',
    LOGOUT: 'logout',
  };
  public static ROUTE_URLS = {
    LOGIN: `/${AppConsts.ROOT_ROUTES.AUTH}/${LoginConsts.CHILD_ROUTES.LOGIN}`,
    LOGOUT: `/${AppConsts.ROOT_ROUTES.AUTH}/${LoginConsts.CHILD_ROUTES.LOGOUT}`,
  };
}