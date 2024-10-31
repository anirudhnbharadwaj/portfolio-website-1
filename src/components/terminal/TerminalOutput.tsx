import { FC } from "react";
import {
  TerminalPrompt,
  TerminalUserName,
  TerminalOutput as TerminalOutputStyle,
} from "../../assets/styles/terminal/terminalstyle";
import TerminalConfiguration from "../../assets/config/developer_data/terminalconfiguration";
import { useTheme } from "@/lib/hooks/use-theme";

const { terminal_username } = TerminalConfiguration;

type TerminalOutputProps = {
  command: string;
  response: string | string[];
};

const TerminalOutput: FC<TerminalOutputProps> = ({ command, response }) => {
  // Get the dark mode state
  const { isDarkMode } = useTheme();

  return (
    <div>
      <TerminalPrompt>
        <TerminalUserName>
          {terminal_username}{" "}
          <span
            style={{
              color: isDarkMode===undefined ? "white" :  isDarkMode ? "white" : "black", // Change color based on dark mode
              fontFamily: "'Calibri', monospace",
              fontWeight: "600",
              fontSize: "1em",
            }}
          >
            {command}
          </span>
        </TerminalUserName>
      </TerminalPrompt>
      <TerminalOutputStyle
        style={{
          color: isDarkMode===undefined ? "white" :  isDarkMode ? "white" : "black", // Change color based on dark mode
        }}
        dangerouslySetInnerHTML={{
          __html: Array.isArray(response) ? response.join('') : response,
        }}
      />
    </div>
  );
};

export default TerminalOutput;
