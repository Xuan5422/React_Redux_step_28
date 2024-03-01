
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
           // console.log('reduser - улаляем героя: ', action.payload);

            return {
                ...state,
                heroes: state.heroes.filter(item => {
                    console.log('item.id- ', item.id, 'action.payload- ', action.payload);
                    return item.id != action.payload}), 
                heroesLoadingStatus: 'idle'

            }
        default: return state
    }
}

export default reducer;

                /* heroes: heroes.filter( ( {id} ) => {
                    return Number(action.payload) !== Number(id)
                }) */