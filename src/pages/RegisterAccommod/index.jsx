import FormRegisterAccommod from "../../components/FormRegisterAccommod";

import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../../components/ErrorBoundary";
import Header from "../../components/header";
import Footer from "../../components/Footer";
import HeaderDesktop from "../../components/headerDesktop";

function RegisterAccommod() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Header />
      <HeaderDesktop />
      <FormRegisterAccommod />
      <Footer />
    </ErrorBoundary>
  );
}

export default RegisterAccommod;
