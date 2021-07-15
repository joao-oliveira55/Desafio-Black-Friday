import React, {useState} from "react";
import * as S from './styled'

export default function Header() {
    const [ email, setEmail ] = useState('')

    function handleEmail (){
        localStorage.setItem('emailBlackFriday', email)
    }
    
    return (
        <S.sectionMiddle className="content-midlle">
            <div className="form-register">
                <h1>Sign up for black friday and receive promotions</h1>
                <div className="form-sender">
                    <input type="email" value={email} required placeholder="Email" onChange={e => setEmail(e.target.value)} />
                    <button onClick={handleEmail}>Submit</button>
                </div>
            </div>
        </S.sectionMiddle>
    );
  }