import styled from 'styled-components';

export const HeaderWrapper = styled.header`
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    position: fixed;
    background: rgba(0,0,0,0.1);
`;

export const Logo = styled.div`
    font-size: 2rem;
    font-family: sans-serif;
    letter-spacing: 2px;
`;

export const Link = styled.a`
    padding: 0 10px;
    margin: 0 5px;
    color: black;
    text-decoration:none;  
    font-size: 1.1rem;
    
    &:after {
        display: block;
        content: '';
        border-bottom: 1px solid black;
        transform: scaleX(0);
        transition: transform 250ms ease-in-out;
    }

    &:hover:after {
        transform: scaleX(1.5);
    }

`;
export const LinkWrapper = styled.div`
    display: flex;
`;
