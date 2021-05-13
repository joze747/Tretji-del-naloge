import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

import App from "./App";
import InfoForm from "./InfoForm";

const rootElement = document.getElementById("root");
ReactDOM.render(<InfoForm />, rootElement);
