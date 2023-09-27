import React from "react";
import { Row } from "react-bootstrap";
import { Container, Col } from "react-bootstrap";
import facebook from "../../pic/facebook.png";
import instagram from "../../pic/instagram.png";
import twitter from "../../pic/Twitter-Logо-1536x864.png";
import phone from "../../pic/phone.png";
const Footer = () => {
  return (
    <div className="footer-background footer mt-5 pt-4"  style={{ maxHeight: "50px" }} >
      <Container className="">
        <Row className="d-flex justify-content-between align-items-center">
          <Col sm="6" className="d-flex align-items-center ">
            <div className="footer-shroot ">  </div>
            <div className="footer-shroot mx-2"> </div>
            <div className="footer-shroot mx-2"> </div>
          </Col>
          <Col
            sm="6"
            className="d-flex justify-content-end align-items-center ">
            <div className="d-flex pt-3 mx-2">
              <img width="20px" height="20px" src={phone} alt="" />
              <p className="footer-phone">111-111(1111)</p>
            </div>
            <div style={{ cursor: "pointer" }}>
              <img width="20px" height="20px" src={facebook} alt="" />
            </div>
            <div style={{ cursor: "pointer" }} className="">
              <img width="20px" height="20px" src={instagram} alt="" />
            </div>
            <div style={{ cursor: "pointer" }} className="">
              <img width="20px" height="20px" src={twitter} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;