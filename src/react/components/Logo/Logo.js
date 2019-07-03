import React from "react";
import LogoFile from "../../logo.svg";

const Logo = props => {
  return (
    <div>
      <img
        style={{ height: "100%", width: "80px", display: "inline" }}
        src={LogoFile}
        alt="Logo"
      />
    </div>
  );
};

export default Logo;
