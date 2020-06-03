import {combineReducers} from "redux";
/*
      FoodReducer
      RecipeReducer
      NewsReducer
 */
import foodReducer from "./foodReducer";
export default combineReducers({
    foods:foodReducer
})