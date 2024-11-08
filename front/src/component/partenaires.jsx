import React from "react";
import "./partenaires.css";

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
                Ou prenez contacts avec nos partenaires.
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
                    <p className="name">Pompier</p>
                    <p className="num">18</p>
                    
                    <div className="desc">
                        <p>Incendies, Personnes en danger, Risques chimique.</p>
                    </div>
                    <div className="img"></div>
                </div>
                <div className="zone_num" id="num2">
                    <p className="name">Police</p>
                    <p className="num">17</p>
                 
                    <div className="desc">
                        <p>Vol, Violences, Conflit, Menaces, Accident de la routes. </p>
                    </div>
                    <div className="img"></div>
                </div>
                <div className="zone_num" id="num3">
                    <p className="name">SAMU</p>
                    <p className="num">15</p>
                   
                    <div className="desc">
                        <p>A contacter si : Malaise, Blessures importantes, Crise médicale, Besoin d'Ambulance. </p>
                    </div>
                    <div className="img"></div>
                </div>
                <div className="zone_num" id="num4">
                    <p className="name">Urgence Handicap - Par SMS -</p>
                    <p className="num">114</p>
                   
                    <div className="desc">
                        <p>Dédié aux personnes sourdes ou malentendantes.</p>
                    </div>
                    <div className="img"></div>
                </div>
                <div className="zone_num" id="num5">
                    <p className="name">Numéro d'Urgence Européen</p>
                    <p className="num">112</p>
                
                    <div className="desc">
                        <p>A contacter si : Urgence depuis toute l'Europe.</p>
                    </div>
                       <div className="img"></div>
                </div>
            </div>

            <div className="col2">
                <p className="titre">Communications</p>
                <p className="description">
                    Tenez vous informer de la situation.
                </p>
                <div className="radio">
                    <p className="name">Station de Radio :</p>
                   
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
                    <p className="name">Liens Utiles :</p>
                    
                    <div className="zone_lien" id="lien1"> 
                        <p className="name"> Préfecture des Alpes-Maritimes :</p>
                        <p className="texte"> 
                        <a href="http://www.alpes-maritimes.pref.gouv.fr/" 
                    target="_blank">Lien</a>
                        </p>
                    
                    </div>
                    <div className="zone_lien" id="lien2"> 
                        <p className="name"> Météo France :</p>
                       
                        <p className="texte"> <a href="https://meteofrance.com/previsions-meteo-france/alpes-maritimes/6" 
                    target="_blank">Lien</a></p>
                      
                    </div>

                    <div className="reseaux">
            <p> Réseaux Sociaux : </p>
            <div className="reseau" id="reseau1"> 
                <p className="name"> Préfecture des Alpes-Maritimes</p>
              
                <p className="texte"> @Prefet06 </p>
                
            </div>
            <div className="reseau" id="reseau2"> 
                <p className="name"> Alerte Météo Alpes-Maritimes</p>
             
                <p className="texte"> @VigiMeteo </p>
               
            </div>
            <div className="reseau" id="reseau3"> 
                <p className="name"> Sapeurs Pompier des Alpes-Maritimes</p>
                <p className="texte"> @SDIS06 </p>
            </div>

            <div className="reseau" id="t1">
                    <p className="name">Partage les bonnes pratique :</p>
                    <p className="texte"> <a href="https://vm.tiktok.com/ZGdNjPGFU/" 
                    target="_blank">Maître de la "Préparation"</a></p>
                    <p className="texte"> <a href="https://vm.tiktok.com/ZGdNj9rNw/" 
                    target="_blank">Les éléments</a></p>
                </div>

            
        </div>

        

        </div>
            </div>

            <div className="col3">
                <p className="titre">Assistance</p>
                <p className="description">
                    Trouvez de l'aide auprès de nos partenaires.
                </p>
                <div className="assistance" id="cas1"> 
                <a href="https://www.topizy.fr/content/23-electricite" 
                    target="_blank">
                    <button type="submit" className="btn"> Eléctricité / Eclairage </button>
                    </a>
                </div>
                <div className="assistance" id="cas2"> 
                <a href="https://www.topizy.fr/content/25-chauffage" 
                    target="_blank">
                    <button type="submit" className="btn"> Chauffage </button></a>
                </div>
                <div className="assistance" id="cas3"> 
                    <a href="https://www.topizy.fr/content/22-plomberie" 
                    target="_blank">
                        <button type="submit" className="btn"> Plomberie </button>
                    </a>
                </div>
                <div className="assistance" id="cas4"> 
                    <a href="https://www.topizy.fr/content/26-electro" 
                    target="_blank"><button type="submit" className="btn"> Eléctroménager </button></a>
                </div>
                <div className="assistance" id="cas5"> 
                    <a href="https://www.topizy.fr/content/24-serrurerie" 
                    target="_blank"><button type="submit" className="btn"> Serrurerie </button></a>
                </div>
                <div className="assistance" id="cas6"> 
                    <a href="https://www.topizy.fr/content/26-electro" 
                    target="_blank"><button type="submit" className="btn"> Eléctronique / Hi-tech </button></a>
                </div>

            <div className="Engagement">
                <p>Apporter son aide en période crise:</p>
                <a href="https://assegr.nicecotedazur.org/devenir-benevole/" className="lien_engagement" target="_blank">Devenir Bénévole</a>
            </div>

            <div className="Utile">
                <p>Jeux pour vos enfants :</p>
                <a href='/Applications/Documents/Hackathon-24/UrgencePrevoyance/front/src/assets/sarah/protegeToi.pdf' className="lien_docs" id="1" target="_blank">Document PDF</a>
                <a href="/src/assets/Prévention.pdf" className="lien_docs" id="2" target="_blank" rel="noopener noreferrer">
                Document PDF
                </a>
                <a href="/src/assets/mots_fléchées.pdf" className="lien_docs" id="3" target="_blank" rel="noopener noreferrer">
                Document PDF
                </a>
                </div>

            <div className="Quizz">
                <p>Quizz :</p>
                <a href="http://localhost:5173/Quiz" className="lien_quizz" id="1">Quizz 1</a>
                <a href="#" className="lien_quizz" id="2">Quizz 2</a>
                <a href="#" className="lien_quizz" id="3">Quizz 3</a>
            </div>

            </div>

            

        </div>


        <div className="ContactUs">
            <button type="submit" className="btn">Nous Contactez</button>
        </div>

    </div>

    <div className="footer">
    </div>

    </div>

   
  );
};

export default PagePartenaires;