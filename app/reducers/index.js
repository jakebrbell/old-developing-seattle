import { combineReducers } from 'redux';

const orgs = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ORG':
      return [];
    case 'RECEIVE_ORGS':
      return action.response;
    default:
      return state;
  }
};

const user = (state, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return {
        firstName: action.firstName
      };
    default:
      return state;
  }
};

const users = (state = [], action) => {
  switch (action.type) {
    case 'ADD_USER':
      return [
        ...state,
        user(undefined, action)
      ];
    default:
      return state;
  }
};

const reducers = combineReducers({ orgs, users });

export default reducers;
