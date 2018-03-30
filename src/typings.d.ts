import { Moment } from 'moment';

/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

declare global {
  interface IAuthUser {
    email: string;
    password: string;
  }

  interface IChat {
    id: number;
    uid: string;
    message: string;
    createdAt: string | Moment;
  }

  interface ILocation {
    lat: number;
    lng: number;
  }

  interface IUser {
    uid: string;
    email: string;
    displayName?: string;
    photoURL?: string;
    profile?: string;
  }

  interface IYell {
    id: number;
    uid: string;
    userName: string;
    message: string;
    location: ILocation;
    createdAt: string | Moment;
  }
}
