import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

function Header() {
    return (<Navbar bg="light" variant="light" >
        <Container>
            <Navbar.Brand href="#home">
                <img
                    alt=""
                    src="/mcdlogo.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
    McD Playground
    </Navbar.Brand>
            <div>
                <Nav className="me-auto">
                    <LinkContainer to="/"><Nav.Link>Room</Nav.Link></LinkContainer>
                    <LinkContainer to="/collections"><Nav.Link>Collections</Nav.Link></LinkContainer>
                    <Nav.Link disabled={true} style={{ fontWeight: "bold", color: "red" }}>User1234</Nav.Link>
                </Nav>
            </div>
        </Container>
    </Navbar >);
}

export default Header;
