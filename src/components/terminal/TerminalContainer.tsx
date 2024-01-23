
import { FC } from "react";
import {
  ContainerDiv,
  TermContainer,
} from "../../assets/styles/terminal/terminalstyle";
import TermNav from "./TermNav";
import TerminalLogic from "./TerminalLogic";
import Wrapper from "../ui/Wrapper";
import { getSectionAnimation } from '@/styles/animations';

const TerminalContainer: FC = () => {
  return (
    <Wrapper id = "terminal" {...getSectionAnimation}>
      <div className="top-50">
        <h2 className="relative text-center mb-10 uppercase tracking-[20px] text-3xl ">
          Terminal
        </h2>
        
      <ContainerDiv>
        <TermContainer>
          <TermNav />
          <TerminalLogic />
        </TermContainer>
      </ContainerDiv>
      </div>
    </Wrapper>
  );
};

export default TerminalContainer;
