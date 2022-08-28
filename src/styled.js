import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Li = styled.li`
    list-style: none;
    font-size:16px;
    width:16vw;
    height:4vh;
    text-align: center;
    margin-left:-1.3vw;
`;

export const Links = styled(Link)`
    font-size:20px;
    list-style: none;
`;

export const Ul = styled.ul`
    display:flex;
    justify-content: space-evenly;
`;

export const Section = styled.section`
    max-width:1340px;
    width:100%;
    display:flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

export const Div = styled.div`
    width:18vw;
    display:flex;
    flex-direction: column;
    margin-left:-10px;
    margin-bottom:5px;
    margin-top:5px;
    li:hover{
        cursor: pointer;
        font-size:16px;
        font-weight: bold;
    }
    img:hover{
        cursor:pointer;
        border:solid;
        border-color: #f72585;
        border-style:inset;
    }
`

export const h1 = styled.h1`
    display:flex;
    justify-content:center;
    font-size:32px;
    color: #e63946;
`;

export const img = styled.img`
    margin-left: -0.5vw;
    margin-top:-6px;
`

