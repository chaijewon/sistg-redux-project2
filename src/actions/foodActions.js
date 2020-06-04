import {FETCH_NEWS,FETCH_RECIPE} from "./types";
import axios from 'axios'
// DAO dispatch(fetchNews('')) => action={type:FETCH_NEWS,
//         payload:news.data}
/*
     // 미들웨어는 디스패치 메서드를 함수에 인수로 보내서,
     // 함수가 직접 액션을 보낼 수 있도록 합니다.

     return function (dispatch) {

     dispatch(requestPosts(reddit));
 */
export function fetchNews(fd){

    /*
        Redux라이브러리에  디스패치 메서드를 함수에 인수로 보내서
        함수가 직접 액션을 보낼 수 있도록 합니다.

        click(funtion(){})
     */
    return function(dispatch){
        console.log("액션함수:",dispatch)
        axios.get('http://localhost:3355/news',{
            params:{
                fd:fd
            }
        }).then(news=>dispatch({
            type:FETCH_NEWS,
            payload:news.data
        }))
        // 함수가 직접 액션을 보낼 수 있도록 합니다.
    }
}
/*
export const fetchNews=(fd)=>dispatch=>{
    console.log("fetchNews Call..")
    axios.get('http://localhost:3355/news',{
        params:{
            fd:fd
        }
    }).then(news=>dispatch({
        type:FETCH_NEWS,
        payload:news.data
    }))
}*/

/*
      data.map((m)=>
        return생략
      )

      data.map(function(m){
         return (
         )
      }

      data.map((m)=>{
         return (
           
         )
      })
 */
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
