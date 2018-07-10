import { fromJS, Map } from 'immutable';
import { combineReducers } from 'redux-immutable';

import { USER_RECEIVE } from 'console/state/action-types';

function items(state = new Map(), action) {
  switch (action.type) {
    case USER_RECEIVE:
      return state.set(action.user.id, fromJS(action.user));

    default:
      return state;
  }
}

export default combineReducers({
  items,
});
