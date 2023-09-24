import { useState, useEffect } from 'react';
import RedichanNav from 'RedichanNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'Board.css';
import { Link } from 'react-router-dom';
import Stack from 'react-bootstrap/Stack';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import consola from 'consola';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
  APIOrigin,
  boardName2langName,
  boardName2shortBoardName,
} from 'redichanUtils';

interface Props {
  name: string;
}

interface Thread {
  threadID: number;
  firstComment: string;
  attachmentPath: string;
  postNumber: number;
  createdAt: Date;
}

const Board = (props: Props): JSX.Element => {
  const { name } = props;
  let threadsURI = '';
  switch (name) {
    case 'enNews':
      threadsURI = `${APIOrigin}/api/board/en/news/threads/latest`;
      break;
    case 'jaNews':
      threadsURI = `${APIOrigin}/api/board/ja/news/threads/latest`;
      break;
    default:
      throw new Error('Invalid board name');
  }

  const [threads, setThreads] = useState(new Array<Thread>());

  useEffect(() => {
    const fetchThreads = async () => {
      const response = await fetch(threadsURI);
      const result = (await response.json()) as Array<Thread>;
      setThreads(result);
    };
    fetchThreads().catch((err) => consola.error(err));
  }, [name]);

  const startThreadPath = `/board/${boardName2langName(
    name
  )}/${boardName2shortBoardName(name)}/start-thread`;

  return (
    <div className="mx-auto">
      <RedichanNav />
      <Stack className="mb-5">
        {threads.map((thread) => (
          <Container
            key={thread.threadID}
            className="bg-light border link-dark text-decoration-none"
            as={Link}
            to={`/thread/${thread.threadID as unknown as string}`}
          >
            <Row>
              <Col className="col-10 thread-title">{thread.firstComment}</Col>
              <Col>{thread.postNumber}</Col>
            </Row>
          </Container>
        ))}
        {/* br for layout. */}
        <br />
      </Stack>
      <Navbar bg="light" variant="light" fixed="bottom">
        <Nav className="ms-auto">
          {/* <Nav.Link href="#search">🔍</Nav.Link> */}
          <Nav.Link as={Link} to={startThreadPath}>
            ➕
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Board;
