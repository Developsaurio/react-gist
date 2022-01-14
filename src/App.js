import Card from './components/Card';
import styled from 'styled-components';
import mock from './resources/youtube-videos-mock.json';
import { device } from './Theme';

const Container = styled.div`
    text-align: center;
    margin-bottom: 40px;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 350px);
    grid-gap: 20px;
    justify-content: center;
    width: 100%;

    @media ${device.tablet} { 
      grid-template-columns: repeat(auto-fill, 280px);
    }
`;
function App({dark}) {
  return (
    <>
      <Container >
        <h1>Welcome to the Challenge!</h1>
      </Container>

      <Grid>
        { mock.items.map((item)=> (
          <Card data={item.snippet} key={item.etag}/> 
          ))
        }
      </Grid>
    </>
  );
}

export default App;
