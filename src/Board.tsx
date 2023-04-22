import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import RedichanNav from 'RedichanNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Stack from 'react-bootstrap/Stack';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import consola from 'consola';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

interface Props {
  name: string;
}

interface Thread {
  id: number;
  poster: string;
  zeroPostTexts: Array<string>;
  attachmentPath: string;
  postNumber: number;
  UTCTimestamp: Date;
}

const Board = (props: Props): JSX.Element => {
  const { name } = props;
  let threadsURI = '';
  switch (name) {
    case 'enNews':
      threadsURI = 'http://localhost:4000/api/board/en/news/threads/latest';
      break;
    case 'jaNews':
      threadsURI = 'http://localhost:4000/api/board/ja/news/threads/latest';
      break;
    default:
      throw new Error('Invalid board name');
      break;
  }
  const location = useLocation();
  const [threads, setThreads] = useState(new Array<Thread>());

  useEffect(() => {
    const fetchThreads = async () => {
      const response = await fetch(threadsURI);
      const result = (await response.json()) as Array<Thread>;
      setThreads(result);
    };
    fetchThreads().catch((err) => consola.error(err));
  }, [location]);

  return (
    <div className="Board mx-auto">
      <RedichanNav />
      <Stack className="mb-5">
        {threads.map((thread) => (
          <Container className="bg-light border">
            <Row>
              <Col className="col-10">{thread.zeroPostTexts[0]}</Col>
              <Col> {thread.postNumber}</Col>
            </Row>
          </Container>
        ))}
      </Stack>
      <Navbar bg="light" variant="light" fixed="bottom">
        <Nav className="ms-auto">
          <Nav.Link href="#search">🔍</Nav.Link>
          <Nav.Link href="#start-a-thread">➕</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Board;
