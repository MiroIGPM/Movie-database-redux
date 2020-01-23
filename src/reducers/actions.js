import { FETCH_SUCCES, FETCH_FAILURE } from "../actions/types";

const fetchItems = (page = 0) => dispatch => { 
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=de9d1a4d941ba120c64cd7c510e686b2&language=en-US&page=${page}`) 
    .then(res => res.json())
    .then(data => {
      console.log('RES', data.results)
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

  export { fetchItems }