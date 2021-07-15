import styled from "styled-components"

export const Footer = styled.footer`
    width: 100%;
    background-color: #171923;
    display: flex;
    justify-content:center;

    img{
        width: 170px;
        padding: 10px;
    }

    @media screen and (max-width: 600px) {
        img{
            width: 130px;
        }
    }
`