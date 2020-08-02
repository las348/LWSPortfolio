import React from "react";
import "./footer.css"

function Footer() {
  return (
    <div>
      <div className="row footer">
        <div className="col-md-12">
          <div class="social">
            <a href="https://github.com/las348" target="_blank" class="social-link" rel="noopener noreferrer"><span class="fa fa-github fa-2x"></span></a>
            <a href="https://www.linkedin.com/in/laureni-wilkinson-sanchez-528a0a42/" target="_blank" class="social-link" rel="noopener noreferrer"><span
              class="fa fa-linkedin fa-2x"></span></a>
          </div>
          <p>Laureni's portfolio</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;