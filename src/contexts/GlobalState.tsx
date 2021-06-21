import React, { createContext, Dispatch, useContext, useReducer } from 'react';

import { v5 as uuid } from 'uuid';
import { IUser } from '../types';

import { reducer } from './AppReducer';

interface IGlobalContextData {
  currentState: { users: IUser[] };
  dispatch: Dispatch<{ type: string; payload: IUser }>;

  removeUser: (id: typeof uuid) => void;
  addUser: (user: IUser) => void;
  editUser: (user: IUser) => void;
}

// Initial State
const initialState = {
  users: [
    { id: 1, name: 'User One' },
    { id: 2, name: 'User Two' },
    { id: 3, name: 'User Three' },
  ],
};

// Create Context
const GlobalState = createContext({} as IGlobalContextData);

export const GlobalContext: React.FC = ({ children }) => {
  const [currentState, dispatch] = useReducer(reducer, initialState);
  // console.log(currentState);

  // Actions
  const removeUser = (id: typeof uuid) => {
    dispatch({
      type: 'REMOVE_USER',
      payload: id,
    });
  };

  const addUser = (user: IUser) => {
    dispatch({
      type: 'ADD_USER',
      payload: user,
    });
  };

  const editUser = (user: IUser) => {
    dispatch({
      type: 'EDIT_USER',
      payload: user,
    });
  };

  return (
    <GlobalState.Provider
      value={{ currentState, dispatch, removeUser, addUser, editUser }}
    >
      {children}
    </GlobalState.Provider>
  );
};

export function useGlobalContext() {
  const context = useContext(GlobalState);
  if (!context)
    throw new Error(
      'useGlobalContext must be used within a GlobalContextProvider'
    );

  return context;
}
