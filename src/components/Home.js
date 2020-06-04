import React,{useEffect} from "react";
import {useDispatch,useSelector} from "react-redux";
import {FETCH_CATEGORY} from "../actions/types";
import axios from 'axios'
import {NavLink} from "react-router-dom";
/*
    useDispatch => 데이터 요청
    useSelector => 요청한 데이터 얻기

    class Home extends Component{
       state={}             ===> useState
       componentWillMount()  ===> 기능  ==> useEffect()
       {

       }
       render()
       {
       }
    }
 */
export default function Home(props) {
    const dispatch=useDispatch(); // reducer를 연결 => action=> {type,payload}
    useEffect(()=>{
       axios.get('http://localhost:3355/category')
           .then((result)=>{
               dispatch({
                   type:FETCH_CATEGORY,
                   payload:result.data
               }) //=> export default function (state=initialState,action)
           })
    },[]) // componentWillMount
    /*
          state=> store에 저장된 state
          useSelector((state)=>
             state.foods.category
          );

          useSelector((state)=>{
             return state.foods.category
          });

         <div class="col-md-4">
         <div class="thumbnail">
      <a href="/w3images/lights.jpg">
        <img src="/w3images/lights.jpg" alt="Lights" style="width:100%">
        <div class="caption">
          <p>Lorem ipsum...</p>
        </div>
      </a>
    </div>
  </div>
     */
    const cate_data=useSelector(state=>state.foods.category)
    const html=cate_data.map((m)=>
        <div className="col-md-3">
            <div className="panel panel-danger">
                <div className="panel-heading">{m.title}
                  <br/>
                  <sub>{m.subject}</sub>
                </div>
                <div className="panel-body">
                    <div className="thumbnail">
                        <NavLink to={"/cate_food/"+m.cateno}>
                          <img src={m.poster} alt="Lights" style={{"width":"100%"}}/>
                        </NavLink>
                    </div>
               </div>
            </div>
        </div>
    )
   return (
       <div className={"row"}>
           <h1>믿고 보는 맛집 리스트</h1>
           {html}
       </div>
   )
}