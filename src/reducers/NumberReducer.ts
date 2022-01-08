import {NumberState, NumberAction} from "../types/NumberTypesAndInterfaces";

  
  const initialState = {
    number: 0,
  };
  
  
  export const numberReducer = (
    state: NumberState = initialState,
    action: NumberAction
  ): NumberState => {
    
    switch (action.type) {
     
      case "ADD_NUMBER": 
        return {...state, number: state.number+1};
      default:
        return state;
    }
  };