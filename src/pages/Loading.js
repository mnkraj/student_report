import React from "react";
import PulseLoader from "react-spinners/PulseLoader";

const Spinner = () => {
  return (
    <div style={styles.container}>
      <PulseLoader color="blue" size={60} />
    </div>
  );
};

const styles = {
  container: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 9999,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.5)", // optional: semi-transparent background
    width: "100vw",
    height: "100vh",
  },
};

export default Spinner;
