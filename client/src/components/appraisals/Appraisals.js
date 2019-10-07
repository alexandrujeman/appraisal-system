import React, { Fragment, useContext } from "react";
import AppraisalContext from "../../context/appraisal/appraisalContext";;

const Appraisals = () => {
  const appraisalContext = useContext(AppraisalContext);

  const { appraisals } = appraisalContext;

  return (
    <Fragment>
      {appraisals.map(appraisal => (
        <h3>{appraisal.name}</h3>
      ))}
    </Fragment>
  );
};

export default Appraisals;
