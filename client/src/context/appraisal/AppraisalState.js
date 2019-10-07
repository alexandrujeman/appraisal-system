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
    ]
  };

  const [state, dispatch] = useReducer(appraisalReducer, initialState);

  // Add appraisal

  // Delete appraisal

  // Set current appraisal

  // Clear current appraisal

  // Update appraisal

  // Filter appraisals

  // Clear filter

  return (
    <AppraisalContext.Provider
      value={{
        appraisals: state.appraisals
      }}
    >
      {props.children}
    </AppraisalContext.Provider>
  );
};

export default AppraisalState;
