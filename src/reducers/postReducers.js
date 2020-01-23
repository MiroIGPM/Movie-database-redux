
//items - movies that come from action  (fetch request is gonna be put in action)
//item - single movie that we put when we get a response
const initialState = {
    items: [],
    item: {},
}

// function evaluates the type 
export default function(state = initialState, action){
     switch(action.type){
         case "FETCH_SUCCES":
             return {...state, items: action.payload}
         case "FETCH_FAILURE":
             return {...state, error:action.payload.error}
         default: 
            return state
     }
}