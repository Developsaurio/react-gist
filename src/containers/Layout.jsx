import Navbar from '../components/Navbar';
import styled from 'styled-components';
import { colors } from '../Theme';

const Container = styled.div`
    padding-top: 70px;
    width: 95%;
    margin: 0 auto;
`;
const Background = styled.div`
    min-height: 100vh;
    background: ${({dark})=>(dark ? colors.primary : colors.disabled)};
    color: ${({dark})=>(dark ? colors.clear : colors.primary)};
`;

const Layout =({children, dark}) => {

  const light = {
    '--title': colors.secondary,
    '--description': colors.mid
  };

  const night = {
    '--title': colors.dark,
    '--description': colors.clear
  };

  return (
    <Background dark={dark}>
      <Navbar dark={dark}/>
     
      <Container style={dark ? night : light}>
        {children}
      </Container>
    </Background>
  );
}

export default Layout;