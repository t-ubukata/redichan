import { useState, useEffect } from 'react';
import RedichanNav from 'RedichanNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import consola from 'consola';

interface Props {
  name: string
}

interface Thread {
  id: number,
  poster: string,
  zeroPost: string,
  attachmentPath: string,
  postNumber: number,
  UTCTimestamp: Date
}

const Board = (props: Props): JSX.Element => {
  const {name} = props;
  let threadsURI = '';
  switch(name) {
    case 'enNews':
      threadsURI = 'http://localhost:4000/boardEnNewsThreadsLatest';
      break;
    case 'jaNews':
      threadsURI = 'http://localhost:4000/boardJaNewsThreadsLatest';
      break;
    default:
      threadsURI = '';
      break;
  }

  const [threads, setThreads] = useState(new Array<Thread>());

  useEffect(() => {
    const fetchThreads = async () => {
      const response = await fetch(threadsURI);
      const result = (await response.json()) as Array<Thread>;
      setThreads(result);
    };
    fetchThreads().catch((err) => consola.error(err));
  }, []);

  /* const [jaThreadsLatest, setJaThreadsLatest] = useState(new Array<Thread>()); */
  /*  */
  /* useEffect(() => { */
  /*   const fetchJaThreadsLatest = async () => { */
  /*     const response = await fetch('http://localhost:4000/boardJaNewsThreadsLatest'); */
  /*     const result = (await response.json()) as Array<Thread>; */
  /*     setJaThreadsLatest(result); */
  /*   }; */
  /*   fetchJaThreadsLatest().catch((err) => consola.error(err)); */
  /* }, []); */

  // TODO: Use fetched data.
  return (
    <div className="Board mx-auto">
      <RedichanNav />
      <Stack className="mb-5">
        {threads.map((thread) => (
          <div className="bg-light border">
            {thread.zeroPost}
          </div>
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
