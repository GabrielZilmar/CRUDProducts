import styled from 'styled-components';

export const Container = styled.div`
    height: calc(100vh - 100px);
    width: 100%;
    display: inline-flex;
    margin-top: 100px;
    justify-content: space-between;
    border: 5px solid red;

    @media only screen and (max-width: 550px){
        flex-direction: column;
        height: calc(2 * (100vh - 100px))
    }
`;

export const Ad = styled.div`
    width: 50%;
    margin: 2%;
    display: inline-block;
    border: 5px solid red;

    @media only screen and (max-width: 550px){
        width: 100%;
        height: 50%;
        margin: 0px;
    }
`;

export const Info = styled.div`
    width: 50%;
    margin: 1%;
    display: inline-block;
    border: 5px solid green;

    @media only screen and (max-width: 550px){
        width: 100%;
        height: 50%;
        margin: 0px;
    }
`;
