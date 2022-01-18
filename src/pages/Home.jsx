import Card from '../components/Card';
import styled from 'styled-components';
import { device } from '../Theme';

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
const Home = ({data}) => {
  return (
    <>
      <Container >
        <h1>Welcome to the Challenge!</h1>
      </Container>

      <Grid>
        {data?.items.map((item)=> (          
          <Card data={item.snippet} key={item.etag}/> 
          ))
        }
      </Grid>
    </>
  );
}

export default Home;
