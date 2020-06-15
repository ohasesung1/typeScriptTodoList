import { combineReducers } from 'redux';
import counter from './counter';
import { type } from 'os';

const rootReducer = combineReducers({
  counter
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>
