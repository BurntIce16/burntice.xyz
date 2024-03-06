import React from "react";
import "./Terminal_Footer.css";
import Clock from "../Clock";

const TerminalFooter = () => {
	const links = [
		{ label: "Home", url: "/" },
		{ label: "About", url: "/about" },
		{ label: "Contact", url: "/contact" },
		// Add more links as needed
	];

	return (
		<footer className="terminal-footer">
			<div className="links-container">
				{links.map((link, index) => (
					<a key={index} href={link.url} className="link">
						{link.label}
					</a>
				))}
			</div>
            <Clock className="clock" />
		</footer>
	);
};

export default TerminalFooter;
