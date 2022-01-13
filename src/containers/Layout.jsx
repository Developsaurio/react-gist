import Navbar from '../components/Navbar';
import styled from 'styled-components';
import { colors } from '../Theme';

const Space = styled.div`
    height: 70px;
`;
const Container = styled.div`
    width: 90%;
    margin: 0 auto;
`;
const Background = styled.div`
    background: ${({dark})=>(dark ? colors.primary : colors.disabled)};
    color: ${({dark})=>(dark ? colors.clear : colors.primary)};
`;

const Layout =({children, dark}) => {
  return (
    <Background dark={dark}>
      <Navbar dark={dark}/>
      <Space />
      <Container>
        {children}
      </Container>
    </Background>
  );
}

export default Layout;