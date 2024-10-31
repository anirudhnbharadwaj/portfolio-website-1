
import { FC } from "react";
import {
  ContainerDiv,
  TermContainer,
} from "../../assets/styles/terminal/terminalstyle";
import TermNav from "./TermNav";
import TerminalLogic from "./TerminalLogic";
import Wrapper from "../ui/Wrapper";
import { getSectionAnimation } from '@/styles/animations';
import { useTheme } from "@/lib/hooks/use-theme";
import { Colors } from "../../assets/styles/basetheme/theme";

const TerminalContainer: FC = () => {
  const {isDarkMode, toggle} = useTheme();
  return (
    <Wrapper id = "terminal" {...getSectionAnimation}>
      <div className="top-100">
        <h2 className="relative text-center mb-10 uppercase tracking-[10px] text-3xl ">
          Terminal
        </h2>
        <h4 className="relative mb-5 font-mono text-center text-sm uppercase tracking-[10px] text-accent">
          Specialis Revelio!! 
        </h4>
        
      <ContainerDiv>
        <TermContainer
          style={{  backgroundColor: isDarkMode ? Colors.terminalBackgroundColorDark : Colors.terminalBackgroundColorLight,
                    border: isDarkMode ? "1px solid #64748b" : "1px solid #64748b"
           }}
          >
          <TermNav />
          <TerminalLogic />
        </TermContainer>
      </ContainerDiv>
      </div>
    </Wrapper>
  );
};

export default TerminalContainer;
