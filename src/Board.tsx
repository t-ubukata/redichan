import { useState, useEffect } from 'react';
import RedichanNav from 'RedichanNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import consola from 'consola';
import LOGO from './logo.svg';

interface EnThread {
  id: number,
  poster: string,
  zeroPost: string,
  attachmentPath: string,
  postNumber: number,
  UTCTimestamp: Date
}

interface JaThread {
  id: number,
  poster: string,
  zeroPost: string,
  attachmentPath: string,
  postNumber: number,
  UTCTimestamp: Date
}

const Board = (): JSX.Element => {
  const [enThreadsLatest, setEnThreadsLatest] = useState(new Array<EnThread>());

  useEffect(() => {
    const fetchEnThreadsLatest = async () => {
      const response = await fetch('http://localhost:4000/board/en-news/threads/latest');
      const result = (await response.json()) as Array<EnThread>;
      setEnThreadsLatest(result);
    };
    fetchEnThreadsLatest().catch((err) => consola.error(err));
  }, []);

  const [jaThreadsLatest, setJaThreadsLatest] = useState(new Array<JaThread>());

  useEffect(() => {
    const fetchJaThreadsLatest = async () => {
      const response = await fetch('http://localhost:4000/board/ja-news/threads/latest');
      const result = (await response.json()) as Array<JaThread>;
      setJaThreadsLatest(result);
    };
    fetchJaThreadsLatest().catch((err) => consola.error(err));
  }, []);

  // TODO: Use fetched data.
  return (
    <div className="Board mx-auto">
      <RedichanNav />
      <Container>
        <Row>
          <Col>This is a thread 0. This is a very very very long first line.</Col>
        </Row>
      </Container>
      <hr/>
      <Container>
        <Row>
          <Col>This is a thread 1. This is a very very very long first line.</Col>
        </Row>
      </Container>
      <hr/>
      <Container>
        <Row>
          <Col>This is a thread 2. This is a very very very long first line.</Col>
        </Row>
      </Container>
      <hr/>
      <Container>
        <Row>
          <Col>This is a thread 3. This is a very very very long first line.</Col>
        </Row>
      </Container>
      <hr/>
      <Container>
        <Row>
          <Col>This is a thread 4. This is a very very very long first line.</Col>
        </Row>
      </Container>
      <hr/>
      <Container>
        <Row>
          <Col>This is a thread 5. This is a very very very long first line.</Col>
        </Row>
      </Container>
      <hr/>
      <Container>
        <Row>
          <Col>This is a thread 6. This is a very very very long first line.</Col>
        </Row>
      </Container>
      <hr/>
      <Container>
        <Row>
          <Col>This is a thread 7. This is a very very very long first line.</Col>
        </Row>
      </Container>
      <hr/>
      <Container>
        <Row>
          <Col>This is a thread 8. This is a very very very long first line.</Col>
        </Row>
      </Container>
      <hr/>
      <Container>
        <Row>
          <Col>This is a thread 9. This is a very very very long first line.</Col>
        </Row>
      </Container>
      <hr/>
      <Container>
        <Row>
          <Col>This is a thread 10. This is a very very very long first line.</Col>
        </Row>
      </Container>
      <hr/>
      <Container>
        <Row>
          <Col>This is a thread 11. This is a very very very long first line.</Col>
        </Row>
      </Container>
      <hr/>
      <Container>
        <Row>
          <Col>This is a thread 12. This is a very very very long first line.</Col>
        </Row>
      </Container>
      <hr/>
      <Container>
        <Row>
          <Col>This is a thread 13. This is a very very very long first line.</Col>
        </Row>
      </Container>
      <hr/>
      <Container>
        <Row>
          <Col>This is a thread 14. This is a very very very long first line.</Col>
        </Row>
      </Container>
      <hr/>
      <Container>
        <Row>
          <Col>This is a thread 15. This is a very very very long first line.</Col>
        </Row>
      </Container>
      <hr/>

      <Navbar bg="dark" variant="dark" fixed="bottom">
          <Nav  className="me-auto">
            <Container>
              <Row>
                <Col>
                  <Nav.Link href="#search" className="ms-auto">🔍</Nav.Link>
                </Col>
                <Col>
                  <Nav.Link href="#start-a-thread" className="ms-auto">➕</Nav.Link>
                </Col>
              </Row>
            </Container>
          </Nav>
      </Navbar>
    </div>
  );
};

export default Board;
