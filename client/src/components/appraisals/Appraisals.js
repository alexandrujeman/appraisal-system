import React, { Fragment, useContext } from "react";
import AppraisalItem from "./AppraisalItem";
import AppraisalContext from "../../context/appraisal/appraisalContext";

const Appraisals = () => {
  const appraisalContext = useContext(AppraisalContext);

  const { appraisals } = appraisalContext;

  return (
    <Fragment>
      {appraisals.map(appraisal => (
        <AppraisalItem key={appraisal.id} appraisal={appraisal} />
      ))}
    </Fragment>
  );
};

export default Appraisals;
