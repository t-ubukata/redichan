import { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import consola from 'consola';
import LOGO from './logo.svg';

interface Board {
  id: number;
  name: string;
  path: string;
}

const RedichanNav = (): JSX.Element => {
  const [enBoards, setEnBoards] = useState(new Array<Board>());

  useEffect(() => {
    const fetchEnBoards = async () => {
      const response = await fetch('http://localhost:4000/enBoards');
      const result = (await response.json()) as Array<Board>;
      setEnBoards(result);
    };
    fetchEnBoards().catch((err) => consola.error(err));
  }, []);

  const [jaBoards, setJaBoards] = useState(new Array<Board>());

  useEffect(() => {
    const fetchJaBoards = async () => {
      const response = await fetch('http://localhost:4000/jaBoards');
      const result = (await response.json()) as Array<Board>;
      setJaBoards(result);
    };
    fetchJaBoards().catch((err) => consola.error(err));
  }, []);

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
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
            {enBoards.map((enBoard) => (
              <NavDropdown.Item as={Link} to={enBoard.path} key={enBoard.id}>
                {enBoard.name}
              </NavDropdown.Item>
            ))}
          </NavDropdown>
          <NavDropdown
            title="日本語"
            id="navbarScrollingDropdown"
            data-testid="ja-boards"
          >
            {jaBoards.map((jaBoard) => (
              <NavDropdown.Item as={Link} to={jaBoard.path} key={jaBoard.id}>
                {jaBoard.name}
              </NavDropdown.Item>
            ))}
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default RedichanNav;
