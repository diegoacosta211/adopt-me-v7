import { configureStore } from "@reduxjs/toolkit";
import rootReducer from './reducers';

const store = configureStore({ reducer: rootReducer, devTools: true });

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {}
export type AppDispatch = typeof store.dispatch

export default store;
