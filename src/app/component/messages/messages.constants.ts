import { AppConsts } from '../../app.constants';

export class MessagesConsts {
  public static CHILD_ROUTES = {
    MESSAGES: 'messages',
  };
  public static ROUTE_URLS = {
    MESSAGES: `/${AppConsts.ROOT_ROUTES.MESSAGES}/${MessagesConsts.CHILD_ROUTES.MESSAGES}`,
  };
}