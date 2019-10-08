import {
  ADD_APPRAISAL,
  DELETE_APPRAISAL,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_APPRAISAL,
  FILTER_APPRAISALS,
  CLEAR_FILTER
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
          appraisal => appraisal.id != action.payload
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
    default:
      return state;
  }
};
