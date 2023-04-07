import { createSlice } from '@reduxjs/toolkit';

export const balanceSlice = createSlice({
    name: '@@balance-slice',
    initialState: 0,
    reducers: {
        changeBalance: (state, action) => state + action.payload,
    },
});

export const { changeBalance } = balanceSlice.actions;
export const balanceReducer = balanceSlice.reducer;

//selector

export const selectBalance = (state, balance) => {
    switch (balance) {
        default:
            return state.balance;
    }
};
