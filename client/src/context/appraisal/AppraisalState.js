import React, { useReducer } from "react";
import uuid from "uuid";
import AppraisalContext from "./appraisalContext";
import appraisalReducer from "./appraisalReducer";
import {
  ADD_APPRAISAL,
  DELETE_APPRAISAL,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_APPRAISAL,
  FILTER_APPRAISALS,
  CLEAR_FILTER
} from "../types";

const AppraisalState = props => {
  const initialState = {
    appraisals: [
      {
        id: 1,
        name: "Lorem Ipsum",
        email: "loremipsum@gmail.com",
        phone: "111-111-1111",
        evalperiod: "Mid year 2019",
        position: "Team Leader",
        team: "Natus error",
        teamleader: "Cicero",
        achieved: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam",
        goals: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur",
        wishlist: "Ipsum quia dolor sit amet",
        swot: "S: W: O: T:",
        feedback: "Ipsum quia dolor sit amet",
        tlfeedback: "Ipsum quia dolor sit amet",
        type: "submitted"
      },
      {
        id: 2,
        name: "Ipsum Dolor",
        email: "ipsumdolor@gmail.com",
        phone: "222-111-1111",
        evalperiod: "Mid year 2019",
        position: "Team Member",
        team: "Natus error",
        teamleader: "Cicero",
        achieved: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam",
        goals: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur",
        wishlist: "Ipsum quia dolor sit amets",
        swot: "S: W: O: T:",
        feedback: "Ipsum quia dolor sit amet",
        tlfeedback: "Ipsum quia dolor sit amet",
        type: "draft"
      },
      {
        id: 3,
        name: "Sit Amet",
        email: "sitamet@gmail.com",
        phone: "333-111-1111",
        evalperiod: "Mid year 2019",
        position: "New Member",
        team: "Natus error",
        teamleader: "Cicero",
        achieved: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam",
        goals: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur",
        wishlist: "Ipsum quia dolor sit amet",
        swot: "S: W: O: T:",
        feedback: "Ipsum quia dolor sit amet",
        tlfeedback: "Ipsum quia dolor sit amet",
        type: "draft"
      }
    ],
    current: null,
    filtered: null
  };

  const [state, dispatch] = useReducer(appraisalReducer, initialState);

  // Add appraisal
  const addAppraisal = appraisal => {
    appraisal.id = uuid.v4();
    dispatch({ type: ADD_APPRAISAL, payload: appraisal });
  };

  // Delete appraisal
  const deleteAppraisal = id => {
    dispatch({ type: DELETE_APPRAISAL, payload: id });
  };

  // Set current appraisal
  const setCurrent = appraisal => {
    dispatch({ type: SET_CURRENT, payload: appraisal });
  };

  // Clear current appraisal
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };
  
  // Update appraisal
  const updateAppraisal = appraisal => {
    dispatch({ type: UPDATE_APPRAISAL, payload: appraisal });
  };

  // Filter appraisals

  // Clear filter

  return (
    <AppraisalContext.Provider
      value={{
        appraisals: state.appraisals,
        current: state.current,
        addAppraisal,
        deleteAppraisal,
        setCurrent,
        clearCurrent,
        updateAppraisal
      }}
    >
      {props.children}
    </AppraisalContext.Provider>
  );
};

export default AppraisalState;
