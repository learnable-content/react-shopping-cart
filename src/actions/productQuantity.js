import { INCREASE_QUANTITY, DECREASE_QUANTITY, CLEAR_PRODUCT } from './types';

export const productQuantity = (action, name) => {
  return (dispatch) => {
    console.log("Inside product Quantity");
    console.log("The action is ", action );
    console.log("The product name is ", name );

    dispatch({
      type: action === "increase" ? INCREASE_QUANTITY : DECREASE_QUANTITY,
      payload: name
    })
  }
}

export const clearProduct = (name) => {
  return (dispatch) => {
    console.log("Inside clear products");
    console.log("Product Name", name);

    dispatch({
      type: CLEAR_PRODUCT,
      payload: name
    })
  }
}