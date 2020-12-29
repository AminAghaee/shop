import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_PAYMENT_METHOD,
} from "../constants/cartConstants";
import { CART_SAVE_SHIPPING_ADDRESS } from "./../constants/cartConstants";

export const cartReducer = (
  state = { cartItems: [], shippingAddress: {} },
  action
) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.product === item.product);

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }

    case CART_REMOVE_ITEM:
      const product = action.payload.product;
      const cartItems = state.cartItems.filter((item) => {
        return item.product !== product;
      });
      return {
        ...state,
        cartItems: [...cartItems],
      };

    case CART_SAVE_SHIPPING_ADDRESS:
      const shippingAddress = action.payload;
      return {
        ...state,
        shippingAddress,
      };

    case CART_SAVE_PAYMENT_METHOD:
      const paymentMethod = action.payload;
      return {
        ...state,
        paymentMethod,
      };

    default:
      return state;
  }
};
