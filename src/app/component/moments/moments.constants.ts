import { AppConsts } from '../../app.constants';

export class MomentsConsts {
  public static CHILD_ROUTES = {
    MOMENTS: 'moments',
  };
  public static ROUTE_URLS = {
    MOMENTS: `/${AppConsts.ROOT_ROUTES.MOMENTS}/${MomentsConsts.CHILD_ROUTES.MOMENTS}`,
  };
}
