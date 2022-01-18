import React from 'react';
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
import SearchIcon from '../../resources/icons/SearchIcon';
import UserIcon from '../../resources/icons/UserIcon';
import SwitchButton from '../SwitchButton/SwitchButton';

const Navbar = ({dark, disabled, setDark}) => {

    return (
        <>
        <Header dark={dark}>
            <Container>
                <Hamburger dark={dark}>
                    <label htmlFor="btn-menu">☰</label>
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
                    <MenuItem onClick={()=>setDark(!dark)}>
                        <SwitchButton 
                        disabled={disabled} 
                        active={dark} 
                        />   
                    </MenuItem>
                    <MenuItem dark={dark}> 
                        <p>{ dark ? 'Light mode' : 'Dark mode' }</p>
                    </MenuItem>
                    <MenuItem>
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
                <label htmlFor="btn-menu">✖️</label>
            </div>
        </Side>
      
        </>
    )
};

export default Navbar;