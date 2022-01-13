import Layout from './containers/Layout';
import Card from './components/Card';
import styled from 'styled-components';

const Container = styled.div`
    text-align: center;
`;

function App() {
  return (
    <Layout>
      <Container >
        <h1>Welcome to the Challenge!</h1>
      </Container>

      <Card/>
    </Layout>
  );
}

export default App;
