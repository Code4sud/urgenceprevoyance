import React from "react";
import "./partenaires.css";
import logo from "../assets/logopompier2.png";
import logo2 from "../assets/logopolice.jpg";
import logo3 from "../assets/logosamu.jpg";
const	handleClick = () => {navigate('/Quiz')}


const PagePartenaires = () => {
  
  return (
    <div className= "PagePartenaires">

    <div className= "header_partenaires" >
        <div className= "cadre1" >
            <h3>UrgencePrévoyance </h3>
        </div>

        <div className="cadre2" >
            <h1> Prévoir Demain </h1>
        </div>

        <div className="cadre3" >
            <div className="zone_texte">
                <p>
                N'hésitez pas à vous renseignez sur votre situation.
                Ou prenez contact avec nos partenaires.
                </p>
            </div>
        </div>
    </div>

    <div className="body_partenaires">
        <div className="colones">
            <div className="col1">
                <p className="titre">Numéros d'Urgence</p>
                <p className="description">
                    Prenez contact en cas d'urgence.
                </p>
                <div className="zone_num" id="num1">
                    <p className="name"> . Pompier </p>
                    <p className="num">18</p>
                    <div className="img">
                        <img src={logo} alt="pompierimg"></img>
                    </div>
                    <div className="desc">
                        <p>A contacter si : Incendie, Personne en danger, Risque industriel ou chimique.</p>
                    </div>
                </div>
                <div className="zone_num" id="num2">
                    <p className="name"> Police </p>
                    <p className="num">17</p>
                    <div className="img">
                        <img src={logo2} alt="policeimg"></img>c
                    </div>
                    <div className="desc">
                        <p>A contacter si : Vol, Violences, Conflit, Menaces, Accident de la routes. </p>
                    </div>
                </div>
                <div className="zone_num" id="num3">
                    <p className="name"> . SAMU </p>
                    <p className="num">15</p>
                    <div className="img">
                        <img src={logo3} alt="samuimg"></img>
                    </div>
                    <div className="desc">
                        <p>A contacter si : Malaise, Blessures importantes, Crise médicale, Besoin d'Ambulance. </p>
                    </div>
                </div>
                <div className="zone_num" id="num4">
                    <p className="name"> . Urgence Handicap - Par SMS -</p>
                    <p className="num">114</p>
                    <div className="img"></div>
                    <div className="desc">
                        <p>Dédié aux personnes sourdes ou malentendantes.</p>
                    </div>
                </div>
                <div className="zone_num" id="num5">
                    <p className="name"> . Numéro d'Urgence Européen </p>
                    <p className="num">112</p>
                    <div className="img"></div>
                    <div className="desc">
                        <p>A contacter si : Urgence depuis toute l'Europe.</p>
                    </div>
                </div>
            </div>

            <div className="col2">
                <p className="titre">Communications</p>
                <p className="description">
                    Tenez vous informer de la situation.
                </p>
                <div className="radio">
                    <p className="name"> . Station de Radio :</p>
                    <div className="img"></div>
                    <div className="zone_radio" id="radio1"> 
                        <p className="name"> France Bleu Azur</p>
                        <p className="station">92.3</p>
                    </div>
                    <div className="zone_radio" id="radio2"> 
                        <p className="name"> Radio Azur</p>
                        <p className="station">97.4</p>
                    </div>
                    <div className="zone_radio" id="radio3"> 
                        <p className="name"> RMC</p>
                        <p className="station">103.7</p>
                    </div>
                </div>

                
                
                <div className="liens">
                    <p className="name"> . Liens Utiles :</p>
                    <div className="img"></div>
                    <div className="zone_lien" id="lien1"> 
                        <p className="name"> Préfecture des Alpes-Maritimes :</p>
                        <div className="logo"></div>
                        <p className="texte"> LIEN</p>
                        <div className="qrCode"></div>
                    </div>
                    <div className="zone_lien" id="lien2"> 
                        <p className="name"> Météo France :</p>
                        <div className="logo"></div>
                        <p className="texte"> LIEN</p>
                        <div className="qrCode"></div>
                    </div>
                </div>
            </div>

            <div className="col3">
                <p className="titre">Assistance</p>
                <p className="description">
                    Trouvez de l'aide auprès de nos partenaires.
                </p>
                <div className="assistance" id="cas1"> 
                    <button type="submit" className="btn"> Eléctricité / Eclairage </button>
                </div>
                <div className="assistance" id="cas2"> 
                    <button type="submit" className="btn"> Chauffage </button>
                </div>
                <div className="assistance" id="cas3"> 
                    <button type="submit" className="btn"><a href="https://www.topizy.fr/content/22-plomberie" 
                    target="_blank">Plomberie</a></button>
                </div>
                <div className="assistance" id="cas4"> 
                    <button type="submit" className="btn"><a href="https://www.topizy.fr/content/26-electro" 
                    target="_blank">Eléctroménager</a></button>
                </div>
                <div className="assistance" id="cas5"> 
                    <button type="submit" className="btn"><a href="https://www.topizy.fr/content/24-serrurerie" 
                    target="_blank">Serrurerie</a></button>
                </div>
                <div className="assistance" id="cas6"> 
                    <button type="submit" className="btn"><a href="https://www.topizy.fr/content/26-electro" 
                    target="_blank">Eléctronique / Hi-tech</a></button>
                </div>
            </div>
        </div>

        <div class="bottom">
        <div className="Utile">
            <p>Documents Utiles :</p>
            <a href="#" className="lien_docs" id="1">Document PDF</a>
            <a href="#" className="lien_docs" id="2">Docuemnt PDF</a>
            <a href="#" className="lien_docs" id="3">Docuemnt PDF</a>
        </div>

        <div className="reseaux">
            <p> Réseaux Sociaux : </p>
            <div className="reseau" id="reseau1"> 
                <p className="name"> Préfecture des Alpes-Maritimes :</p>
                <div className="logo"></div>
                <p className="texte"> @Prefet06 </p>
                <div className="qrCode"></div>
            </div>
            <div className="reseau" id="reseau2"> 
                <p className="name"> Alerte Météo :</p>
                <div className="logo"></div>
                <p className="texte"> @VigiMeteo </p>
                <div className="qrCode"></div>
            </div>
            <div className="reseau" id="reseau3"> 
                <p className="name"> Sapeurs Pompier des Alpes-Maritimes :</p>
                <div className="logo"></div>
                <p className="texte"> @SDIS06 </p>
                <div className="qrCode"></div>
            </div>
        </div>

        <div className="Quizz">
            <p>Quizz :</p>
            <a href="#" className="lien_quizz" id="1">Quizz 1</a>
            <a href="#" className="lien_quizz" id="2">Quizz 2</a>
            <a href="#" className="lien_quizz" id="3">Quizz 3</a>
        </div>

        </div>

        <div className="ContactUs">
            <a href="http://localhost:5173/Contact" className="btn">Nous Contactez</a>
        </div>

    </div>

    <div className="footer">
    </div>

    </div>

   
  );
};

export default PagePartenaires;
