import styled from "styled-components"

export const sectionMiddle = styled.section`
    width: 100%;
    margin: 70px 0;

    .form-register{
        
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .form-sender{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 90%;
        
    }
    
    input{
        border: 0;
        outline: none;
        height: 40px;
        width: 400px;
        border-radius: 5px;
        padding-left: 5px;
        margin-right: 10px;
        font-size: 16px;
    }
    button{
        height: 41px;
        color: white;
        background: #000;
        border: 1px solid #000;
        border-radius: 5px;
        margin-top: -1px;
        width: 71px;
        font-size: 16px;
    }
    
    h1{
        font-size: 50px;
        margin-bottom: 40px;
        text-align: center;
        color: #fff;
    }
    span{
        font-size: 20px;
        margin-top: 20px;
        color: white;
    }

    @media screen and (max-width: 900px) {
        h1{
            font-size: 30px;
            margin-bottom: 40px;
            text-align: center;
            color: #fff;
        }
    }

    @media screen and (max-width: 600px) {
        .form-sender{
            flex-direction: column;
        }

        input{
            width: 100%;
            margin-bottom: 10px
        }
        h1{
            font-size: 25px;
        }
    }
`
