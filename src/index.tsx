import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

// This enables HMR
// TODO: check if it affects prod build
// sorry TS
if (((module as unknown) as Record<string, unknown>)?.hot) {
  ((module as unknown) as Record<"hot", { accept: () => void }>)?.hot?.accept();
}

ReactDOM.render(<App />, document.getElementById("root"));
