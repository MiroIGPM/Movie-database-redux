import { FETCH_SUCCES, FETCH_FAILURE, CHANGE_PAGE, GET_MOVIE, SORT } from "../actions/types";

const apiKey = "api_key=de9d1a4d941ba120c64cd7c510e686b2";

const fetchItems = (page = 1) => dispatch => { 
    fetch(`https://api.themoviedb.org/3/movie/now_playing?${apiKey}&language=en-US&page=${page}`) 
    .then(res => res.json())
    .then(data => {
      dispatch(fetchItemsSucces(data.results))
    }).catch(error => dispatch(fetchItemsFailure(error)))
  };

const fetchItem = (id) => dispatch => {
  fetch(`https://api.themoviedb.org/3/movie/${id}?${apiKey}&language&language=en-US`)
  .then(res => res.json())
  .then(data =>{
    dispatch(getMovie(data))
  }).catch(error => dispatch(fetchItemsFailure(error)))
}

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
        payload: parseInt(pageNumber)
      })
  }

  const getMovie = item => ({
    type: GET_MOVIE,
    payload: item 
  })


  const sort = items =>({
    type: SORT,
    payload: [...items]
  })



  export { fetchItems, changePage, fetchItem, sort }

