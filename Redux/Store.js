import { configureStore } from '@reduxjs/toolkit'

import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { combineReducers } from '@reduxjs/toolkit'
import GetAT from './Auth/AT';
import GetAirportsDataAPI from './Airports'

const persistConfig = {
  key: 'root',  
  version: 1,
  storage
};
const reducer = combineReducers({
  userData: GetAT,
  airportData: GetAirportsDataAPI
})
const persistedReducer = persistReducer(persistConfig , reducer)

const Store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
  }),
})

export default Store