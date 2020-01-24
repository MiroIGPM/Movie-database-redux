import { FETCH_SUCCES, FETCH_FAILURE, CHANGE_PAGE } from "../actions/types";
import {initialState} from './pageReducers';

let page = initialState.page

const fetchItems = () => dispatch => { 
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=de9d1a4d941ba120c64cd7c510e686b2&language=en-US&page=${page}`) 
    .then(res => res.json())
    .then(data => {
      dispatch(fetchItemsSucces(data.results))
    }).catch(error => dispatch(fetchItemsFailure(error)))
  };



  const fetchItemsSucces = items => ({
    type: FETCH_SUCCES,
    payload: [...items]
  });

  const fetchItemsFailure = error => ({
    type: FETCH_FAILURE,
    payload: {error}
  });

  const changePage = () => {
    return{
    type: CHANGE_PAGE,
    payload: {}
    }
  };

  export { fetchItems, changePage }

