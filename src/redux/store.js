import { configureStore } from '@reduxjs/toolkit';
// import { persistedReducer } from './slice';
import filterReducer from './filterSlice';
import contactsReducer from './slice';
// import {
//   persistStore,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
  // middleware(getDefaultMiddleware) {
  //   return getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   });
  // },
});

// export const persistor = persistStore(store);
