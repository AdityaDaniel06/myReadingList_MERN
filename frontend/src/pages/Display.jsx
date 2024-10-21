import "./Display.css";
import Button from "react-bootstrap/Button";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { message } from "antd";

const Display = () => {
  const navigate = useNavigate(); // navigate to edit with id params
  const [booksData, setBooksData] = useState([]); //useState to display all books
  // get all books
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:7000/mybooks/getAllBook"
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
        .delete(`http://127.0.0.1:7000/mybooks/deleteBook/${id}`)
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
            className="me-3"
            onClick={() => handleEdit(value._id)}
          >
            Edit
          </Button>
          <Button
            variant="outline-danger"
            size="sm"
            className="me-3"
            onClick={() => handleDelete(value._id)}
          >
            Delete
          </Button>
        </td>
      </tr>
    );
  });

  return (
    <>
      <div className="w-75 mx-auto mt-3">
        <h2 style={{ color: "#198754" }}>List of all the books</h2>
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
    </>
  );
};

export default Display;
