import { Moment } from 'moment';

/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

interface AuthUser {
  email: string;
  password: string;
}

interface Chat {
  id: number;
  uid: string;
  message: string;
  createdAt: string | Moment;
}

interface Location {
  lat: number;
  lng: number;
}

interface User {
  uid: string;
  email: string;
  displayName?: string;
  photoURL?: string;
  profile?: string;
}

interface Yell {
  id: number;
  uid: string;
  userName: string;
  message: string;
  location: Location;
  createdAt: string | Moment;
}
