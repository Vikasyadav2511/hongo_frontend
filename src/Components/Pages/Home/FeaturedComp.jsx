import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";

const FeaturedComp = () => {
  const [feature, setFeatures] = useState([]);
  const [path, setPath] = useState("");
  const [error, setError] = useState(null); // New state for error handling

  useEffect(() => {
    axios
      .get("http://localhost:8001/category/get-categories")
      .then((res) => {
        setFeatures(res.data.data);
        setPath(res.data.filepath);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setError("Error fetching data. Please try again later."); // Set error state
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>; // Render error message if error state is set
  }

  return (
    <Container fluid className="f_01">
      <h1 className="f_02">Featured Products</h1>
      <Row className="flex-wrap">
        {feature.map((item, index) => (
          <Col key={index}>
            <div className="f_03">
            <img src={`${path}/${item.image}`} alt={item.title} />  
            </div>
            <div>
              <p>{item.title}</p>
              <p>$50.00</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FeaturedComp;


