import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartState {
    itemsInCart: any[];
}

const initialState: CartState = {
  itemsInCart: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
      setItemInCart: (state, action: PayloadAction<any>) => {
        state.itemsInCart.push(action.payload);
      },
      deleteItemFromCart: (state, action: PayloadAction<number>) => {
        state.itemsInCart = state.itemsInCart.filter(game => game.id !== action.payload);
      },
    },
  });
  
export const { setItemInCart, deleteItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;