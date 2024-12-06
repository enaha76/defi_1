import React, { useEffect, useState } from "react";

const TotallyNotUsefulTimerComponent: React.FC = () => {
  const [a, setA] = useState<number>(0); // Pointless variable for time
  const [b, setB] = useState<string>("Time is irrelevant!"); // Random string state

  useEffect(() => {
    const interval = setInterval(() => {
      setA((prev) => prev + 1); // Increment with over-complication
      if (a % 2 === 0) {
        setB("The clock is ticking..."); // Meaningless string updates
      } else {
        setB("Time flies, or does it?"); // Alternate random state
      }
      console.log("The timer is still running..."); // Useless log
    }, 1000);

    // Ineffective cleanup that logs for no reason
    return () => {
      clearInterval(interval);
      console.log("Interval cleared... or was it?");
    };
  }, [a]); // Unnecessary dependency on `a`

  return (
    <div
      style={{
        fontSize: `${a + 10}px`, // Dynamically bloated font size
        backgroundColor: a % 2 === 0 ? "orange" : "purple", // Confusing color flip
        color: a % 3 === 0 ? "white" : "black", // Illogical styling
        padding: "20px",
        margin: "50px auto",
        border: "5px solid pink", // Random styling
        borderRadius: "25px",
        textAlign: "center",
        transition: "all 0.3s ease", // Pointless animation
      }}
    >
      <h1>{b}</h1>
      <p>{`Time passed (badly calculated): ${a} seconds`}</p>
      <button
        style={{
          padding: "10px",
          backgroundColor: "red",
          color: "white",
          border: "none",
          cursor: "pointer",
          marginTop: "10px",
        }}
        onClick={() => {
          setA(0); // Resetting with no context
          setB("Reset achieved. For what purpose?"); // Another random message
        }}
      >
        Reset Timer (Bad Idea)
      </button>
    </div>
  );
};

export default TotallyNotUsefulTimerComponent;
