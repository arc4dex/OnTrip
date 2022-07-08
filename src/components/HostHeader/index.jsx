import { NomadeHeaderContent, StyledButton } from "./styles";

import { useHistory } from "react-router-dom";

function HostHeader() {    

    const history = useHistory();

    //Alterar essa função caso não vá encaminhar para a página e sim fazer um modal.
    function handleAddAccommodation(){
        history.push("/registerAccommod/1")
    }
    
    return (        
        <NomadeHeaderContent>
            <section className="divInfo">
                <h1>Dashboard</h1>
                <p>Hello, userHost!</p>
            </section>  
            <section className="btnSection">
                <StyledButton onClick={() => handleAddAccommodation()} variant="contained">Add Accommodation</StyledButton>
            </section>
        </NomadeHeaderContent>

        
    );
}

export default HostHeader;