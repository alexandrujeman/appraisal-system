import React, { useState, useContext, useEffect } from "react";
import AppraisalContext from "../../context/appraisal/appraisalContext";
import AuthContext from "../../context/auth/authContext";

const AppraisalForm = () => {
  const authContext = useContext(AuthContext);
  const appraisalContext = useContext(AppraisalContext);

  const { user } = authContext;

  const {
    addAppraisal,
    updateAppraisal,
    current,
    clearCurrent
  } = appraisalContext;

  useEffect(() => {
    if (current !== null) {
      setAppraisal(current);
    } else {
      setAppraisal({
        name: "",
        email: "",
        evalperiod: "",
        position: "",
        team: "",
        teamleader: "",
        achieved: "",
        goals: "",
        wishlist: "",
        swot: "",
        feedback: "",
        tlfeedback: "",
        type: "draft"
      });
    }
  }, [appraisalContext, current]);

  const [appraisal, setAppraisal] = useState({
    name: "",
    email: "",
    evalperiod: "",
    position: "",
    team: "",
    teamleader: "",
    achieved: "",
    goals: "",
    wishlist: "",
    swot: "",
    feedback: "",
    tlfeedback: "",
    type: "draft"
  });

  const {
    evalperiod,
    position,
    team,
    teamleader,
    achieved,
    goals,
    wishlist,
    swot,
    feedback,
    tlfeedback,
    type
  } = appraisal;

  const onChange = e => {
    setAppraisal({
      ...appraisal,
      [e.target.name]: e.target.value,
      // eslint-disable-next-line
      ["name"]: String(user && user.name),
      // eslint-disable-next-line
      ["email"]: String(user && user.email)

    });
  };

  const onSubmit = e => {
    e.preventDefault();
    if (current === null) {
      addAppraisal(appraisal);
    } else {
      updateAppraisal(appraisal);
    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>{current ? "Edit Appraisal" : "Add Appraisal"}</h2>
      <h4>Name</h4>
      {user && user.name}
      <h4>Evaluation Period</h4>
      {/* Evaluation Period */}
      <input
        type="text"
        placeholder=""
        name="evalperiod"
        value={evalperiod}
        onChange={onChange}
      />
      <h4>Your Position</h4>
      {/* Position */}
      <input
        type="text"
        placeholder=""
        name="position"
        value={position}
        onChange={onChange}
      />
      <h4>Your Team</h4>
      {/* Team */}
      <input
        type="text"
        placeholder=""
        name="team"
        value={team}
        onChange={onChange}
      />
      <h4>Who is your Team Leader?</h4>
      {/* Teamleader */}
      <input
        type="text"
        placeholder=""
        name="teamleader"
        value={teamleader}
        onChange={onChange}
      />
      <h4>Objectives/tasks achieved</h4>
      {/* Achieved */}
      <textarea
        placeholder=""
        name="achieved"
        value={achieved}
        onChange={onChange}
      />
      <h4>Objectives/tasks still to be accomplished</h4>
      {/* Goals */}
      <textarea placeholder="" name="goals" value={goals} onChange={onChange} />
      <h4>Wish-list of Trainings/ Activities to accomplish</h4>
      {/* Wishlist */}
      <textarea
        placeholder=""
        name="wishlist"
        value={wishlist}
        onChange={onChange}
      />
      <h4>Individual SWOT analysis</h4>
      {/* Swot */}
      <textarea
        placeholder="SWOT(strengths, weaknesses, opportunities, and threats)"
        name="swot"
        value={swot}
        onChange={onChange}
      />
      <h4>Feedback and proposals</h4>
      {/* Feedback */}
      <textarea
        placeholder=""
        name="feedback"
        value={feedback}
        onChange={onChange}
      />
      <h4>Teamleader Feedback</h4>
      {/* Teamleader Feedback */}
      <textarea
        placeholder=""
        name="tlfeedback"
        value={tlfeedback}
        onChange={onChange}
      />
      {/* Status */}
      <h5>Status</h5>
      <input
        type="radio"
        name="type"
        value="draft"
        checked={type === "draft"}
        onChange={onChange}
      />{" "}
      Draft{" "}
      <input
        type="radio"
        name="type"
        value="submitted"
        checked={type === "submitted"}
        onChange={onChange}
      />{" "}
      Submitted{" "}
      <input
        type="submit"
        value={current ? "Update" : "Save new"}
        className="btn btn-primary btn-block"
      />
      {current && (
        <div>
          <button className="btn btn-light btn-block" onClick={clearAll}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

export default AppraisalForm;
