
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
            //    heroes: state.heroes.filter(item => item.id !== action.payload), 
                heroesLoadingStatus: 'delete'

            }
        default: return state
    }
}

export default reducer;

                /* heroes: heroes.filter( ( {id} ) => {
                    return Number(action.payload) !== Number(id)
                }) */