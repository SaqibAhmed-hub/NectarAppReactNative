export const SET_LOGIN = "SET_LOGIN";
import { BASE_URL } from "../../utils/contants";


 export const setLogin = (data) => {
    try {
        return async dispatch =>{
            console.log(data);
            let result = await fetch(
                BASE_URL.local_url + 'login',
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
                    type : SET_LOGIN,
                    payload: response
                })
            }else{
                console.log('unable to fetch!');
            }
        }
    } catch (error) {
        console.log(error);
    }
 }

