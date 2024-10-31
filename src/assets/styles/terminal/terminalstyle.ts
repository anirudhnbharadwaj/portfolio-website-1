import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Colors } from "../basetheme/theme";
import { Typography } from "@mui/material";
import { useTheme } from "@/lib/hooks/use-theme";

export const CheckDark = () => {
  const isDarkMode = useTheme()
  return  isDarkMode ;
};

export const ContainerDiv = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "1%",
  height: "50vh",
}));

// Terminal container
export const TermContainer = styled(Box)(({ theme }) => ({
  width: "80%",
  height: "45vh",
  // background: CheckDark().isDarkMode ? Colors.terminalBackgroundColorD : Colors.terminalBackgroundColorLight, // Update based on dark mode
  borderRadius: "2%",
  overflowY: "auto",
  overflowX: "hidden",
  "&::-webkit-scrollbar": {
    width: "0", 
  },
  [theme.breakpoints.down("sm")]: {
    height: "40vh",
    width: "100%",
  },
}));

// Navbar container
export const NavInsideContainer = styled(Box)(({ theme }) => ({
  position: "sticky",  
  top: 0, 
  height: "2.3em",
  // background: Colors.navBackgroundColorDark, 
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
  alignItems: "center",
  padding: "0 1em",
  [theme.breakpoints.down("sm")]: {
    padding: "0 0.5em",
    height: "1.8em",
  },
}));

export const DotsInsideContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
}));

export const TextInsideContainer = styled(Typography)(({ theme }) => ({
  fontFamily: "'Calibri', sans-serif",
  color: Colors.primary,
  fontSize: "1em",
  fontWeight: "600",
  [theme.breakpoints.down("md")]: {
    fontSize: "0.9em",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.7em",
  },
}));

export const Dot = styled(Box)(({ theme }) => ({
  content: '""',
  width: "1em",
  height: "1em",
  borderRadius: "50%",
  marginRight: "8px",
  [theme.breakpoints.down("sm")]: {
    width: "0.7em",
    height: "0.7em",
    marginRight: "5px",
  },
}));

export const OrangeDot = styled(Dot)(() => ({
  backgroundColor: Colors.terminalOrangeDot,
}));

export const YellowDot = styled(Dot)(() => ({
  backgroundColor: Colors.terminalYellowDot,
}));

export const GreenDot = styled(Dot)(() => ({
  backgroundColor: Colors.terminalGreenDot,
}));

export const TerminalWelcomeMessages = styled(Typography)(({theme}) => ({
  fontFamily: "'Calibri', sans-serif",
  fontSize: "1em",
  fontWeight: "550",
  color: Colors.textSky,
  margin: "0.5em 1.4em",
  [theme.breakpoints.down("sm")]:{
    fontSize: "0.8em"
  }

}))
export const TerminalPrompt = styled(Box)(() => ({
    fontFamily: "'Calibri', sans-serif",
    color: "rgb(14, 165, 233)",
    marginLeft: "1.4em"
}));

export const TerminalUserName = styled(Typography)(({theme}) => ({
   fontSize: "1em",
   fontWeight: "600",
   marginTop: "1em",
   marginBottom: "0.4em",
   fontFamily: "'Calibri', sans-serif",
   paddingBottom: "4px",
   [theme.breakpoints.down("sm")]: {
    fontSize: "0.8em"
   }
}));

export const TerminalOutput = styled(Typography)(({theme})=>({
  fontSize: "0.9em",
   fontWeight: "500",
   marginLeft: "1.6em",
  //  color: "white",
   fontFamily: "'Trebuchet MS', sans-serif",
   [theme.breakpoints.down("sm")]: {
    fontSize: "0.8em",
    marginLeft: "1.9em"
   }
}));
