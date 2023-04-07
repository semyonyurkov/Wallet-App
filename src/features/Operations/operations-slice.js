import { createSlice } from '@reduxjs/toolkit';

export const operationsSlise = createSlice({
    name: '@@operations-slice',
    initialState: [],
    reducers: {
        addOperation: {
            reducer: (state, action) => {
                state.push(action.payload);
            },
            prepare: (reason, balance, isNegativOperation) => ({
                payload: {
                    reason: reason,
                    balance: balance,
                    isNegativOperation: isNegativOperation,
                },
            }),
        },
    },
});

export const { addOperation } = operationsSlise.actions;
export const operationReducer = operationsSlise.reducer;

export const selectOperation = (state, operations) => {
    switch (operations) {
        default:
            return state.operations;
    }
};
