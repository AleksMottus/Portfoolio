import React, { useRef, useState, useContext } from "react";
import "./kontakt.css";
import telefon from "../../pildid/phone.jpg";
import email from "../../pildid/email.png";
import koht from "../../pildid/location.jpg";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

const Kontakt = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_qfv5q88",
        "template_0cz5spk",
        formRef.current,
        "_o5Nzf505XhmxMcHV"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="k">
      <div className="k-bg"></div>
      <div className="k-wrapper">
        <div className="k-left">
          <h1 className="k-title"> Võta ühendust!</h1>
          <div className="k-info">
            <div className="k-info-item">
              <img className="k-icon" src={telefon} alt="" />
              +372 58512730
            </div>
            <div className="k-info-item">
              <img className="k-icon" src={email} alt="" />
              aleksmottus0@gmail.com
            </div>
            <div className="k-info-item">
              <img className="k-icon" src={koht} alt="" />
              Eesti, Tartu
            </div>
          </div>
        </div>
        <div className="k-right">
          <p className="k-desc">
            Kui on mingi küsimus või pakkumine minule võib alati kirjutada või helistada! Vastan nii kiirelt kui võimalik. 
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Nimi"
              name="user_name"
            ></input>
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Küsimus"
              name="user_subject"
            ></input>
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Email"
              name="user_email"
            ></input>
            <textarea
              style={{ backgroundColor: darkMode && "#333" }}
              rows="5"
              placeholder="Sõnum"
              name="sonum"
            />
            <button>Saada</button>
            {done && "Aitäh Kirjutamast!"}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Kontakt;
