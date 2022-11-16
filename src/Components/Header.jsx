import { Component } from "react";
import { ReactComponent as RightArrows } from "../assets/fast-forward-double-right-arrows-svgrepo-com.svg";

export class Header extends Component {
  render() {
    return (
      <a
        className="banner"
        href="https://cheerful-empanada-e83c29.netlify.app/"
      >
        Learn More About Houses of Peace{" "}
        <RightArrows height={"1em"} width={"1em"} fill="#fff" />
      </a>
    );
  }
}

export default Header;
