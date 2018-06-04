import { combineReducers } from 'redux';

import { UsersReducer } from './users.reducer';
import { DeviceReducer } from './device.reducer';
import { Users,devices } from '../_models/newuser';

export class IAppState {
  users: Users;
  devices:devices
};

export const rootReducer = combineReducers<IAppState>({
  users: UsersReducer,devices:DeviceReducer
});


