
//items - movies that come from action  (fetch request is gonna be put in action)
//item - single movie that we put when we get a response
const initialState = {
    items: [],
    item: {},
    page: 1 
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
         default: 
            return state
     }
}


