import React from "react";
import Appraisals from "../appraisals/Appraisals";
import AppraisalForm from "../appraisals/AppraisalForm";
import AppraisalFilter from "../appraisals/AppraisalFilter";

const Home = () => {
  return (
    <div className="grid-2">
      <div>
        <AppraisalForm />
      </div>
      <div>
        <AppraisalFilter />
        <Appraisals />
      </div>
    </div>
  );
};

export default Home;
