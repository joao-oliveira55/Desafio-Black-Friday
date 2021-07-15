import React, {useState} from "react";
import * as S from './styled'
const { v4: uuidv4 } = require('uuid');

export default function Header() {
    const [ email, setEmail ] = useState('')
    const [ messageForm, setMessageForm ] = useState('')

    function validateEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    function handleEmail (){
        if (validateEmail(email) === true){

            localStorage.setItem(uuidv4(), email)
            setMessageForm('Email successfully sent!!!')
            setEmail('')

        }else{

            setMessageForm('Invalid email, try again.')

        }
    }
    
    return (
        <S.sectionMiddle className="content-midlle">
            <div className="form-register">
                <h1>Sign up for black friday and receive promotions</h1>
                <div className="form-sender">
                    <input type="email" value={email} required placeholder="Email" onChange={e => setEmail(e.target.value)} />
                    <button onClick={handleEmail}>Submit</button>
                </div>
                <span>{messageForm}</span>
            </div>
        </S.sectionMiddle>
    );
  }