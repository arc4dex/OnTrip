import { Button } from "@mui/material";
import { ContainerInfo, MainPaper, MainSection } from "./styles";

function DashBoard(){

  return(
    <MainSection>
      <div className="redLine"></div>
    <ContainerInfo>
      <div>
        <h1>Dashboard</h1>
        <h2>Hello, user!</h2>
      </div>
        <Button variant="contained">Add Accommodation</Button>
    </ContainerInfo>
    <MainPaper elevation={2}>
      
    </MainPaper>
    </MainSection>
  )
}

export default DashBoard