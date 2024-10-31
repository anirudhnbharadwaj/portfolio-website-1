import {
  NavInsideContainer,
  DotsInsideContainer,
  OrangeDot,
  YellowDot,
  GreenDot,
  TextInsideContainer,
} from "../../assets/styles/terminal/terminalstyle";
import { IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Terminal";
import { useMediaQuery, useTheme } from "@mui/material";
import { Colors } from "../../assets/styles/basetheme/theme";
import { CheckDark } from "../../assets/styles/terminal/terminalstyle";

export default function TermNav() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const  {isDarkMode}  = CheckDark();
  
  return (
    
    <NavInsideContainer
    style={{  background: isDarkMode ? Colors.navBackgroundColorDark : Colors.navBackgroundColorLight,}}
    >
      <DotsInsideContainer>
        <OrangeDot />
        <YellowDot />
        <GreenDot />
      </DotsInsideContainer>
      {/* Copyright :D Nishant Banjade*/}
      <TextInsideContainer>anb-term</TextInsideContainer>
      <IconButton>
        <Brightness4Icon color="primary" sx={{ fontSize: isSmallScreen ? "0.7em" : "1em" }} />
      </IconButton>
    </NavInsideContainer>
  );
}