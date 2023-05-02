import { useState } from 'react';
import { useForm } from 'react-hook-form';
import RedichanNav from 'RedichanNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import consola from 'consola';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

interface Props {
  boardName: string;
}

const StartThread = (props: Props): JSX.Element => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState('');

  return (
    <div className="StartThread mx-auto">
      <RedichanNav />
      <Stack className="mb-5">
      <Container>
      <form
        onSubmit={handleSubmit((text) =>
          fetch('http://localhost:4000/api/thread', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(text),
          })
        )}
      >
        <Row>
        <textarea {...register('text')} />
        </Row>
        <Row>
        <Col>
        <button aria-label="close" type="button">Close</button>
        </Col>
        <Col>
        <input type="submit" />
        </Col>
        </Row>
      </form>
      </Container>
      </Stack>
    </div>
  );
};

export default StartThread;
