import {FETCH_NEWS,FETCH_RECIPE,FETCH_CATEGORY,FETCH_CATE_FOOD} from "../actions/types";
/*
   state={
      foods:{
             news:[],
            recipe:[],
            category:[],
            food:[],
            food_detail:{},
            recipe_detail:{},
            pop_food:[],
            recommand_food:[]
      }
   }
 */
const initialState={
    news:[],
    recipe:[],
    category:[],
    food:[],
    food_detail:{},
    recipe_detail:{},
    pop_food:[],
    recommand_food:[]
}
// request == state ==> state.news
/*
      react => JSP
      store => DispatcherServlet
      action => @RequestMapping , DAO
      reducer => Model(@Controller) ==>
      request => state

      JSP => DispatcherServlet => @RequestMapping => DAO => request
      React => store => action => reducer => state  ===> Redux(Front MVC)

      React => 이벤트 발생  ===> action{type:FETCH_NEWS,payload:검색된 데이터} => reducer(데이터를 받아서 state)
              ===========
              시작 => 초기값

              reducer (state가 갱신) ==> re-rendering => 화면이 변경
                                       ==============
                                            ajax

    dispatch({}

    ()=>
    (fd)=>
    fd=>

    (e)=>
    e=>
 */
export default function (state=initialState,action) {
    console.log("reducer function call...(action) 전송받음")
    switch (action.type) {
       case FETCH_NEWS:
         return {
             ...state,
             news:action.payload
         }
       case FETCH_RECIPE:
           return {
               ...state,
               recipe: action.payload
           }
        case FETCH_CATEGORY:
            return {
                ...state,
                category: action.payload
            }
        case FETCH_CATE_FOOD:
            return {
                ...state,
                food:action.payload
            }
       default:
           return state
   }
}
