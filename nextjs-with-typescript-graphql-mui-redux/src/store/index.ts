import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import logger from 'redux-logger';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import countSlice from '@/pages/hello/countSlice';

const reduxLogger = process.env.NODE_ENV === 'development' ? [logger] : [];

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
};

const appReducer = combineReducers({
  count: countSlice.reducer,
});

const rootReducer = (state: any, action: any) => {
  return appReducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(reduxLogger),
});

const persistor = persistStore(store);
export { persistor, store };

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
