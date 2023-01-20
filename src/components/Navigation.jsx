import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navigation() {
  const location = useLocation();
  const user = useSelector((state => state.login.user))
  return (
    <Navbar className={location.pathname === "/login" ? "d-none":""}>
      <Container>
      <img className='navlogo' src='navlogo.png'/> 
      <Navbar.Brand><Link to="/">MoodMeter</Link></Navbar.Brand>
        <Navbar.Toggle />
        <Nav.Link><Link to="/about">About</Link></Nav.Link>
        <Nav.Link><Link to="/test">Take test</Link></Nav.Link>
        <Nav.Link><Link to="/profile">Profile</Link></Nav.Link>
        <Navbar.Collapse className="justify-content-end">
          
          <Navbar.Text>
            Signed in as: <Link to="/profile">{user}</Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;