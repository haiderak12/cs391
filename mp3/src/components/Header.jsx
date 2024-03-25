import { NavLink } from 'react-router-dom';
import styled from "styled-components";

const AppHeader = styled.div `
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`;

const StyledHeader = styled.h1`
    text-decoration: underline;
    font-size: 50px;
`;

const StyledNav = styled.nav`
    font-size: 20px;
    text-align: center;
`;

function Header() {
    return (
        <AppHeader>
            <StyledHeader>My Portfolio</StyledHeader>
            <StyledNav>
                <NavLink to='/'>
                    About me
                </NavLink>
                <br></br>
                <NavLink to='/projects'>
                    Projects
                </NavLink>
            </StyledNav>
        </AppHeader>
    );
}

export default Header;