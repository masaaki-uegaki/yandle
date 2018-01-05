import { AppConsts } from '../../app.constants';

export class GraphsConsts {
  public static CHILD_ROUTES = {
    GRAPHS: 'graphs',
  };
  public static ROUTE_URLS = {
    GRAPHS: `/${AppConsts.ROOT_ROUTES.GRAPHS}/${GraphsConsts.CHILD_ROUTES.GRAPHS}`,
  };
}