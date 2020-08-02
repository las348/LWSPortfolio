import React from "react";
import "./footer.css"
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

function Footer() {

  const footerTooltip = props => (
    <Tooltip {...props}>Resumé</Tooltip>
  );

  return (
    <div className="footer">
      <div class="social">
        <a href="https://github.com/las348"
          target="_blank"
          rel="noopener noreferrer">
          <span className="fa fa-github fa-2x footer-social"></span></a>
        <a href="https://www.linkedin.com/in/laureni-wilkinson-sanchez-528a0a42/"
          target="_blank"
          rel="noopener noreferrer">
          <span className="fa fa-linkedin fa-2x footer-social"></span></a>

        <OverlayTrigger placement="top" overlay={footerTooltip}>
          <a href="https://docs.google.com/document/d/12oSO_sDSaSq6UtNJE75dv765CYhIfmOQiS-JVuFMxmA/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            data-tooltip="">
            <span className="fa fa-file fa-2x footer-social"></span></a>
        </OverlayTrigger>

      </div>
      <p>&#169; 2020 Copyright Laureni Wilkinson-S&aacute;nchez</p>
      <p>las348@nyu.edu | (646) 422-9119</p>
    </div>
  )
}

export default Footer;