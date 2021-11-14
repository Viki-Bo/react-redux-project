const initState = {
    popular: [],
    newGames: [],
    upcoming: [],
    searched: [],
};

const gamesReduser = (state=initState,action) => {
    switch(action.type){
        case "FETCH_GAMES":
            return {...state, popular: action.payload.popular };
        default:
            return {...state};
    }
};

export default gamesReduser;