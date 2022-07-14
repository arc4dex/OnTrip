import { NomadeHeaderContent, StyledButton } from "./styles";

import { useHistory } from "react-router-dom";

function HostHeader({ user }) {
  const history = useHistory();

  function handleAddAccommodation() {
    history.push(`/registerAccommod/${user.id}`);
  }

  return (
    <NomadeHeaderContent>
      <section className="divInfo">
        <h1>Dashboard</h1>
        <p>Hello, {user.name}!</p>
      </section>
      <section className="btnSection">
        <StyledButton
          onClick={() => handleAddAccommodation()}
          variant="contained"
        >
          Add Accommodation
        </StyledButton>
      </section>
    </NomadeHeaderContent>
  );
}

export default HostHeader;
