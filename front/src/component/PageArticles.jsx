import React, { useState } from 'react';
import './PageArticles.css';
import imgEau from "../assets/Eau.jpg";
import imgIncendie from "../assets/incendie.jpg";
import imgSeisme from "../assets/seisme.jpg";

function PageArticles() {
  const [backgroundColor, setBackgroundColor] = useState("#FFF");
  const [selectedRisk, setSelectedRisk] = useState(null);
  const [isArticleOpen, setIsArticleOpen] = useState(true); // Contrôle l'affichage de l'article

  const handleClick = (type) => {
    setSelectedRisk(type);
    switch (type) {
      case "eau":
        setBackgroundColor("#30475E");
        break;
      case "feu":
        setBackgroundColor("#F05454");
        break;
      case "terre":
        setBackgroundColor("#D79C2A");
        break;
      default:
        setBackgroundColor("#E8E8E8");
    }
  };

  const toggleArticle = () => {
    setIsArticleOpen((prev) => !prev); // Bascule l'état de l'article
  };

  return (
    <>
      <h1 style={{paddingTop: "40px"}}>Le saviez vous</h1>
      <div className="Page_Articles" style={{ backgroundColor }}>
        <div className="Paragraphe">
          {selectedRisk === null && (
            <p>
              Connaissez-vous les 3 plus grands risques de catastrophes sur la région PACA ?
            </p>
          )}
        </div>

        <div className="choix">
          <div onClick={() => handleClick("eau")}>
            <img src={imgEau} className="Inondation" alt="imgEau" />
          </div>
          <div onClick={() => handleClick("feu")}>
            <img src={imgIncendie} className="Incendies" alt="imgIncendie" />
          </div>
          <div onClick={() => handleClick("terre")}>
            <img src={imgSeisme} className="Seisme" alt="img_seisme" />
          </div>
        </div>

        {/* Bouton pour réduire ou afficher l'article */}
        {selectedRisk && (
          <button onClick={toggleArticle} className="toggleButton">
            {isArticleOpen ? "Réduire l'article" : "Afficher l'article"}
          </button>
        )}

        {/* Affichage conditionnel de l'article */}
        {isArticleOpen && (
          <div className={selectedRisk ? "support" : ""}>
            <div className="support_text">
              {selectedRisk === "eau" && (
                <div className="fadeIn">
                  <h1 className="Inondation">Les inondations</h1>
                  <h2 className="Inondation">Lors de fortes pluies, le risque est présent</h2>
                  <p className="Inondation">
                    Importance des mesures d’évacuation rapide : Une montée des eaux peut submerger une zone en quelques minutes seulement, surtout lors d’épisodes de crues soudaines...
                  </p>
                  <p className="Inondation">
                    Vigilance sur les crues : En France, <strong>1 logement sur 3</strong> se trouve en zone inondable...
                  </p>
                  <p className="Inondation">
                    Assurez la sécurité des habitations : Si vous habitez en zone inondable, placez vos biens précieux à un étage supérieur...
                  </p>
                  <p className="Inondation">
                    Aménagements anti-inondation : Des petits gestes comme dégager les gouttières, protéger les ouvertures...
                  </p>
                  <p className="Inondation">
                    Savoir où aller : En cas d’évacuation, dirigez-vous vers les hauteurs et éloignez-vous des zones à risques...
                  </p>
                </div>
              )}
              {selectedRisk === "feu" && (
                <div className="fadeIn">
                  <h1 className="Incendies">Les incendies</h1>
                  <h2 className="Incendies">Les causes des incendies et les conseils de prévention</h2>
                  <p className="Incendie">
                    En France, la majorité des feux de forêt sont d'origine humaine, qu'ils soient accidentels ou criminels...
                  </p>
                  <h2 className="Incendies">Mesures de prévention contre les incendies</h2>
                  <p className="Incendie">
                    <strong>Respecter les interdictions de feu</strong> : En période de sécheresse ou de vents forts, les feux sont souvent interdits...
                  </p>
                  <h2 className="Incendies">Statistiques d’incendies en France</h2>
                  <p className="Incendie">
                    En France, les incendies de forêt brûlent chaque année environ <strong>10 000 hectares</strong>...
                  </p>
                </div>
              )}
              {selectedRisk === "terre" && (
                <div className="fadeIn">
                  <h1 className="Seisme">Les séismes</h1>
                  <h2 className="Seisme">Les tremblements de terre en France : risques et prévention</h2>
                  <p className="Seisme">
                    En France, les séismes sont moins fréquents que dans certaines autres régions du monde...
                  </p>
                  <h2 className="Seisme">Mesures de prévention et de sécurité lors d'un séisme</h2>
                  <p className="Seisme">
                    <strong>Préparer son habitation</strong> : Dans les zones sismiques, il est recommandé de renforcer la structure des bâtiments...
                  </p>
                  <h2 className="Seisme">Contexte sismique en France</h2>
                  <p className="Seisme">
                    En France métropolitaine, le risque sismique est classé en zones allant de 1 à 5...
                  </p>
                  <h2 className="Seisme">Informations et alertes</h2>
                  <p className="Seisme">
                    Le Réseau National de Surveillance Sismique (RéNaSS) enregistre les activités sismiques...
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default PageArticles;
