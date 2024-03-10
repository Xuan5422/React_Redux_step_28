
const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle',
    filters: []
};



const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'HEROES_FETCHING':
            return {
                ...state,
                heroesLoadingStatus: 'loading'
            }
        case 'HEROES_FETCHED':
            return {
                ...state,
                heroes: action.payload,
                heroesLoadingStatus: 'idle'
            }
        case 'HEROES_FETCHING_ERROR':
            return {
                ...state,
                heroesLoadingStatus: 'error'
            }
        case 'HEROES_DELETE':

            return {
                ...state,
                heroes: state.heroes.filter(item => {
                    return item.id !== action.payload}), 
                heroesLoadingStatus: 'idle'

            }
        case 'HEROES_ADD':
            console.log("HEROES_ADD");
            console.log("action.payload: ", action.payload );
            let item = [...state.heroes, action.payload]
            return {
                ...state,
                heroes: item, 
                heroesLoadingStatus: 'add'

            }
        default: return state
    }
}

export default reducer;
