import {createSlice} from '@reduxjs/toolkit';

// Introduce constant for slice name
const CART_SLICE_NAME = 'cart';

// Helper function for reusability
const findItemByName = (items, name) => items.find(item => item.name === name);

export const cartSlice = createSlice({
    name: CART_SLICE_NAME,
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            const existingItem = findItemByName(state.items, action.payload.name);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({...action.payload, quantity: 1});
            }
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.name !== action.payload.name);
        },
        updateQuantity: (state, action) => {
            const item = findItemByName(state.items, action.payload.name);
            if (item) {
                item.quantity = action.payload.quantity;
            }
        },
    },
});

export const {addItem, removeItem, updateQuantity} = cartSlice.actions;
export default cartSlice.reducer;