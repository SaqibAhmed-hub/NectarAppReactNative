export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_REMOVE = "SIGNUP_REMOVE";
import { BASE_URL } from "../../utils/contants";


export const getSignUpAction = (data) => {
    try {
        return async dispatch => {
            console.log(data);
            let result = await fetch(
                BASE_URL.local_url + 'register',
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data),
                }
            )
            let response = await result.json();
            console.log(response);
            if(response){
                dispatch({
                    type : SIGNUP_SUCCESS,
                    payload : response
                })
            }else{
                console.log('unable to fetch!');
            }
        }
    } catch (error) {
        console.log(error);
    }
}

export function clearSignUpState(){
    return {
        type: SIGNUP_REMOVE,
        payload : undefined
    }
}