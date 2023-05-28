import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
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
import { APIOrigin } from 'redichanUtils';

interface Post {
  id: number;
  comment: string;
  attachmentPath: string;
  UTCTimeStamp: Date;
}

const Thread = (): JSX.Element => {
  const { id } = useParams();
  // id's type is strig | undifined.
  if (id === undefined) {
    throw new TypeError(`Expected 'id' to be defined, but received undefined`);
  }

  const threadURI = `${APIOrigin}/api/thread/${id}`;

  const [thread, setThread] = useState(new Array<Post>());

  useEffect(() => {
    const fetchThread = async () => {
      const response = await fetch(threadURI);
      const result = (await response.json()) as Array<Post>;
      setThread(result);
    };
    fetchThread().catch((err) => consola.error(err));
  }, [id]);

  const postPath = `/thread/${id}/post`;

  return (
    <div className="mx-auto">
      <RedichanNav />
      <Stack className="mb-5">
        {thread.map((post) => (
          <Container key={post.id} className="bg-light border">
            <Row>
              <Col>{post.id}</Col>
            </Row>
            <Row>
              <Col className="post-text">{post.comment}</Col>
            </Row>
          </Container>
        ))}
        {/* br for layout. */}
        <br />
      </Stack>
      <Navbar bg="light" variant="light" fixed="bottom">
        <Nav className="ms-auto">
          <Nav.Link as={Link} to={postPath}>
            ➕
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Thread;
