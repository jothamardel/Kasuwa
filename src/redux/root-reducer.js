import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import persistStore from 'redux-persist/lib/storage/session';
import userReducer from './user/user.reducer';
import modalReducer from './modal/modal.reducer';

const persistConfig = {
  key: 'root',
  storage: persistStore,
  whitelist: ['user', 'modal']
}

const rootReducer = combineReducers({
  user: userReducer,
  modal: modalReducer
});

export default persistReducer(persistConfig, rootReducer);