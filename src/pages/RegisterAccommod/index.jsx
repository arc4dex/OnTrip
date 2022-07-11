import FormRegisterAccommod from "../../components/FormRegisterAccommod";

import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../../components/ErrorBoundary";

function RegisterAccommod() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <FormRegisterAccommod />
    </ErrorBoundary>
  );
}

export default RegisterAccommod;
