import styled from 'styled-components';

export const Container = styled.div`
    height: calc(100vh - 100px);
    width: 100%;
    display: inline-flex;
    margin-top: 100px;
    justify-content: space-between;
    border: 5px solid red;

    @media only screen and (max-width: 900px){
        flex-direction: column;
        height: calc(2 * (100vh - 100px))
    }
`;

export const Ad = styled.div`
    width: 50%;
    margin: 2%;
    display: inline-block;
    border: 5px solid red;
    overflow: scroll;

    @media only screen and (max-width: 900px) {
        width: 100%;
        height: 50%;
        margin: 0px;
    }

    >p {
        font-size: 20px;
        line-height: 1.3em;
        margin: 0.3%;
        padding: 0.3%;
        font-family: Gill Sans Extrabold, sans-serif;
    }
`;

export const Figure = styled.img`
    width: 60%;
    height: 30%;
    margin-right: 1.5em;
    margin-bottom: 1.5em;
    float: left;
`;

export const Info = styled.div`
    width: 50%;
    margin: 1%;
    display: inline-block;
    border: 5px solid green;

    @media only screen and (max-width: 900px){
        width: 100%;
        height: 50%;
        margin: 0px;
    }
`;
