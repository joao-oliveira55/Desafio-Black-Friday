import React from "react";
import * as S from './styled'
import "./index.css"

import Header from "../../components/Header"
import Footer from "../../components/Footer"
import BlackFriday from "../../components/formBlackFriday"

export default function Home() {
    
    return (
      <>
        <Header/>

        <S.main >
            <S.sectionTop className="content-midlle">
                <div className="banner-black-friday">
                    <img src="/image/Black-Friday.png" />
                </div>
            </S.sectionTop>

            <BlackFriday/>

            <S.sectionBottom className="content-bottom">
                <div className="products">
                    <div className="product">
                        <img src="/image/product_1.png" />
                    </div>
                    <div className="product">
                        <img src="/image/product_2.png" />
                    </div>
                    <div className="product">
                        <img src="/image/product_3.png" />
                    </div>
                </div>
            </S.sectionBottom>
        </S.main>

        <Footer />
      </>
    );
  }