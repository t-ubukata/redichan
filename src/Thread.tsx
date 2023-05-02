import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import RedichanNav from 'RedichanNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'Thread.css';
import Stack from 'react-bootstrap/Stack';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import consola from 'consola';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

interface Post {
  id: number;
  poster: string;
  text: string;
  UTCTimeStamp: Date;
}

const Thread = (): JSX.Element => {
  const { id } = useParams();
  // id's type is strig | undifined.
  if (id === undefined) {
    throw new TypeError(`Expected 'id' to be defined, but received undefined`);
  }

  const threadURI = `http://localhost:4000/api/thread/${id}`;

  const [thread, setThread] = useState(new Array<Post>());

  useEffect(() => {
    const fetchThread = async () => {
      const response = await fetch(threadURI);
      const result = (await response.json()) as Array<Post>;
      setThread(result);
    };
    fetchThread().catch((err) => consola.error(err));
  }, [id]);

  return (
    <div className="Board mx-auto">
      <RedichanNav />
      <Stack className="mb-5">
        {thread.map((post, index) => (
          <Container className="bg-light border">
            <Row>
              <Col>{index}</Col>
            </Row>
            <Row>
              <Col className="post-text">{post.text}</Col>
            </Row>
          </Container>
        ))}
      </Stack>
      <Navbar bg="light" variant="light" fixed="bottom">
        <Nav className="ms-auto">
          <Nav.Link href="#post">➕</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Thread;
