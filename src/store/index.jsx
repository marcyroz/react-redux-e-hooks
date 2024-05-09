import { configureStore } from '@reduxjs/toolkit';
import reducer from './modules/Cart/reducer';

const store = configureStore({reducer: reducer});

export default store;
