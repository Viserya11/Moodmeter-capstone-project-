import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <Navbar>
      <Container>
      <Navbar.Brand>MoodMeter</Navbar.Brand>
        <Navbar.Toggle />
        <Nav.Link>Take test</Nav.Link>
        <Nav.Link>Profile</Nav.Link>
        <Nav.Link>About</Nav.Link>
        <Navbar.Collapse className="justify-content-end">
          
          <Navbar.Text>
            Signed in as: <a href="#login">Mary Sue/John Doe</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;