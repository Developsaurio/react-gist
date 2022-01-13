import React from 'react'
import styled from 'styled-components';
import { colors } from '../../Theme';

const Container = styled.div`
    width: 280px;
    height: 400px;
    border-radius: 8px;
    background: ${colors.transparent};
    cursor: pointer;
    -webkit-box-shadow: 3px 4px 9px 2px ${colors.shadow}; 
	box-shadow: 3px 4px 9px 2px ${colors.shadow};
    h2{
        color:${colors.secondary};
    }
    p{
        color:${colors.primary};
    }
    &:hover{
        border: 5px solid ${colors.clear};
    }
`;

const Card = ({dark, disabled}) => {

    return (
        <Container>
            <h2>CARD title</h2>
            <p>CARD description</p>
        </Container>
    )
};

export default Card;