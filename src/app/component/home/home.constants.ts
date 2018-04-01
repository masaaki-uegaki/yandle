import { AppConsts } from '../../app.constants';

export class HomeConsts {
  public static CHILD_ROUTES = {
    HOME: 'home',
  };
  public static ROUTE_URLS = {
    HOME: `/${AppConsts.ROOT_ROUTES.HOME}/${HomeConsts.CHILD_ROUTES.HOME}`,
  };
}
