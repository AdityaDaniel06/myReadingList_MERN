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
    let api = `${
      import.meta.env.VITE_REACT_BACKEND_BASEURL
    }/mybooks/addNewBook`;
    axios
      .post(api, input)
      .then((res) => {
        // console.log(res);
        if (res.status == 201) {
          message.success("Data inserted successfully");
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
        }
      })
      .catch((err) => {
        console.log(err);
        message.error("Duplicate Value,Please check the values again!!");
      });
  };
  return (
    <div className="heroSection">
      <div className="w-50 mx-auto">
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
                value={input.id}
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
                value={input.title}
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
                value={input.author}
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
                value={input.publicationYear}
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
                value={input.genre}
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
                value={input.pages}
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
                value={input.price}
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
    </div>
  );
};

export default Insert;
