import { IconButton, Tooltip } from "@mui/material";

import AcUnitOutlinedIcon from "@mui/icons-material/AcUnitOutlined";
import NetworkWifiOutlinedIcon from "@mui/icons-material/NetworkWifiOutlined";
import HearingDisabledOutlinedIcon from "@mui/icons-material/HearingDisabledOutlined";
import ChairAltOutlinedIcon from "@mui/icons-material/ChairAltOutlined";
import KeyboardOutlinedIcon from "@mui/icons-material/KeyboardOutlined";
import MonitorOutlinedIcon from "@mui/icons-material/MonitorOutlined";
import LocalLaundryServiceOutlinedIcon from "@mui/icons-material/LocalLaundryServiceOutlined";
import KitchenOutlinedIcon from "@mui/icons-material/KitchenOutlined";
import HouseOutlinedIcon from "@mui/icons-material/HouseOutlined";
import CoffeeMakerOutlinedIcon from "@mui/icons-material/CoffeeMakerOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import GroupWorkOutlinedIcon from "@mui/icons-material/GroupWorkOutlined";
import { ContainerHighLights } from "./styles";

const iconSelector = { 
  "Ergonomic Setup": KeyboardOutlinedIcon,
  "Air conditioning" : AcUnitOutlinedIcon,
  "Internet > 100mb/s": NetworkWifiOutlinedIcon,
  "Silent Environment": HearingDisabledOutlinedIcon,
  "Ergonomic Desk Chair": ChairAltOutlinedIcon,
  "Monitor Full HD": MonitorOutlinedIcon,
  "Dryer": LocalLaundryServiceOutlinedIcon,
  "Kitchen": KitchenOutlinedIcon,
  "Smart Place": HouseOutlinedIcon,
  "Coffee Machine": CoffeeMakerOutlinedIcon,
  "Playroom": SportsEsportsOutlinedIcon,
  "CoWorking": GroupWorkOutlinedIcon,
};

function HighLights({ accommodation }) {

  const highlights = accommodation?.acomodation?.highlights

  return (
    <ContainerHighLights>
      <h3>High Lights</h3>
      <IconButton color="secondary">
        {highlights?.map((title, index) => {
          const Icon = iconSelector[title]
          if(!Icon) return <div key={index}></div>
          return (
            <Tooltip key={index} title={title}>
              <Icon/>
            </Tooltip>
          );
        })}
      </IconButton>
    </ContainerHighLights>
  );
}

export default HighLights;
