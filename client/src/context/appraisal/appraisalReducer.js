import {
  ADD_APPRAISAL,
  DELETE_APPRAISAL,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_APPRAISAL,
  FILTER_APPRAISALS,
  CLEAR_FILTER,
  APPRAISAL_ERROR
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case ADD_APPRAISAL:
      return {
        ...state,
        appraisals: [...state.appraisals, action.payload]
      };
    case UPDATE_APPRAISAL:
      return {
        ...state,
        appraisals: state.appraisals.map(appraisal =>
          appraisal.id === action.payload.id ? action.payload : appraisal
        )
      };
    case DELETE_APPRAISAL:
      return {
        ...state,
        appraisals: state.appraisals.filter(
          appraisal => appraisal.id !== action.payload
        )
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      };
    case FILTER_APPRAISALS:
      return {
        ...state,
        filtered: state.appraisals.filter(appraisal => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return appraisal.name.match(regex) || appraisal.email.match(regex);
        })
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null
      };
    case APPRAISAL_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
