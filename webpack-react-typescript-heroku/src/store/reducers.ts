import { Action } from '../types';


export const userReducer = (state: {}, action: Action) => {
  switch (action.type) {
    case 'save_user':
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
};
