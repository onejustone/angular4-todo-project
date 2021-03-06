/**
 * Created by onejustone on 2017/5/25.
 */
export interface Todo {
  id?: string;
  desc: string;
  completed: boolean;
  userId?: number;
}

export interface User {
  id?: number;
  username: string;
  password: string;
}

export interface Auth {
  user?: User;
  hasError: boolean;
  errMsg: string;
  loading: boolean;
  redirectUrl?: string;
}

export interface Image {
  contentUrl: string;
  name: string;
}
