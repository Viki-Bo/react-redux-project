import { combineReducers } from "redux";
import gamesReducer from "./gamesReduser";

const rootReducer = combineReducers({
    games: gamesReducer,
});

export default rootReducer;