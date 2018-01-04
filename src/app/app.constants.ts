export class AppConsts {
  public static ROOT_ROUTES = {
    ROOT: '',
    HOME: 'home',
    AUTH: 'auth',
    USER_SIGNUP: 'signup',
    MAPS: 'maps',
    MOMENTS: 'moments',
    GRAPHS: 'graphs',
    NOTIFICATIONS: 'notifications',
    MESSAGES: 'messages',
  };

  public static ROOT_ROUTE_URL = {
    ROOT: '/',
    HOME: `/${AppConsts.ROOT_ROUTES.HOME}`,
    AUTH: `/${AppConsts.ROOT_ROUTES.AUTH}`,
    USER_SIGNUP: `/${AppConsts.ROOT_ROUTES.USER_SIGNUP}`,
    MAPS: `/${AppConsts.ROOT_ROUTES.MAPS}`,
    MOMENTS: `/${AppConsts.ROOT_ROUTES.MOMENTS}`,
    GRAPHS: `/${AppConsts.ROOT_ROUTES.GRAPHS}`,
    NOTIFICATIONS: `/${AppConsts.ROOT_ROUTES.NOTIFICATIONS}`,
    MESSAGES: `/${AppConsts.ROOT_ROUTES.MESSAGES}`,
  };
}