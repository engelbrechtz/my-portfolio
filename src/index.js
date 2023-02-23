import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import "./index.css";
import mixpanel from "mixpanel-browser";

mixpanel.init("abc059e91fa16c24f4713ee1f013ee00", { debug: true });
mixpanel.track("Sign up");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
