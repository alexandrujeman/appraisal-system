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
        name: "Silvia Antoni",
        email: "silvica@gmail.com",
        phone: "111-111-1111",
        evalperiod: "Mid year 2019",
        position: "Data Processor",
        team: "US-Subteam-1",
        teamleader: "Elena Puscas",
        achieved: "Left this job",
        goals: "Get a calligraphy course",
        wishlist: "Pens",
        swot: "S: W: O: T:",
        feedback: "oh stop it",
        tlfeedback: "wants in day shift",
        type: "personal"
      },
      {
        id: 1,
        name: "Inga Tepleacov",
        email: "ingat@gmail.com",
        phone: "222-111-1111",
        evalperiod: "Mid year 2019",
        position: "Team Leader",
        team: "US-Subteam-2",
        teamleader: "Elena Puscas",
        achieved: "Left this job",
        goals: "Get a calligraphy course",
        wishlist: "Pens",
        swot: "S: W: O: T:",
        feedback: "oh stop it",
        tlfeedback: "wants in day shift",
        type: "personal"
      },
      {
        id: 1,
        name: "Dasha Slivka",
        email: "dashka@gmail.com",
        phone: "333-111-1111",
        evalperiod: "Mid year 2019",
        position: "Data Processor",
        team: "EU-Exxon Team",
        teamleader: "Elena Puscas",
        achieved: "She is amazing",
        goals: "Lorem ipsum",
        wishlist: "Pens",
        swot: "S: W: O: T:",
        feedback: "oh stop it",
        tlfeedback: "wants in day shift",
        type: "personal"
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
