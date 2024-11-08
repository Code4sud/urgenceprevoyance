import React, { useState, useRef, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./articleMap.css";

const ArticleMap = () => {
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [coordinates, setCoordinates] = useState(null);
  const [environmentData, setEnvironmentData] = useState({
    coastal: false,
    farmlands: false,
    woodlands: false,
    waterway: false,
    water: false,
    wetland: false,
    wood: false,
    scrub: false,
    cliff: false,
    hill: false,
    mountain_range: false,
    building: false,
    tower: false,
    industrial: false,
    residential: false,
    highway: false,
    railway: false,
    dam: false,
    reservoir: false,
    landfill: false,
    floodplain: false,
  });
  const mapRef = useRef();

    // Statuts des risques
    const [innondationStatus, setInnondationStatus] = useState(false);
    const [fireStatus, setFireStatus] = useState(false);
    const [seismeStatus, setSeismeStatus] = useState(false);

    // Adaptation des risques en fonction des données environnementales
    useEffect(() => {
        if (environmentData.floodplain || environmentData.waterway || environmentData.wetland || environmentData.water) {
        setInnondationStatus(true); // Risque d'inondation si la zone est inondable ou humide
        } else {
        setInnondationStatus(false);
        }

        if (environmentData.coastal || environmentData.farmlands || environmentData.scrub || environmentData.woodlands || environmentData.wood) {
        setFireStatus(true); // Risque d'incendie dans les zones boisées ou agricoles
        } else {
        setFireStatus(false);
        }

        if (environmentData.cliff || environmentData.hill || environmentData.mountain_range) {
        setSeismeStatus(true); // Risque sismique dans les zones de montagnes, collines ou falaises
        } else {
        setSeismeStatus(false);
        }
    }, [environmentData]);
  
    // Fonction pour générer l'information dynamique
    const getStatusInfo = () => {
      if (innondationStatus && fireStatus && seismeStatus) {
        return {
          title: "Tous les risques sont présents",
          details: "Risque d'inondation, de feu et de séisme dans cette zone. Soyez vigilant et suivez les recommandations locales."
        };
      } else if (innondationStatus && fireStatus) {
        return {
          title: "Risque d'inondation et de feu",
          details: "L'inondation et les incendies peuvent coexister dans certaines zones. Assurez-vous d'avoir un plan d'évacuation et un kit d'urgence."
        };
      } else if (innondationStatus && seismeStatus) {
        return {
          title: "Risque d'inondation et de séisme",
          details: "Les inondations peuvent entraîner des glissements de terrain et des secousses sismiques. Il est essentiel d'avoir un plan d'évacuation."
        };
      } else if (fireStatus && seismeStatus) {
        return {
          title: "Risque de feu et de séisme",
          details: "Les incendies et les séismes peuvent rendre certaines zones particulièrement dangereuses. Soyez préparé à des évacuations rapides."
        };
      } else if (innondationStatus) {
        return {
          title: "Risque d'inondation",
          details: "Les inondations peuvent submerger des zones entières, entrainer des coupures de courant et déstabiliser les infrastructures. Ayez un plan d'évacuation."
        };
      } else if (fireStatus) {
        return {
          title: "Risque de feu",
          details: "Le risque d'incendie est élevé dans cette région. Assurez-vous que vos habitats sont protégés et soyez attentif aux alertes locales."
        };
      } else if (seismeStatus) {
        return {
          title: "Risque de séisme",
          details: "Les séismes peuvent causer des dégâts considérables. Préparez-vous avec un kit d'urgence et sachez où vous protéger en cas de tremblement de terre."
        };
      } else {
        return {
          title: "Aucun risque n'est présent",
          details: "Aucun danger identifié dans cette région pour l'instant. Restez vigilant aux changements de conditions locales."
        };
      }
    };
  
    useEffect(() => {
      getStatusInfo();
    }, [innondationStatus, fireStatus, seismeStatus]);

    const statusInfo = getStatusInfo();

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handlePostalCodeChange = (e) => {
    setPostalCode(e.target.value);
  };

  const getCoordinates = async () => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${address},${city},${postalCode}`
      );
      const data = await response.json();
      if (data.length > 0) {
        const { lat, lon } = data[0];
        setCoordinates({ lat, lon });
        mapRef.current.setView([lat, lon]); // Centrer la carte sur les nouvelles coordonnées
        checkEnvironmentData(lat, lon);
      } else {
        alert("Adresse non trouvée");
      }
    } catch (error) {
      console.error("Erreur lors de la récupération des coordonnées:", error);
    }
  };

  const handleGeolocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCoordinates({ lat: latitude, lon: longitude });
          mapRef.current.setView([latitude, longitude], 15); // Centrer la carte sur la position
          checkEnvironmentData(latitude, longitude);
        },
        (error) => {
          alert("Erreur de géolocalisation: " + error.message);
        }
      )
    } else {
      alert("La géolocalisation n'est pas supportée par votre navigateur.");
    }
  };

  const checkEnvironmentData = async (lat, lon) => {
    const overpassUrl = `https://overpass-api.de/api/interpreter?data=[out:json];(
      way(around:500,${lat},${lon})[waterway];
      way(around:500,${lat},${lon})[natural=water];
      way(around:500,${lat},${lon})[wetland];
      way(around:500,${lat},${lon})[natural=wood];
      way(around:500,${lat},${lon})[landuse=forest];
      way(around:500,${lat},${lon})[scrub];
      way(around:500,${lat},${lon})[natural=cliff];
      way(around:500,${lat},${lon})[natural=hill];
      way(around:500,${lat},${lon})[natural=mountain_range];
      way(around:500,${lat},${lon})[building];
      way(around:500,${lat},${lon})[man_made=tower];
      way(around:500,${lat},${lon})[landuse=industrial];
      way(around:500,${lat},${lon})[landuse=residential];
      way(around:500,${lat},${lon})[highway];
      way(around:500,${lat},${lon})[railway];
      way(around:500,${lat},${lon})[man_made=dam];
      way(around:500,${lat},${lon})[reservoir];
      way(around:500,${lat},${lon})[landuse=landfill];
      way(around:500,${lat},${lon})[natural=floodplain];
      way(around:500,${lat},${lon})[natural=coastline];
    );out body;`;

    try {
      const response = await fetch(overpassUrl);
      const data = await response.json();
      const environmentData = {
        coastal: data.elements.some((el) => el.tags.natural === "coastline"),
        farmlands: data.elements.some((el) => el.tags.landuse === "farmland"),
        woodlands: data.elements.some((el) => el.tags.landuse === "forest"),
        waterway: data.elements.some((el) => el.tags.waterway),
        water: data.elements.some((el) => el.tags.natural === "water"),
        wetland: data.elements.some((el) => el.tags.wetland),
        wood: data.elements.some((el) => el.tags.natural === "wood"),
        scrub: data.elements.some((el) => el.tags.scrub),
        cliff: data.elements.some((el) => el.tags.natural === "cliff"),
        hill: data.elements.some((el) => el.tags.natural === "hill"),
        mountain_range: data.elements.some((el) => el.tags.natural === "mountain_range"),
        building: data.elements.some((el) => el.tags.building),
        tower: data.elements.some((el) => el.tags["man_made"] === "tower"),
        industrial: data.elements.some((el) => el.tags.landuse === "industrial"),
        residential: data.elements.some((el) => el.tags.landuse === "residential"),
        highway: data.elements.some((el) => el.tags.highway),
        railway: data.elements.some((el) => el.tags.railway),
        dam: data.elements.some((el) => el.tags["man_made"] === "dam"),
        reservoir: data.elements.some((el) => el.tags.reservoir),
        landfill: data.elements.some((el) => el.tags.landuse === "landfill"),
        floodplain: data.elements.some((el) => el.tags.natural === "floodplain"),
      };
      setEnvironmentData(environmentData);
    } catch (error) {
      console.error("Erreur lors de la vérification des données environnementales:", error);
    }
  };

  return (
    <>
    <div className="containertitle">
        <h1>Cherchez votre localisation</h1>
        <div className="containerborder">
          <div className="border"></div>
        </div>
    </div>




    <div className="container-article-map">
      <div className="article-map">
        <div style={{ margin: "20px" }}>
          <input
            className="input-address-article-map"
            type="text"
            value={address}
            onChange={handleAddressChange}
            placeholder="Entrez votre adresse"
          />
          <input
            type="text"
            value={city}
            onChange={handleCityChange}
            placeholder="Entrez votre ville"
            className="input-city-article-map"
          />
          <input
            type="text"
            value={postalCode}
            onChange={handlePostalCodeChange}
            placeholder="Entrez votre code postal"
            className="input-postal-code-article-map"
          />
          <button
            onClick={getCoordinates}
            className="button-article-map"
          >
            Obtenir les coordonnées
          </button>
          <button
            onClick={handleGeolocation}
            className="button-article-map"
            style={{ 
              marginLeft: "10px",
              marginRight: "auto",
            }}
          >
            Géolocalisation
          </button>
        </div>  
        <MapContainer
          center={[43.6835848, 7.2273575]}
          zoom={15}
          style={{ width: "105%", height: "100%", borderRadius: "15px", marginLeft: "-2.6%", marginRight: "-2.6%" }}
          ref={mapRef}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {coordinates && (
            <>
              <Marker position={[coordinates.lat, coordinates.lon]}>
                <Popup>
                  Adresse trouvée : {coordinates.lat}, {coordinates.lon}
                </Popup>
              </Marker>
              <Circle
                center={[coordinates.lat, coordinates.lon]}
                radius={500} // Rayon du cercle en mètres
                pathOptions={{
                  color: "red", // Couleur du contour du cercle (rouge)
                  fillColor: "red", // Couleur du remplissage du cercle (rouge)
                  fillOpacity: 0.2, // Transparence du   remplissage
                }}
              />
            </>
          )}
        </MapContainer>
        {/* <div style={{ marginTop: "px" }}>
          <p>Zones littorales : {environmentData.coastal ? "Présentes" : "Absentes"}</p>
          <p>Zones agricoles : {environmentData.farmlands ? "Présentes" : "Absentes"}</p>
          <p>Zones boisées : {environmentData.woodlands ? "Présentes" : "Absentes"}</p>
          <p>Cours d'eau : {environmentData.waterway ? "Présentes" : "Absentes"}</p>
          <p>Étendues d'eau : {environmentData.water ? "Présentes" : "Absentes"}</p>
          <p>Zones humides : {environmentData.wetland ? "Présentes" : "Absentes"}</p>
          <p>Forêts : {environmentData.wood ? "Présentes" : "Absentes"}</p>
          <p>Végétation dense : {environmentData.scrub ? "Présentes" : "Absentes"}</p>
          <p>Falaise : {environmentData.cliff ? "Présentes" : "Absentes"}</p>
          <p>Colline : {environmentData.hill ? "Présentes" : "Absentes"}</p>
          <p>Chaîne de montagnes : {environmentData.mountain_range ? "Présentes" : "Absentes"}</p>
          <p>Barrage : {environmentData.dam ? "Présentes" : "Absentes"}</p>
          <p>Réservoirs : {environmentData.reservoir ? "Présentes" : "Absentes"}</p>
          <p>Zones inondables : {environmentData.floodplain ? "Présentes" : "Absentes"}</p>
        </div> */}
      </div>
    </div>
    <div className="container-article-map">
          <div className="container-info-card">
            {/* <h2>{statusInfo.title}</h2>
            <p>{statusInfo.details}</p> */}
          </div>

        {/* Checklist de risques */}
        <div className="checklist-container">
        {innondationStatus && (
        <div className="checklist">
            <h3 className="namechecklist">Checklist Inondation</h3>
            <ul>
            <li>
                <label>
                <input type="checkbox" /> Kit d'urgence avec eau, vivres, médicaments et lampe de poche.
                </label>
            </li>
            <li>
                <label>
                <input type="checkbox" /> Surveillez les alertes météo et suivez les consignes des autorités.
                </label>
            </li>
            <li>
                <label>
                <input type="checkbox" /> Connaître les itinéraires d'évacuation.
                </label>
            </li>
            <li>
                <label>
                <input type="checkbox" /> Avoir un plan d'évacuation pour les zones à risque.
                </label>
            </li>
            </ul>
        </div>
        )}
        {fireStatus && (
        <div className="checklist">
            <h3 className="namechecklist">Checklist Incendie</h3>
            <ul>
            <li>
                <label>
                <input type="checkbox" /> Trousse d'urgence avec de l'eau, des masques et des objets essentiels.
                </label>
            </li>
            <li>
                <label>
                <input type="checkbox" /> Détecteur de fumée fonctionnel.
                </label>
            </li>
            <li>
                <label>
                <input type="checkbox" /> Un extincteur accessible et fonctionnel.
                </label>
            </li>
            <li>
                <label>
                <input type="checkbox" /> Connaître les itinéraires d'évacuation et avoir un point de rassemblement.
                </label>
            </li>
            </ul>
        </div>
        )}
        {seismeStatus && (
        <div className="checklist">
            <h3 className="namechecklist">Checklist Séisme</h3>
            <ul>
            <li>
                <label>
                <input type="checkbox" /> Identifier des zones sûres à l'intérieur de la maison.
                </label>
            </li>
            <li>
                <label>
                <input type="checkbox" /> Kit de survie avec des lampes de poche, de l'eau potable et des vivres.
                </label>
            </li>
            <li>
                <label>
                <input type="checkbox" /> Revoir les consignes à suivre après un séisme (éviter les routes, vérifier les dégâts).
                </label>
            </li>
            <li>
                <label>
                <input type="checkbox" /> Prévoir un moyen de communication d'urgence.
                </label>
            </li>
            </ul>
        </div>
        )}
        </div>
      </div>
    </>
  );
};

export default ArticleMap;