import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

import axios from "axios";
import { message } from "antd";
import { useState } from "react";

const Insert = () => {
  const [input, setInput] = useState({});

  const handleInput = (e) => {
    let nm = e.target.name;
    let val = e.target.value;
    setInput((values) => ({ ...values, [nm]: val }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let api = "http://127.0.0.1:7000/mybooks/addNewBook";
    axios
      .post(api, input)
      .then((res) => {
        console.log(res);
        if (res.status == 201) {
          message.success("Data inserted successfully");
        }
        setInput({
          id: "",
          title: "",
          author: "",
          publicationYear: "",
          genre: "",
          pages: "",
          read: "",
          price: "",
        });
      })
      .catch((err) => {
        console.log(err);
        message.error("Duplicate Value,Please check the values again!!");
      });
  };
  return (
    <>
      <div className="w-50 mx-auto mt-3">
        <h2 style={{ color: "#198754" }}>Insert Data </h2>
        <form className="formDesign">
          <Row className="my-3">
            <Col sm={4}>
              <label className="form-label">Enter Unique Id:</label>
            </Col>
            <Col sm={8}>
              <input
                className="form-control"
                type="text"
                name="id"
                onChange={handleInput}
              />
            </Col>
          </Row>
          <Row className="my-3">
            <Col sm={4}>
              <label className="form-label">Enter Book Title:</label>
            </Col>
            <Col sm={8}>
              <input
                className="form-control"
                type="text"
                name="title"
                onChange={handleInput}
              />
            </Col>
          </Row>
          <Row className="my-3">
            <Col sm={4}>
              <label className="form-label">Enter Author</label>
            </Col>
            <Col sm={8}>
              <input
                className="form-control"
                type="text"
                name="author"
                onChange={handleInput}
              />
            </Col>
          </Row>
          <Row className="my-3">
            <Col sm={4}>
              <label className="form-label">Enter Edition Year</label>
            </Col>
            <Col sm={8}>
              <input
                className="form-control"
                type="number"
                name="publicationYear"
                onChange={handleInput}
              />
            </Col>
          </Row>
          <Row className="my-3">
            <Col sm={4}>
              <label className="form-label">Enter Genre</label>
            </Col>
            <Col sm={8}>
              <input
                className="form-control"
                type="text"
                name="genre"
                onChange={handleInput}
              />
            </Col>
          </Row>
          <Row className="my-3">
            <Col sm={4}>
              <label className="form-label">Enter Pages</label>
            </Col>
            <Col sm={8}>
              <input
                className="form-control"
                type="number"
                name="pages"
                onChange={handleInput}
              />
            </Col>
          </Row>
          <Row className="my-3">
            <Col sm={4}>
              <label className="form-label">Enter Price</label>
            </Col>
            <Col sm={8}>
              <input
                className="form-control"
                type="number"
                name="price"
                onChange={handleInput}
              />
            </Col>
          </Row>
          <Button variant="success" onClick={handleSubmit}>
            Save Changes
          </Button>
          &nbsp;
          <Button variant="secondary">Cancel</Button>
        </form>
      </div>
    </>
  );
};

export default Insert;
