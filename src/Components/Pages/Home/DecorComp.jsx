import axios from "axios";
import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";

const DecorComp = () => {
  const [decor, setDecor] = useState([]);
  const [path, setPath] = useState('');

  useEffect(() => {
    axios
      .get("http://localhost:8001/decor/get_decor")
      .then((res) => {
        setDecor(res.data.data[0].images);
        setPath(res.data.filepath);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container fluid className="insta">
      <Row className="justify-content-center gap-4">
        {decor.map((item, index) => (
          <Col key={index} lg={1} sm={1} md={3}>
            <div className="insta_01 ">
              <img src={path + "/" + item} alt={item.title} />
            </div>
          </Col>
        ))}
        <div className="insta_decor">#INSTAGRAM DECOR</div>
      </Row>
    </Container>
  );
};

export default DecorComp;

