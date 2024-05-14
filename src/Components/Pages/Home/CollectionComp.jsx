import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import axios from "axios";

// ... (your imports)

const CollectionComp = () => {
  const [collections, SetCollection] = useState([]);
  const [path, setpath] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8001/collection/get_collections")
      .then((res) => {
        // console.log(res.data.data);
        SetCollection(res.data.data);
        setpath(res.data.filepath);
        // console.log(res.data.filepath);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Container fluid className="mt-5">
        <Row>
          <Col lg={6}>
            <div className="coll_01">
              <div className="chair_01">
              <h5>Chair <br></br> Collection</h5>
             <p> <NavLink className="shop_01">SHOP NOW</NavLink></p>
              </div>
            </div>
          </Col>

          <Col>
            <div className="coll_1">
              <div className="coll_2">
              <div className="chair_02">
              <h5>Furniture <br></br> Collection</h5>
             <p> <NavLink className="shop_01" >SHOP NOW</NavLink></p>
              </div>
              </div>
              <div className="coll_3">
                <div className="coll_4">
            
                </div>
                <div className="coll_5">
           
                <div className="chair_03">
              <h5>Chair <br></br> Collection</h5>
             <p> <NavLink className="shop_01">SHOP NOW</NavLink></p>
              </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        {/* <Row className="mainrow pt-5">
          {collections.map((item, index) => (
            <React.Fragment key={index}>
              <Col className="collect_1" lg={12}>
                <img src={path + "/" + item.image} alt={item.altText} />
              </Col>
              <Col className="collect_1" lg={6}>
                <Row>
                  <Col className="collect_2" lg={12}></Col>
                  <Col className="collect_3" lg={12}>
                    {[1, 2, 3,4].map((divIndex) => (
                      <div key={divIndex} className="collect_4"></div>
                    ))}
                  </Col>
                </Row>
              </Col>
            </React.Fragment>
          ))}
        </Row> */}
      </Container>
    </>
  );
};

export default CollectionComp;
