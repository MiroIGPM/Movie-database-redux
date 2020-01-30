
//items - movies that come from action  (fetch request is gonna be put in action)
//item - single movie that we put when we get a response
const initialState = {
    items: [],
    item: {},
    page: 1,
    id: "" 
}



// function evaluates the type 
export default function(state = initialState, action){
     switch(action.type){
         case "FETCH_SUCCES":
             return {...state, items: action.payload}
         case "FETCH_FAILURE":
             return {...state, error:action.payload.error}
        case "CHANGE_PAGE":
             return {...state, page: action.payload }
        case "CHANGE_ID":
            return{...state, id: action.payload}     
        case "GET_MOVIE":
            return {...state, item: action.payload}                 
         default: 
            return state
     }
}


