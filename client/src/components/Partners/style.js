import styled from 'styled-components';

export const Container = styled.div`
    width: 30vw !important;
    height: 20vh !important;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    margin: 40px auto;

    @media (max-width: 1200px){
        width: 40vw !important;
        height: 30vh !important;
    }

    @media (max-width: 600px){
        width: 70vw !important;
        height: 30vh !important;
    }

`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
`;
