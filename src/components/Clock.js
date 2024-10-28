import React, { useEffect, useState } from "react";

function Clock() {
	const [time, setTime] = useState("time");

	useEffect(() => {
		const updateClock = () => {
			const now = new Date();
			const timeString = now.toLocaleTimeString("en-US", {
				timeZone: "America/New_York",
				hour12: false,
			});
			setTime(timeString);
		};

		// Call updateClock immediately to show the time without delay
		updateClock();

		// Then set the interval to update the clock every second
		const interval = setInterval(updateClock, 1000);

		// Cleanup function to clear the interval when the component unmounts
		return () => clearInterval(interval);
	}, []); // Empty dependency array means this effect runs only on mount and unmount

	return <div id="clock">{time}</div>;
}

export default Clock;
