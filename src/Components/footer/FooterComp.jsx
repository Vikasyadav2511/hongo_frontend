import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { RiLinkedinFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";



const FooterComp = () => {
  return (
    <>
    <Container fluid className='bg-dark foot_01 '>
            <Row className='justify-content-between ptop'>
                <Col lg={3} md={5} sm={12}>
                        <div className='Footname'>
                            <h5>Company overview</h5>
                            <div className='foot_02'>
                                <ul>
                                   <a> <li>About</li></a>
                                    <a> <li>Our service</li></a>
                                   <a> <li>Get the voucher</li></a>
                                    <a>  <li>Store locator</li></a>
                                   <a> <li>Testimonials</li></a>
                                   <a> <li>Contact Information</li></a>
                                </ul>
                            </div>
                        </div>
                </Col>
                <Col lg={3} md={5} sm={12}>
                        <div className='Footname'>
                        <div className='Footname'>
                            <h5>Customer information</h5>
                            <div className='foot_02'>
                                <ul>
                                   <a> <li>Help and Support</li></a>
                                    <a> <li>Shipping and delivery</li></a>
                                   <a> <li>Payment method</li></a>
                                    <a>  <li>Terms and conditions</li></a>
                                   <a> <li>Returns and refunds</li></a>
                                   <a> <li>Privacy Policy</li></a>
                                </ul>
                            </div>
                        </div>
                        </div>
                </Col>
                <Col lg={3} md={5} sm={12}>
                      
                        <div className='Footname'>
                            <h5>On social networks</h5>
                            <div className='foot_03'>
                                <ul>
                                <a href='' className='fb'><li className='fb_01'> <span ><FaFacebookF size={15}/></span>  Facebook</li></a>
                                <a href='' className='twit'><li className='tw_02'> <span><FaXTwitter/></span> Twitter</li></a>
                                <a href=''className='linkedin'> <li className='lin_03'> <span><RiLinkedinFill /></span> Linkedin</li></a>
                                <a href=''className='Instagram'>  <li className='insta_04'> <span><FaInstagram /></span> Instagram</li></a>
                                <a href=''className='pintrest'> <li className='pin_05'> <span><FaPinterestP /></span> pinterest</li></a>
                                </ul>
                            </div>
                        </div>
                       
                </Col>
                <Col lg={3} md={5} sm={12}>
                        <div className='Footname'>
                            <h5>Subscribe to our Newsletter</h5>
                            <p className='para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                          <div className='footinput'> <input type="text" name="" id="" placeholder='Enter your email...'  /> <span className='sub'>subscribe <FaArrowRightLong /> </span></div> 
                          <p className='crights'>&#169; HONGO.All rights reserved.</p>
                        </div>
                </Col>
            </Row>

    </Container>
    </>
  )
}

export default FooterComp