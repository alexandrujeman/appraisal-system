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
    case DELETE_APPRAISAL:
      return {
        ...state,
        appraisals: state.appraisals.filter(appraisal => appraisal.id != action.payload)
      }
    default:
      return state;
  }
};
