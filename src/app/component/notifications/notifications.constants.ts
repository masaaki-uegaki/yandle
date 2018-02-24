import { AppConsts } from '../../app.constants';

export class NotificationsConsts {
  public static CHILD_ROUTES = {
    NOTIFICATIONS: 'notifications',
  };
  public static ROUTE_URLS = {
    NOTIFICATIONS: `/${AppConsts.ROOT_ROUTES.NOTIFICATIONS}/${NotificationsConsts.CHILD_ROUTES.NOTIFICATIONS}`,
  };
}
