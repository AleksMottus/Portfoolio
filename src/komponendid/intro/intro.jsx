import React from "react";
import "./intro.css";
import Me from "../../pildid/minaA.png";
const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Tere, Mina olen </h2>
          <h1 className="i-name">Aleks Mõttus</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">HTML CSS JS</div>
              <div className="i-title-item">Node js</div>
              <div className="i-title-item">React</div>
            </div>
          </div>
          <p className="i-desc">
            Olen õppinud kasutama HTML ; CSS ; Javascripti ; Node.js-i , samuti
            GitHub keskkonda. Olen õppimisvalmis ja väga suure tahtmisega
            töötada IT-valdkonnas. Meeldib ennast täiustada ja olen alati valmis
            juurde õppima. Olen õppinud kasutama ka Reacti Udemy tasulisel
            koolitusel. Otsin võimalust ,et saada kogemust kuidas on töötada web-developerina. 
            Ei kohku ühegi probleemi ees, sest probleemid on ju lahendamiseks.
          </p>
          <svg
            width="75"
            height="75"
            viewBox="0 0 75 75"
            fill="none"
            stroke="black"
            className="i-scroll"
            xlms="http://www.w3.org/2000/svg"
          >
            <g id="scroll">
              <path
                id="Vector"
                d="M40.5 15L34.5 9L28.5 15"
                strokeWidth="3"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                id="Vector_2"
                d="M28.5 24L34.5 30L40.5 24"
                strokeWidth="3"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <g id="Group">
                <path
                  id="Vector_3"
                  d="M9 37.5H60"
                  strokeWidth="3"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <path
                id="Vector_4"
                d="M34.5 27V9"
                strokeWidth="2.9895"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <g id="Group_2">
                <path
                  id="Vector_5"
                  d="M9 27C9 12.918 20.418 1.5 34.5 1.5C48.5"
                  strokeWidth="3"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </g> 
          </svg>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} alt="" className="i-image" />
      </div>
    </div>
  );
};

export default Intro;
