import { AppConsts } from '../../app.constants';

export class MapsConsts {
  public static CHILD_ROUTES = {
    MAPS: 'maps',
  };
  public static ROUTE_URLS = {
    MAPS: `/${AppConsts.ROOT_ROUTES.MAPS}/${MapsConsts.CHILD_ROUTES.MAPS}`,
  };
}