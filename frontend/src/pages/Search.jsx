import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import axios from "axios";
import { useState } from "react";

const Search = () => {
  const [booksData, setBooksData] = useState({}); // useState to store response

  const [input, setInput] = useState(""); // send string to search
  let [showData, setShowData] = useState(false);

  const handleSearch = async () => {
    // console.log(input);

    const api = `http://127.0.0.1:7000/mybooks/searchBooks/${input}`;
    try {
      const response = await axios.get(api);
      setBooksData(response.data);
      setShowData(true);
      //   console.log(response.data.id);

      if (response.data.id === undefined) {
        setShowData(false);
      }
    } catch (error) {
      console.error(error);
      message.error("Error fetching data");
    }
  };

  return (
    <>
      <div className="w-75 mx-auto mt-3">
        <h3 style={{ color: "#198754" }}>Search Any Books</h3>
        <form className="formDesign">
          <Row className="my-3">
            <Col sm={3}>
              <label className="form-label">Search by ID</label>
            </Col>
            <Col sm={7}>
              <input
                className="form-control"
                type="text"
                name="id"
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                }}
              />
            </Col>
            <Col col={2}>
              <Button variant="outline-success" onClick={handleSearch}>
                Search
              </Button>
            </Col>
          </Row>
        </form>
      </div>

      {showData ? (
        <div className="d-flex mx-5 mt-4">
          <Card
            border="success"
            style={{ width: "15rem" }}
            key={booksData?._id || null}
          >
            <Card.Img
              variant="top"
              src={`https://picsum.photos/seed/${booksData?._id}/300/200`}
            />
            <Card.Body className="p-2">
              <Card.Title>{booksData.title}</Card.Title>
              <Card.Text className="m-0">
                Author: {booksData.author || ""}
              </Card.Text>
              <Card.Text className="m-0">Genre: {booksData.genre}</Card.Text>
              <Card.Text className="m-0">Price: ₹{booksData.price}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      ) : (
        <div className="text-center  mx-5 mt-4">
          No book found with the given ID
        </div>
      )}
    </>
  );
};

export default Search;
