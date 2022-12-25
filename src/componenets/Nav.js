import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import MenuIcon from "@mui/icons-material/Menu";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Navbar from "react-bootstrap/Navbar";
import { Grid } from "@mui/material";
import NavDropdown from "react-bootstrap/NavDropdown";

import "bootstrap/dist/css/bootstrap.min.css";
const NavScrollExample = (props) => {
  // console.log(props.data);
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Start Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">About</Nav.Link>
            <NavDropdown title="Shop" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">All Product</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Popular item</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">New Arrival</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Form className="d-flex">
            <Button variant="outline-success">
              Cart
              <Grid item xs={1}>
                <h4>{props.data}</h4>
                <AddShoppingCartIcon />
              </Grid>
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavScrollExample;
