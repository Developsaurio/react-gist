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
import SearchIcon from './components/SearchIcon';
import UserIcon from './components/UserIcon';
import SwitchButton from './components/SwitchButton';

const Navbar = ({dark, disabled}) => {

    return (
        <>
        <Header dark={dark}>
            <Container>
                <Hamburger dark={dark}>
                    <label for="btn-menu">☰</label>
                </Hamburger>
                <Searcher>
                    <SearchIcon />
                    <input 
                    placeholder="Search…" 
                    type="text" 
                    aria-label="search" 
                    />
                </Searcher>
                <Menu>
                    <MenuItem>
                        <SwitchButton 
                        disabled={disabled} 
                        active={dark ? true : false} 
                        />   
                    </MenuItem>
                    <MenuItem className='selected'>
                        <UserIcon dark={dark}/>
                    </MenuItem>
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