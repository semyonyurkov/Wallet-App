import { configureStore } from '@reduxjs/toolkit';
import { balanceReducer } from './features/Balance/balance-slice';
import { operationReducer } from './features/Operations/operations-slice';

export const store = configureStore({
    reducer: {
        balance: balanceReducer,
        operations: operationReducer,
    },
    devTools: true,
});
