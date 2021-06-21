// import { v5 as uuid } from 'uuid';

export interface IUser {
  id: any;
  name: string;
}

export interface IParams {
  id: any;
}

export interface IState {
  users: IUser[];
}

export interface IAction {
  type: string;
  payload: any;
}

export enum ActionTypes {
  REMOVE_USER = 'REMOVE_USER',
  ADD_USER = 'ADD_USER',
  EDIT_USER = 'EDIT_USER',
}
