import React, { Fragment, useContext } from "react";
import AppraisalItem from "./AppraisalItem";
import AppraisalContext from "../../context/appraisal/appraisalContext";

const Appraisals = () => {
  const appraisalContext = useContext(AppraisalContext);

  const { appraisals, filtered } = appraisalContext;

  if (appraisals.length === 0) {
    return <h4>Appraisal list will be displayed there</h4>;
  }

  return (
    <Fragment>
      {filtered !== null
        ? filtered.map(appraisal => (
            <AppraisalItem key={appraisal.id} appraisal={appraisal} />
          ))
        : appraisals.map(appraisal => (
            <AppraisalItem key={appraisal.id} appraisal={appraisal} />
          ))}
    </Fragment>
  );
};

export default Appraisals;
