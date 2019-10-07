import React, { useState, useContext } from "react";
import AppraisalContext from "../../context/appraisal/appraisalContext";

const AppraisalForm = () => {
  const appraisalContext = useContext(AppraisalContext);

  const [appraisal, setAppraisal] = useState({
    name: "",
    email: "",
    phone: "",
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
    phone,
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
    appraisalContext.addAppraisal(appraisal);
    setAppraisal({
      name: "",
      email: "",
      phone: "",
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
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>Add Appraisal</h2>
      {/* Name */}
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={name}
        onChange={onChange}
      />
      {/* Email */}
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={email}
        onChange={onChange}
      />
      {/* Phone */}
      <input
        type="text"
        placeholder="Phone"
        name="phone"
        value={phone}
        onChange={onChange}
      />
      <h4>Evaluation Period</h4>
      {/* Evaluation Period */}
      <input
        type="text"
        placeholder="Evaluation Period"
        name="evalperiod"
        value={evalperiod}
        onChange={onChange}
      />
      <h4>Your Position</h4>
      {/* Position */}
      <input
        type="text"
        placeholder="Position"
        name="position"
        value={position}
        onChange={onChange}
      />
      <h4>Your Team</h4>
      {/* Team */}
      <input
        type="text"
        placeholder="Team"
        name="team"
        value={team}
        onChange={onChange}
      />
      <h4>Who is your Team Leader?</h4>
      {/* Teamleader */}
      <input
        type="text"
        placeholder="Teamleader"
        name="teamleader"
        value={teamleader}
        onChange={onChange}
      />
      <h4>Objectives/tasks achieved</h4>
      {/* Achieved */}
      <input
        type="text"
        placeholder="Objectives/tasks achieved"
        name="achieved"
        value={achieved}
        onChange={onChange}
      />
      <h4>Objectives/tasks still to be accomplished</h4>
      {/* Goals */}
      <input
        type="text"
        placeholder="Objectives/tasks still to be accomplished"
        name="goals"
        value={goals}
        onChange={onChange}
      />
      <h4>Wish-list of Trainings/ Activities to accomplish</h4>
      {/* Wishlist */}
      <input
        type="text"
        placeholder="Wish-list of Trainings/ Activities to accomplish"
        name="wishlist"
        value={wishlist}
        onChange={onChange}
      />
      <h4>Individual SWOT analysis</h4>
      {/* Swot */}
      <input
        type="text"
        placeholder="SWOT(strengths, weaknesses, opportunities, and threats)"
        name="swot"
        value={swot}
        onChange={onChange}
      />
      <h4>Feedback and proposals</h4>
      {/* Feedback */}
      <input
        type="textarea"
        placeholder="Feedback"
        name="feedback"
        value={feedback}
        onChange={onChange}
      />
      <h4>Teamleader Feedback</h4>
      {/* Teamleader Feedback */}
      <input
        type="textarea"
        placeholder="Teamleader Feedback"
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
      <input type="submit" value="Save" className="btn btn-primary btn-block" />
    </form>
  );
};

export default AppraisalForm;
