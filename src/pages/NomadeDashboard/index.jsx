import DashBoard from "../../components/dashBoard";

import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function NomadeDashboard() {

  const userIsLoggedReducer = useSelector(
    ({ userState }) => userState
  );

  const history = useHistory();
  
  return (
    <>
      {userIsLoggedReducer ? <><DashBoard/></> : history.push("/")}      
    </>
  )
}

export default NomadeDashboard;
