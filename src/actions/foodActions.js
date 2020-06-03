import {FETCH_NEWS,FETCH_RECIPE} from "./types";
import axios from 'axios'
// DAO dispatch(fetchNews('')) => action={type:FETCH_NEWS,
//         payload:news.data}
export const fetchNews=(fd)=>dispatch=>{
    axios.get('http://localhost:3355/news',{
        params:{
            fd:fd
        }
    }).then(news=>dispatch({
        type:FETCH_NEWS,
        payload:news.data
    }))
}

export const fetchRecipe=(page)=>dispatch=>{
    axios.get('http://localhost:3355/recipe',{
        params:{
            page:page
        }
    }).then(recipes=>dispatch({
        type:FETCH_RECIPE,
        payload:recipes.data
    }))
}
// ==> dispatch({type,payload})=> function(state,action)
// action={type,payload}
