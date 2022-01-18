import React, {useState} from 'react'
import styled from 'styled-components';
import ItemList from '../components/ItemList';
import { device } from '../Theme';
import data from '../resources/youtube-videos-mock.json';

const Grid = styled.div`
    display: grid;
    grid-template-columns: 70% 30%;
    column-gap: 20px;
    height: 60vh;
        
    @media ${device.mobile} { 
        grid-template-columns: 100%;
    }
`;

const Container = styled.div`
    
    iframe{
        width: 100%;
        height: 100%;
    }
`;
const List = styled.div`
    height: 100%;
    display: grid;
    row-gap: 10px;
    align-items: baseline;
    grid-template-rows: repeat(auto-fit, 100px);
    overflow-y: auto;
`;
const Videos = () => {
    const [url, setUrl] = useState('https://www.youtube.com/watch?v=Q4Js9OEODHM&list=RDq5Dk9YBoxYE&index=17');
    const title = 'Video Tour | Welcome to Wizeline Guadalajara';

    console.log( 'DATA', data)
    return (
        <Grid>
            <Container>
                <iframe 
                src={url}
                title={title}
                frameborder="0" 
                allow="accelerometer; 
                        autoplay; 
                        clipboard-write; 
                        encrypted-media; 
                        gyroscope; 
                        picture-in-picture" 
                />
                <h3>Video Title</h3>
                <p>desription</p>
            </Container>

            <List>
                {
                !!data && data.items.map(item => 
                    <ItemList
                    key={item.etag}
                    title={item.snippet.title} 
                    description={item.snippet.description}
                    img={item.snippet.thumbnails.high.url}
                    // onClick={() => setUrl(data.url)}
                    />)
                }
            </List>
        </Grid>
    )
}

export default Videos
