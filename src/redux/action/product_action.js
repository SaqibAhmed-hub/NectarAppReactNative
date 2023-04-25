
export const SET_PRODUCT_DETAILS = 'SET_PRODUCT_DETAILS';
export const SET_LOGIN = "SET_LOGIN";


 export const getproductDetails = (product) = dispatch => {
      return dispatch({
            type: SET_PRODUCT_DETAILS,
            payload: product
        })
 }