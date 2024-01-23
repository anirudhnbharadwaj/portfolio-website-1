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
export default function TermNav() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <NavInsideContainer>
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