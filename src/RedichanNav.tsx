import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LOGO from './logo.svg';

const RedichanNav = (): JSX.Element => (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="/">
      <img src={LOGO} width="30" height="30" alt="React Bootstrap logo" />
      redichan
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <NavDropdown
          title="English"
          id="navbarScrollingDropdown"
          data-testid="en-boards"
        >
          <NavDropdown.Item href="#en-news" data-testid="en-news">
            News
          </NavDropdown.Item>
          <NavDropdown.Item href="#en-sensitive-may">
            Sensitive may
          </NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="日本語" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#ja-news">ニュース</NavDropdown.Item>
          <NavDropdown.Item href="#ja-sensitive-may">裏may</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default RedichanNav;
