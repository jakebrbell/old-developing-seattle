import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form'

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

const user = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return action.user;
    default:
      return state;
  }
};

const reducers = combineReducers({ orgs, user, form });

export default reducers;
