import React, { useContext, useEffect } from "react";
import Appraisals from "../appraisals/Appraisals";
import AppraisalForm from "../appraisals/AppraisalForm";
import AppraisalFilter from "../appraisals/AppraisalFilter";
import AuthContext from "../../context/auth/authContext";

const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

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
