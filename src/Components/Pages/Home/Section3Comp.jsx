import React, { useEffect, useState } from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import axios from 'axios'
import { NavLink } from 'react-router-dom';


const Section3Comp = () => {
    const [section,setsection] = useState([]);
    const [path,setpath]= useState('');

    useEffect(()=>{
            axios.get('http://localhost:8001/section3/get_section')
            .then((res)=>{
                // console.log(res.data.data)
                setsection(res.data.data)
                setpath(res.data.filepath)
            })
            .catch((err)=>console.log(err))  
    },[])
  return (
    <Container >
        <Row className='justify-content-center'>
        <h5 className='shop'>-SHOP BY CATEGORY-</h5>
        {section &&
        section.map((item, index) => (
            <React.Fragment key={index}>
              <Col className="section_3" lg={4} sm={12} md={5}>
                <img src={path + "/" + item.image} alt={item.altText}  />
                <NavLink className='sofa_01'>
                <p className='title2'>{item.title}</p>
                </NavLink>
                {/* <p className='item'>12 items</p> */}
              </Col>
              
              
             
            </React.Fragment>
          ))}
        </Row>
    </Container>
  )
}

export default Section3Comp;