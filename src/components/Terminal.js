import React from "react";
import TerminalFooter from "./Terminal_Footer";
import "./Terminal.css";

const Terminal = ({ children }) => {
	return (
		<div className="terminal-border">
			<div className="terminal">
				<div className="terminal-body">{children}</div>
				<div className="terminal-footer">
				    <TerminalFooter />
				</div>
			</div>
		</div>
	);
};

export default Terminal;
