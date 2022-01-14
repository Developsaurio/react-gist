import React from 'react'
import styled from 'styled-components';
import { colors, device} from '../../Theme';
import NotFound from '../../resources/noimage.png';

const Container = styled.div`
    width: 100%;
    height: 310px;
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;
    background: ${colors.transparent};
    -webkit-box-shadow: 3px 4px 9px 2px ${colors.shadow}; 
	box-shadow: 3px 4px 9px 2px ${colors.shadow};

    h2{
        color: var(--title);
        margin-top: 0px;

        @media ${device.tablet} { 
            margin-top: 8px;
        }
    }
    p{
        color: var(--description);
        margin-top: 8px;
    }

    &:hover{
        background: ${colors.clear};
        width: 102%;
        height: 305px;
        p{
                color: ${colors.gray};
        }
    }
`;

const Image = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 150px;
    background: ${colors.shadow};
    -webkit-box-shadow: 3px 4px 9px 2px ${colors.shadow}; 
	box-shadow: 3px 4px 9px 2px ${colors.shadow};

    img{
        width: auto;
        height: 150px;
    }

    .center{
        height: 100px;
    }
`;

const Content = styled.div`
    padding: 15px;
`;
const Card = ({data}) => {
    console.log('Data', data)
    const onClick = () => console.log(data);
    const img = '';
    const title = !!data && data.title;
    const description = !!data && data.title;
    const alt= !!data && data.title;


    return (
        <Container onClick={onClick}>
            <Image>
                <img 
                src={img ? img : NotFound} 
                alt={alt ? alt : 'Not_found'}
                className={!img && 'center'}
                />
            </Image>
            <Content>
                <h2>{title}</h2>
                <p>{description}</p>
            </Content>
        </Container>
    )
};

export default Card;