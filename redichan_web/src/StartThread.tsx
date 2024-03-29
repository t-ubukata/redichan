import { useForm } from 'react-hook-form';
import { useParams, Link } from 'react-router-dom';
import RedichanNav from 'RedichanNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'StartThread.css';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { APIOrigin } from 'redichanUtils';

interface InputData {
  content: string;
}
const StartThread = (): JSX.Element => {
  const { register, handleSubmit } = useForm();

  const { lang, shortBoardName } = useParams();
  const boardPath = `/board/${lang as string}/${shortBoardName as string}`;

  const onSubmit = async (inputData: object) => {
    const typedInputData = inputData as InputData;
    const postData = {
      boardName: 'enNews',
      userName: '',
      content: typedInputData.content,
    };
    await fetch(`${APIOrigin}/api/thread`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    })
      .then((response) => {
        if (response.ok) {
          window.location.href = boardPath;
        } else {
          alert(`${response.status} ${response.statusText}`);
        }
      })
      .catch((err) => alert(err));
  };

  return (
    <div className="mx-auto">
      <RedichanNav />
      <Stack className="mb-5">
        <Container>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Row>
              <textarea {...register('content')} data-testid="content-area" />
            </Row>
            <Row>
              <Col>
                <Link className="btn btn-dark cancel-button" to={boardPath}>
                  Cancel
                </Link>
              </Col>
              <Col>
                <input
                  className="btn btn-dark"
                  type="submit"
                  data-testid="submit-button"
                />
              </Col>
            </Row>
          </form>
        </Container>
      </Stack>
    </div>
  );
};

export default StartThread;
