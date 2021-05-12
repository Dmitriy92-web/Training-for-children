import { render } from "@testing-library/react";
import App from "../App";

function clickButton (props) {
  alert(props.messageClickButton);
}

function AuthorizationButton(props) {
  
  return (
    <button className="authorization_button" onClick={() => clickButton(props)}>{props.textButton}</button>
  );
}

export default AuthorizationButton;