import React from 'react'
import {
    Header,
    Container,
    Side,
    Hamburger,
    Searcher,
    Menu,
    MenuItem,
    SideNav
} from './styles';
import Search from './Search';

const Navbar = ({dark}) => {

    return (
        <>
        <Header dark={dark}>
            <Container>
                <Hamburger>
                    <label for="btn-menu">☰</label>
                </Hamburger>
                <Searcher>
                    <Search />
                    <input 
                    placeholder="Search…" 
                    type="text" 
                    aria-label="search" 
                    />
                </Searcher>
                <Menu>
                    <MenuItem>switch Dak mode</MenuItem>
                    <MenuItem>Profile Picture</MenuItem>
                </Menu>
            </Container>
        </Header>

        <input type="checkbox" id="btn-menu"/>

        <Side className="container-menu">
            <div className="cont-menu">
                <SideNav>
                    <a href="/">Home</a>
                </SideNav>
                <label for="btn-menu">✖️</label>
            </div>
        </Side>
      
        </>
    )
};

export default Navbar;