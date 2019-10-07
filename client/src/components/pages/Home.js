import React from "react";
import Appraisals from "../appraisals/Appraisals";
import AppraisalForm from "../appraisals/AppraisalForm";

const Home = () => {
  return (
    <div className="grid-2">
      <div>
      <AppraisalForm />
      </div>
      <div>
        <Appraisals />
      </div>
    </div>
  );
};

export default Home;
