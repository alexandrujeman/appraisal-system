import React, { Fragment, useContext } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
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
      <TransitionGroup>
        {filtered !== null
          ? filtered.map(appraisal => (
              <CSSTransition key={appraisal._id} timeout={500} classNames="item">
                <AppraisalItem key={appraisal.id} appraisal={appraisal} />
              </CSSTransition>
            ))
          : appraisals.map(appraisal => (
              <CSSTransition key={appraisal._id} timeout={500} classNames="item">
                <AppraisalItem appraisal={appraisal} />
              </CSSTransition>
            ))}
      </TransitionGroup>
    </Fragment>
  );
};

export default Appraisals;
