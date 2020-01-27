import { FETCH_SUCCES, FETCH_FAILURE, CHANGE_PAGE } from "../actions/types";


const apiKey = "api_key=de9d1a4d941ba120c64cd7c510e686b2";

const fetchItems = (page = 1) => dispatch => { 
    fetch(`https://api.themoviedb.org/3/movie/top_rated?${apiKey}&language=en-US&page=${page}`) 
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

 
  const changePage = pageNumber => dispatch => {
      dispatch({
        type: CHANGE_PAGE,
        payload: pageNumber
      })
  }

  export { fetchItems, changePage }

