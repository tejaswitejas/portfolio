import React, { Component } from "react";
import {GrLinkedinOption} from 'react-icons/gr';
import {FiGithub} from 'react-icons/fi';
import {IoMdMail} from 'react-icons/io';
import {MdPhone} from 'react-icons/md';
import "./Footer.scss";
class Footer extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      var profilepic = process.env.PUBLIC_URL + "/images/" + this.props.sharedBasicInfo.logo_image;
    }

    return (
      <footer id="footer-container">
        <div className="col-md-12">
          <div className="logo-container">
            <img src={profilepic} alt="logo" />
          </div>
          <div className="contact-logos">
        <a href="www.linkedin.com/in/jambula-tejaswi-995b6b105" target="_blank">
          <div className="button">
            <GrLinkedinOption className="icon" />
          </div>
        </a>

        <a href="https://github.com/tejaswitejas" target="_blank">
          <div className="button">
            <FiGithub className="icon" />
          </div>
        </a>

        <a href="mailto:tejaswi.jambula@gmail.com" target="_blank">
          <div className="button">
            <IoMdMail className="icon" />
          </div>
        </a>

        <a href="tel:+5714401614">
          <div className="button">
            <MdPhone className="icon" />
          </div>
        </a>
      </div>
      <p className="contact-info">tejaswi.jambula@gmail.com</p>
          <div className="copyright text-center">
            <div className="container">
              <small className="copyright-text">
                Copyright &copy;{" "}
                {this.props.sharedBasicInfo
                  ? this.props.sharedBasicInfo.name
                  : "???"}
              </small>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
