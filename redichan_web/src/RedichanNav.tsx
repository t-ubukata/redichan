import { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import consola from 'consola';
import LOGO from 'logo.svg';
import { APIOrigin } from 'redichanUtils';

interface Board {
  boardID: number;
  name: string;
  path: string;
}

const RedichanNav = (): JSX.Element => {
  const [enBoards, setEnBoards] = useState(new Array<Board>());

  useEffect(() => {
    const fetchEnBoards = async () => {
      const response = await fetch(`${APIOrigin}/api/en/boards`);
      const result = (await response.json()) as Array<Board>;
      setEnBoards(result);
    };
    fetchEnBoards().catch((err) => consola.error(err));
  }, []);

  const [jaBoards, setJaBoards] = useState(new Array<Board>());

  useEffect(() => {
    const fetchJaBoards = async () => {
      const response = await fetch(`${APIOrigin}/api/ja/boards`);
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
              <NavDropdown.Item as={Link} to={enBoard.path} key={enBoard.boardID}>
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
              <NavDropdown.Item as={Link} to={jaBoard.path} key={jaBoard.boardID}>
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
