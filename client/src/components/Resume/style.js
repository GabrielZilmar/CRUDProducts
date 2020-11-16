import styled from 'styled-components';

export const Container = styled.div`
    height: calc(100vh - 100px);
    width: 100%;
    display: inline-flex;
    margin-top: 100px;
    justify-content: space-between;

    @media only screen and (max-width: 988px){
        flex-direction: column;
        height: calc(2 * (100vh - 100px))
    }
`;

export const Ad = styled.div`
    width: 50%;
    margin: 2%;
    overflow: hidden;
    ::-webkit-scrollbar {
        width: 10px;
    }
    ::-webkit-scrollbar-track {
        background: #f1f1f1; 
        border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
        background: #888; 
        border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb:hover {
        background: #555; 
    }

    @media only screen and (max-width: 988px) {
        width: 100%;
        height: 50%;
        margin-top: 0 12px 0 0;
        overflow: auto;
    }
    
    >p {
        font-size: 2.5em;
        line-height: 1.3em;
        margin: 0.3%;
        padding: 0.3%;
        font-family: Gill Sans Extrabold, sans-serif;

        @media only screen and (max-width: 988px) {
            font-size: 1.5em;
        }
    }

    >h1 {
        text-align: center;
        font-family: Gill Sans Extrabold, sans-serif;
    }

    >button {
        padding: 1%;
        border-radius: 20px;
        width: 200px;
        font-size: 20px;
        display: flex;
        justify-content: center;
        margin: 0 auto;
        margin-bottom: 20px;
    }

    >img {
        width: 60%;
        height: 30%;
        margin-right: 1.5em;
        margin-bottom: 1.5em;
        float: left;
    }

    &:hover {
        overflow: auto;
    }

`;

export const Info = styled.div`
    width: 50%;
    margin: 1%;

    @media only screen and (max-width: 988px){
        width: 100%;
        height: 50%;
        margin-top: 12px 0 0 0;
    }

    >img {
        width: 100%;
        height: 100%;
        margin-bottom: 1.5em;
    }

`;
