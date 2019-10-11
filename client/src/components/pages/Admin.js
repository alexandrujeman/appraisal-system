import React, { useContext, useEffect } from "react";
import AppraisalsAdmin from "../appraisals/AppraisalsAdmin";
import AppraisalFormAdmin from "../appraisals/AppraisalFormAdmin";
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
        <AppraisalFormAdmin />
      </div>
      <div>
        <AppraisalFilter />
        <AppraisalsAdmin />
      </div>
    </div>
  );
};

export default Home;
