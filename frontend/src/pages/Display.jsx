import "./Display.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { message } from "antd";

const Display = () => {
  const navigate = useNavigate(); // navigate to edit with id params
  const [booksData, setBooksData] = useState([]); //useState to display all books
  const [toggleView, setToggleView] = useState(true);
  // get all books
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_REACT_BACKEND_BASEURL}/mybooks/getAllBook`
      );
      setBooksData(response.data);
    } catch (err) {
      console.error("Error fetching books", err);
      message.error("Error fetching data", err.status);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  function handleDelete(id) {
    console.log(id);
    try {
      axios
        .delete(
          `${
            import.meta.env.VITE_REACT_BACKEND_BASEURL
          }/mybooks/deleteBook/${id}`
        )
        .then((res) => {
          message.info("User data deleted successfully");
          fetchData();
        })
        .catch((err) => {
          console.log(err);
          message.error("Error fetching data");
        });
    } catch (err) {
      console.log(err);
      message.error(err);
    }
  }
  // edit passing id to a new route
  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  //   console.log("boookss", booksData);
  const responseData = booksData.map((value) => {
    return (
      <tr key={value.id}>
        <td>{value.id}</td>
        <td>{value.title}</td>
        <td>{value.author}</td>
        <td>{value.publicationYear}</td>
        <td>{value.pages}</td>
        <td>{value.genre}</td>
        <td>{value.price}</td>
        <td>{value.read ? "Yes" : "No"}</td>
        <td>
          <Button
            variant="outline-success"
            size="sm"
            className="me-2"
            onClick={() => handleEdit(value._id)}
          >
            Edit
          </Button>
          <Button
            variant="outline-danger"
            size="sm"
            className="mx-1"
            onClick={() => handleDelete(value._id)}
          >
            Delete
          </Button>
        </td>
      </tr>
    );
  });

  const cardResponse = booksData.map((value) => {
    return (
      <Card
        border="success"
        style={{ width: "15rem" }}
        key={value?.id}
        className="p-0 m-2"
      >
        <Card.Img
          variant="top"
          src={`https://picsum.photos/seed/${value?._id}/300/200`}
          className="p-0"
        />
        <Card.Body className="p-2">
          <Card.Title>{value.title}</Card.Title>
          <Card.Text className="m-0">Author: {value.author || ""}</Card.Text>
          <Card.Text className="m-0">Genre: {value.genre}</Card.Text>
          <Card.Text className="m-0">Price: ₹{value.price}</Card.Text>
          <Card.Text className="m-0">
            Edition: {value.publicationYear}
          </Card.Text>
          <Card.Text className="m-0">Pages: ₹{value.pages}</Card.Text>
        </Card.Body>
      </Card>
    );
  });

  return (
    <>
      {toggleView ? (
        <div className="w-75 mx-auto mt-3">
          <div className="d-flex justify-content-between">
            <h2 style={{ color: "#198754" }}>List of all the books</h2>
            <span>
              <Button
                variant="success"
                onClick={() => setToggleView(!toggleView)}
              >
                Toggle View
              </Button>
            </span>
          </div>
          <table className="w-100 mt-4">
            <thead>
              <tr>
                <th>Book Id</th>
                <th>Book Title</th>
                <th>Author</th>
                <th>Year </th>
                <th>Pages</th>
                <th>Genre</th>
                <th>Price</th>
                <th>Read</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>{responseData}</tbody>
          </table>
        </div>
      ) : (
        <div className="w-75 mx-auto mt-3 ">
          <div className="d-flex justify-content-between">
            <h2 style={{ color: "#198754" }}>List of all the books</h2>
            <span>
              <Button
                variant="success"
                onClick={() => setToggleView(!toggleView)}
              >
                Toggle View
              </Button>
            </span>
          </div>
          <div className="d-flex justify-content-between m-5">
            <Row className="m-2">{cardResponse}</Row>
          </div>
        </div>
      )}
    </>
  );
};

export default Display;
