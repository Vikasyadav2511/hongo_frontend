import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import './home.css';
import { baseURL } from '../../../utils/api';

const CarouselComp = () => {
  const [carouselData, setCarouselData] = useState([]);
  const [path, setImagePath] = useState('');

  useEffect(() => {
    axios
      .get(`${baseURL}/carousel/get-carousel`)
      .then((res) => {
        // console.log(res.data.data);
        setCarouselData(res.data.data);
        setImagePath(res.data.filepath);
        // console.log(res.data.filepath);
      })
      .catch((err) => console.log(err));
  }, []);
  // git remote remove origin
// console.log("carouselData",carouselData)
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false
  };

  return (
    <Container fluid lg={12} md={12} sm={12}>
      <Row>
        <div className="carousel">
          {carouselData.length > 0 ? (
            <Slider {...settings}>
              {carouselData.map((item, index) => (
                <div key={item._id}>
                  <Row className='caro_0' >
                    <Col lg={8} className='caro_01' >

                      <div className='main' >
                         <img src={`${baseURL}/uploads/carousel/${item?.image}`} alt={item.altText} className='caro_1' />
                      </div>
                    </Col>

                    <Col lg={4} className='caro_2'>
                      <div className='caro_4'>
                        <p>{item.title}</p>
                        <h1>{item.header}</h1>
                        <p>{item.description}</p>
                        <button className='caro_btn' >EXPLORE NOW</button>
                      </div>
                    </Col>
                  </Row>
                </div>
              ))}
            </Slider>
          ) : (
            <p>No data available</p>
          )}
        </div>
      </Row>
    </Container>
  );
};

export default CarouselComp;
