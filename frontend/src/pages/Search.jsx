import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

import axios from "axios";

const Search = () => {
  return (
    <>
      <div className="w-75 mx-auto mt-3">
        <h3 style={{ color: "#198754" }}>Search Any Books</h3>
        <form className="formDesign">
          <Row className="my-3">
            <Col sm={3}>
              <label className="form-label">Seach by ID</label>
            </Col>
            <Col sm={7}>
              <input className="form-control" type="text" name="" value={""} />
            </Col>
            <Col col={2}>
              <Button variant="outline-success" type="submit">
                Search
              </Button>
            </Col>
          </Row>
        </form>
      </div>
    </>
  );
};

export default Search;
