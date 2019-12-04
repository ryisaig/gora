import axios from 'axios';
import * as URL from '../constant/URL';
import * as Config from '../constant/Config';

import { 
    LOGIN_SUCCESS,
    LOGIN_FAILED
} from '../constant/Filters';

export function login(){
    return function(dispatch){
        axios.get(URL.LOGIN)
        .then(res=>{
            const data = res.data;
            localStorage.setItem('user' , JSON.stringify(data), () => {
                dispatch({
                  type: LOGIN_SUCCESS,
                  payload: data 
                });
              });       
        }).catch(error => {
            dispatch({
                type: LOGIN_FAILED
            });
        })
    }
}


export function isAuthenticated(){
    const user = sessionStorage.getItem(Config.USER_KEY);
    return user != null;
}