// import { v4 as uuidv4 } from 'uuid';
import {useHttp} from '../../hooks/http.hook';
import { useDispatch } from 'react-redux';
import { heroesFetching, heroesDelete } from '../../actions';

const HeroesListItem = ({id, name, description, element}) => {

    let elementClassName;

    switch (element) {
        case 'fire':
            elementClassName = 'bg-danger bg-gradient';
            break;
        case 'water':
            elementClassName = 'bg-primary bg-gradient';
            break;
        case 'wind':
            elementClassName = 'bg-success bg-gradient';
            break;
        case 'earth':
            elementClassName = 'bg-secondary bg-gradient';
            break;
        default:
            elementClassName = 'bg-warning bg-gradient';
    }
   // console.log('HeroesListItem id, name: ', id, name);

    //const {heroes, heroesLoadingStatus} = useSelector(state => state);
    const dispatch = useDispatch();
    const {request} = useHttp();

    const onHeroesDelete = (e) => {
        dispatch(heroesFetching());
        console.log('e.currentTarget.id: ', e.currentTarget.id);
        request(`http://localhost:3001/heroes/${e.currentTarget.id}`, "DELETE")
        .then( dispatch(heroesDelete(e.currentTarget.id)))
        .catch(err => console.log(err))      
    }


    return (
        <li  tabIndex="0"
            className={`card flex-row mb-4 shadow-lg text-white ${elementClassName}`}>
            <img src="http://www.stpaulsteinbach.org/wp-content/uploads/2014/09/unknown-hero.jpg" 
                 className="img-fluid w-25 d-inline" 
                 alt="unknown hero" 
                 style={{'objectFit': 'cover'}}/>
            <div className="card-body">
                
                <h3 className="card-title">{name}</h3>
                <p className="card-text">{description}</p>
            </div>
            <span className="position-absolute top-0 start-100 translate-middle badge border rounded-pill bg-light">
                <button tabIndex="0" id={id} type="button" className="btn-close btn-close" aria-label="Close" onFocus={onHeroesDelete}></button>
            </span>
        </li>
    )
}

export default HeroesListItem;