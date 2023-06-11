import React from "react";
import GithubLogo from "../github-mark.svg";

export const Footer = () => {
  return (
    <footer>
      <h4>Copyright © 2023 yehoki</h4>
      <a href="https://github.com/yehoki">
        <img className="svg"  src={GithubLogo} alt="Github Logo" />
      </a>
    </footer>
  );
};
