import * as React from "react";
import { render } from "react-dom";
import { motion } from "framer-motion";

import "./styles.css";

const App = () => {
  return (
    <div className="example-container">
      <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} />
    </div>
  );
};

render(<App />, document.getElementById("root"));
