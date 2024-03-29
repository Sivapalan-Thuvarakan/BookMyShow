import Navbar  from "react-bootstrap/Navbar";
import Container  from "react-bootstrap/Container";
import NavDropdown  from "react-bootstrap/NavDropdown";
import FormControl  from "react-bootstrap/FormControl";
import Nav  from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button  from "react-bootstrap/Button";


function Header() {
  return (
    <div>
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container>
                <Navbar.Brand href="#">BookMyShow</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link href="/">Home</Nav.Link>
                    <NavDropdown title="Link" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="/all-movies">All Movies</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/registration">
                        Registration
                    </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form className="d-flex">
                    <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <Container fluid style={{ background:"black",color:"white" }}>
            <a>Movies</a>&nbsp;&nbsp;&nbsp;&nbsp;
            <a>Events</a>&nbsp;&nbsp;&nbsp;&nbsp;
            <a>Sports</a>&nbsp;&nbsp;&nbsp;&nbsp;
            <a>Offers</a>&nbsp;&nbsp;&nbsp;&nbsp;
            <a>Contact Us</a>&nbsp;&nbsp;&nbsp;&nbsp;
            <a>Support</a>&nbsp;&nbsp;&nbsp;&nbsp;
        </Container>
    </div>
  );
}

export default Header;
