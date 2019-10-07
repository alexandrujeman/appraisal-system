import React from "react";
import PropTypes from "prop-types";

const AppraisalItem = ({ appraisal }) => {
  const {
    id,
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

  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">
        {name}{" "}
        <span
          style={{ float: "right" }}
          className={
            "badge " +
            (type === "submitted" ? "badge-success" : "badge-primary")
          }
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>
      <ul className="list">
        {email && (
          <li>
            <i className="fas fa-envelope-open"></i> {email}
          </li>
        )}
        {position && (
          <li>
            <i
              style={{ fontSize: "24px" }}
              className="fas fa-angle-double-up"
            ></i>{" "}
            {position}
          </li>
        )}
      </ul>
      <p>
        <button className="btn btn-dark btn-sm">Edit</button>
        <button className="btn btn-danger btn-sm">Delete</button>
      </p>
    </div>
  );
};

AppraisalItem.propTypes = {
  appraisal: PropTypes.object.isRequired
};

export default AppraisalItem;
