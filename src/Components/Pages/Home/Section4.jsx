import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Section4 = () => {
  return (
    <>
      <Container fluid >
        
        <Row className="justify-content-center d-flex justify-content-around sec_4" >
          <Col lg={6} >
            <div className="section_4 ">
                <img src="https://hongo.themezaa.com/decor/wp-content/uploads/sites/11/2019/09/decor-banner-13.jpg.webp" alt="" className="sec_4img1"  />  
            </div>
          </Col>
          <Col lg={3} >
            <div className="section_4">
                <img src="https://hongo.themezaa.com/decor/wp-content/uploads/sites/11/2019/09/decor-banner-16-450x450.jpg.webp" alt="" className="sec_4img1"  />
            </div>
          </Col>
          <Col lg={3}>
            <div className="section_4">
                <img src="https://hongo.themezaa.com/decor/wp-content/uploads/sites/11/2019/09/decor-banner-14-450x450.jpg.webp" alt="" className="sec_4img1" />
            </div>
          </Col>
          
        </Row>
        
      </Container>
    </>
  );
};

export default Section4;
