import React, { useState, useContext, useEffect } from "react";
import AppraisalContext from "../../context/appraisal/appraisalContext";

const AppraisalForm = () => {
  const appraisalContext = useContext(AppraisalContext);

  const {
    addAppraisal,
    updateAppraisalAdmin,
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
    name,
    email,
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

  const onChange = e =>
    setAppraisal({ ...appraisal, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (current === null) {
      addAppraisal(appraisal);
    } else {
      updateAppraisalAdmin(appraisal);
    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>{current ? "Edit Feedback" : "View Appraisal"}</h2>
      <h5>node: Admin role users can only edit <a href="#tlfeedback">Teamleader Feedback</a> field</h5>
      {/*Bio*/}
      <div className="grid-bio">
      <div>
      <h4>Name</h4>
      <h4 className="text-primary">{name}</h4>
      </div>
      <div>
      <h4>Email</h4>
      <h4 className="text-primary">{email}</h4>
      </div>
      </div>

      <h4>Evaluation Period</h4>
      {/* Evaluation Period */}
      <input
        type="text"
        placeholder=""
        name="evalperiod"
        value={evalperiod}
        readOnly
      />
      <h4>Your Position</h4>
      {/* Position */}
      <input
        type="text"
        placeholder=""
        name="position"
        value={position}
        readOnly
      />
      <h4>Your Team</h4>
      {/* Team */}
      <input
        type="text"
        placeholder=""
        name="team"
        value={team}
        readOnly
      />
      <h4>Who is your Team Leader?</h4>
      {/* Teamleader */}
      <input
        type="text"
        placeholder=""
        name="teamleader"
        value={teamleader}
        readOnly
      />
      <h4>Objectives/tasks achieved</h4>
      {/* Achieved */}
      <textarea
        placeholder=""
        name="achieved"
        value={achieved}
        readOnly
      />
      <h4>Objectives/tasks still to be accomplished</h4>
      {/* Goals */}
      <textarea placeholder="" name="goals" value={goals} readOnly />
      <h4>Wish-list of Trainings/ Activities to accomplish</h4>
      {/* Wishlist */}
      <textarea
        placeholder=""
        name="wishlist"
        value={wishlist}
        readOnly
      />
      <h4>Individual SWOT analysis</h4>
      {/* Swot */}
      <textarea
        placeholder=""
        name="swot"
        value={swot}
        readOnly
      />
      <h4>Feedback and proposals</h4>
      {/* Feedback */}
      <textarea
        placeholder=""
        name="feedback"
        value={feedback}
        readOnly
      />
      <h4>Teamleader Feedback</h4>
      {/* Teamleader Feedback */}
      <textarea
        placeholder=""
        name="tlfeedback"
        id="tlfeedback"
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
        readOnly
      />{" "}
      Draft{" "}
      <input
        type="radio"
        name="type"
        value="submitted"
        checked={type === "submitted"}
        readOnly
      />{" "}
      Submitted{" "}
      <input type="submit" value={current ? "Update" : "Save new"} className="btn btn-primary btn-block" />
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
