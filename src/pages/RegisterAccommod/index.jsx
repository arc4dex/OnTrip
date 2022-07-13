import FormRegisterAccommod from "../../components/FormRegisterAccommod";

import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../../components/ErrorBoundary";
import Header from "../../components/header";
import Footer from "../../components/Footer";
import HeaderDesktop from "../../components/headerDesktop";

import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function RegisterAccommod() {
  const userIsLoggedReducer = useSelector(({ userState }) => userState);

  const history = useHistory();

  return (
    <>
      {userIsLoggedReducer ? (
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Header />
          <HeaderDesktop />
          <FormRegisterAccommod />
          <Footer />
        </ErrorBoundary>
      ) : (
        history.push("/")
      )}
    </>
  );
}

export default RegisterAccommod;
