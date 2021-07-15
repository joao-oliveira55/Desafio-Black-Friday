import styled from "styled-components"

export const main = styled.main`
    width: 100%;
    background-image: url(${process.env.PUBLIC_URL + '/image/Background.png'});
    background-size: cover;
`
export const sectionTop = styled.section`
    width: 100%;

    div{
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 90px;
    }
    
    img{
        width: 80%;
        max-width: 700px;
    }
`

export const sectionBottom = styled.section`
    width: 100%;

    .products{
        width: 90%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
    }
    
    img{
        width: 90%;
        max-width: 400px;
        margin:0
    }

    @media screen and (max-width: 600px) {
        .products{
            flex-wrap: wrap
        }
        
        .product{
            width: 50%;
            display: flex;
            justify-content: center;
        }
    }
`

