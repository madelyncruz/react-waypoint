import "./styles.css";
import Box from "./components/Box";
import Bar from "./components/Bar";
import { cx } from "@emotion/css";
import { Waypoint } from "react-waypoint";
import { useState } from "react";

export default function App() {
  const [fixedBar, setFixedBar] = useState(true);
  // const [fixedBottom, setFixedBottom] = useState(true);
  return (
    <div className="App">
      <h1>Testing Waypoint</h1>
      <div>
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <div>
          <Waypoint
            topOffset={80}
            bottomOffset={2000}
            onEnter={(): void => setFixedBar(false)}
            onLeave={(): void => setFixedBar(true)}
          />
          <Bar className={cx({ fixedBar: fixedBar })} />
        </div>
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
      </div>
    </div>
  );
}
