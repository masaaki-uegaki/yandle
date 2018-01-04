import { AppConsts } from '../../app.constants';

export class UserSignupConsts {
  public static CHILD_ROUTES = {
    USER_SIGNUP: 'signup',
  };
  public static ROUTE_URLS = {
    USER_SIGNUP: `/${AppConsts.ROOT_ROUTES.USER_SIGNUP}/${UserSignupConsts.CHILD_ROUTES.USER_SIGNUP}`,
  };
}