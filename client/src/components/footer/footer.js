import React from "react";
import "./footer.css";
import {
  Call,
  Facebook,
  Instagram,
  LinkedIn,
  YouTube,
  Twitter,
} from "@material-ui/icons";

function Footer() {
  let fntSz = "1.5rem";
  return (
    <footer id="footer">
      <div id="footTop" className="divCon">
        <Call style={{ fontSize: fntSz }} />{" "}
        <p className="phoneNumPara">1800-1299-100</p>
      </div>
      <div id="footCenter" className="divCon">
        <div id="divFirst">
          <span className="phoneNumPara">React JS</span>
        </div>
        <div>
          <span className="phoneNumPara">Node JS</span>
        </div>
        <div id="divThird">
          <span className="phoneNumPara">Express</span>
        </div>
        <div>
          <span className="phoneNumPara">Mongo DB</span>
        </div>
        <div id="divLast">
          <span className="phoneNumPara">Javascript</span>
        </div>
      </div>
      <div id="footBottom" className="divCon">
        <div>
          <span className="phoneNumPara">follow us</span>
        </div>
        <div>
          <Instagram className="footIcon insta" style={{ fontSize: fntSz }} />
        </div>
        <div>
          <Facebook className="footIcon fb" style={{ fontSize: fntSz }} />
        </div>
        <div>
          <Twitter className="footIcon twit" style={{ fontSize: fntSz }} />
        </div>
        <div>
          <YouTube className="footIcon youtube" style={{ fontSize: fntSz }} />
        </div>
        <div>
          <LinkedIn className="footIcon linkedIn" style={{ fontSize: fntSz }} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
