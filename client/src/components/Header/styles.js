import styled from 'styled-components';

export const HeaderWrapper = styled.header`
    height: 100px;
    width: 100%;
    z-index: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    position: fixed;
    background: rgba(105, 105, 105);
`;

export const Logo = styled.div`
    font-size: 2rem;
    font-family: sans-serif;
    letter-spacing: 2px;
    background: rgba(105, 105, 105);
    
    @media only screen and (min-width: 2200px) {
        font-size: 3em;
    }
`;

export const Link = styled.a`
    padding: 0 10px;
    margin: 0 5px;
    color: black;
    text-decoration:none;  
    font-size: 1.1rem;
    background: rgba(105, 105, 105);

    @media only screen and (min-width: 2200px) {
        font-size: 1.8em;
    }

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
    background: rgba(105, 105, 105);
`;
