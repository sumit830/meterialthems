import { DeviceActions } from '../actions/device.actions';
import { devices } from '../_models/newuser';

const INITIAL_STATE: devices = {
  list: [],  
};

export function DeviceReducer(state: devices = INITIAL_STATE, action: any): any {
  let index, active, list;

  switch (action.type) {
    case DeviceActions.DEVICE_GET:    
      return Object.assign({}, state, { list: action.payload.list });

    // case UsersActions.USERS_GET_ACTIVE:
    //   return state.active;

    // case UsersActions.USERS_DELETE:
    //   list = state.list
    //     .filter(({ id }) => id !== action.payload.id);
    //   return Object.assign({}, state, { list });

    // case UsersActions.USERS_ADD:
    //   state.list.push(action.payload.user);
    //   return state;

    // case UsersActions.USERS_UPDATE:
    //   list = [...state.list];
    //   index = list.findIndex(({ id }) => id === action.payload.user.id);
    //   list[index] = action.payload.user;
    //   return Object.assign({}, state, { list });

    // case UsersActions.USERS_SET_ACTIVE:
    //   active = state.list.find(({id}) => id === action.payload.id);
    //   return Object.assign({}, state, { active });


    // case UsersActions.USERS_RESET_ACTIVE:
    //   return Object.assign({}, state, { active: {} });

    default:
      return state;
  }
}

