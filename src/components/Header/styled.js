import styled from "styled-components"

export const header = styled.header`
    position: absolute;
    top: 0;
    left: 0;

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