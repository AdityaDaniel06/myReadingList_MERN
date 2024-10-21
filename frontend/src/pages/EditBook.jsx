import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

import axios from "axios";
import { message } from "antd";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const EditBook = () => {
  const { id } = useParams();

  const [input, setInput] = useState({});
  const handleInput = (e) => {
    let nm = e.target.name;
    let val = e.target.value;
    setInput((values) => ({ ...values, [nm]: val }));
    // console.log(input);
  };

  const fetchData = async () => {
    const api = `http://127.0.0.1:7000/mybooks/getBookById/${id}`;
    try {
      const response = await axios.get(api);
      console.log(response);
      const bookData = response.data;
      setInput(bookData); // Update input state with the fetched data
    } catch (error) {
      console.error(error);
      message.error("Error fetching data", error.status);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const api = `http://127.0.0.1:7000/mybooks/updateBook/${id}`;
      // Sending the PUT request to update employee data
      axios
        .put(api, input)
        .then((res) => {
          message.success("Data successfully updated!");

          // Reset the input fields after successful update
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
        .catch((error) => {
          // Handle any error that occurs during the request
          console.error(error);
          message.error("Error updating data. Please try again.");
        });
    } catch (e) {
      console.error(e);
      message.error("An unexpected error occurred.", e);
    }
  };

  return (
    <>
      <div className="w-50 mx-auto mt-3">
        <h3 style={{ color: "#198754" }}>Edit Records</h3>
        <form className="formDesign">
          <Row className="my-3">
            <Col sm={4}>
              <label className="form-label">Enter new ID</label>
            </Col>
            <Col sm={8}>
              <input
                className="form-control"
                type="text"
                name="empId"
                value={input.id || ""} // Set input value with fetched data
                onChange={handleInput}
                disabled={true} // Disable the input field for ID as it's read-only
              />
            </Col>
          </Row>
          <Row className="my-3">
            <Col sm={4}>
              <label className="form-label">Edit Book Title</label>
            </Col>
            <Col sm={8}>
              <input
                className="form-control"
                type="text"
                name="title"
                value={input.title || ""} // Set input value with fetched data
                onChange={handleInput}
              />
            </Col>
          </Row>
          <Row className="my-3">
            <Col sm={4}>
              <label className="form-label">Edit Author</label>
            </Col>
            <Col sm={8}>
              <input
                className="form-control"
                type="text"
                name="author"
                value={input.author || ""} // Set input value with fetched data
                onChange={handleInput}
              />
            </Col>
          </Row>
          <Row className="my-3">
            <Col sm={4}>
              <label className="form-label">Edit Year</label>
            </Col>
            <Col sm={8}>
              <input
                className="form-control"
                type="number"
                name="publicationYear"
                value={input.publicationYear || ""} // Set input value with fetched data
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
                value={input.genre || ""}
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
          <Row className="my-3">
            <Col sm={4}>
              <label className="form-label"> Read or Not ?</label>
            </Col>
            <Col sm={8}>
              <input
                className="form-control"
                type="text"
                name="read"
                value={input.read === true ? "Yes" : "No"}
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

export default EditBook;
