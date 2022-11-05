import { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import consola from 'consola';
import LOGO from './logo.svg';

interface EnBoard {
  id: number
  name: string
  path: string
}

interface JaBoard {
  id: number
  name: string
  path: string
}

const RedichanNav = (): JSX.Element => {
  const [enBoards, setEnBoards] = useState(new Array<EnBoard>());

  useEffect(() => {
    const fetchEnBoards = async () => {
      const response = await fetch('http://localhost:4000/api/en-boards');
      const result = (await response.json()) as Array<EnBoard>;
      setEnBoards(result);
    };
    fetchEnBoards().catch((err) => consola.error(err));
  }, []);

  const [jaBoards, setJaBoards] = useState(new Array<JaBoard>());

  useEffect(() => {
    const fetchJaBoards = async () => {
      const response = await fetch('http://localhost:4000/api/ja-boards');
      const result = (await response.json()) as Array<JaBoard>;
      setJaBoards(result);
    };
    fetchJaBoards().catch((err) => consola.error(err));
  }, []);

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
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
              <NavDropdown.Item href={enBoard.path} key={enBoard.id}>
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
              <NavDropdown.Item href={jaBoard.path} key={jaBoard.id}>
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
