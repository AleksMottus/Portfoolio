import React from 'react'
import './about.css'
import cert from '../../pildid/cert.png'
import raba from '../../pildid/raba.jpg'

function About() {
  return (
    <div className='a'>
        <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img className='a-image' src={raba} alt="" />
            </div>
        </div>
        <div className="a-right">
            <h1 className='a-title'>Minust lähemalt</h1>
            <p className='a-sub'>
            Olen juba väiksest saati olnud huvitatud It-st, 14 aastaselt sai vennaga koos loodud esimene veebileht ja samuti ka esiemene algeline 2D rallimäng. Kuid elu valikud ei viinud mind ülikooli õppima It-d aga sellegi poolest olen sellest alast alati huvitunud.
            Minu elus mängib väga olulist rolli sport eriti võrkpall ja jalgpall. Jalgpalliga sai rohkem tegeletud nooremaseas ,kuid võrkpalli mängin siiani. 
                
            </p>
            <p className='a-desc'>
            Hariduselt oman magistrikraadi Eesti Maaülikoolis omandatud põllumajandussaaduste tootmise ja turustamise erialal, kuid tundsin ,et see töö ei ole pigem minule ja hakkasin algselt iseseisvalt õppima veebiarendust.
            Kuid kuna tundsin ,et mõistlikum oleks saada oma baasteadmised kelleltki kes seda oskab otsustasin liituda Nort Koolitusega kust sain oma algsed teadmised, kuid koolituse ajal ja peale koolitust olen koguaeg iseseisvalt juurde õppinud.

            </p>
            <div className="a-award">
                <img src={cert} alt="" className="a-award-img" />
                <div className="a-award-texts">
                    <h4 className='a-award-title'>Veebiarendaja baaskoolitus</h4>
                    <p className='a-award-desc'>
                        Veebiarenduse baaskoolitusel alustasime HTML, CSS põhialuste õppimisega. Õppisime ka kuidas kasutada Bootstrapi. Lõime oma veebilehti algselt lihtsamaid, kuid kursuse arenedes juba keerulisemaid.
                        Õppisime ka Javascripti aluseid ja kuidas luu dünaamiline veebileht Javascripti abil. Versioonihaldusvahenditest kasutasime GIT-i, andmebaasiks oli MongoDB ja töid avalikustasime Herko pilveteenuses.
                    </p>
                    <h4 className='a-award-title'>React</h4>
                    <p className='a-award-desc'>
                        Hetkel olen Udemy Reacti kursusel. Reacti sertifikaat lisandub kui kursus läbitud. Ka see portfoolio leht on loodud reacti abil.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About