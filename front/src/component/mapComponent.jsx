import React, { useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = () => {
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
      );
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
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh",
      }}
    >
      <div style={{ width: "60vw", height: "60vh" }}>
        <div style={{ margin: "20px" }}>
          <input
            type="text"
            value={address}
            onChange={handleAddressChange}
            placeholder="Entrez votre adresse"
            style={{
              width: "300px",
              padding: "10px",
              fontSize: "1em",
              marginBottom: "10px",
            }}
          />
          <input
            type="text"
            value={city}
            onChange={handleCityChange}
            placeholder="Entrez votre ville"
            style={{
              width: "300px",
              padding: "10px",
              fontSize: "1em",
              marginBottom: "10px",
            }}
          />
          <input
            type="text"
            value={postalCode}
            onChange={handlePostalCodeChange}
            placeholder="Entrez votre code postal"
            style={{
              width: "300px",
              padding: "10px",
              fontSize: "1em",
              marginBottom: "10px",
            }}
          />
          <button
            onClick={getCoordinates}
            style={{ padding: "10px 20px", fontSize: "1em", cursor: "pointer" }}
          >
            Obtenir les coordonnées
          </button>
          <button
            onClick={handleGeolocation}
            style={{ padding: "10px 20px", fontSize: "1em", cursor: "pointer", marginLeft: "10px" }}
          >
            Géolocalisation
          </button>
        </div>
        <MapContainer
          center={[43.6835848, 7.2273575]}
          zoom={15}
          style={{ width: "100%", height: "100%", borderRadius: "50px" }}
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
                  fillOpacity: 0.2, // Transparence du remplissage
                }}
              />
            </>
          )}
        </MapContainer>
        <div style={{ marginTop: "20px" }}>
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
          <p>Bâtiments : {environmentData.building ? "Présentes" : "Absentes"}</p>
          <p>Tours : {environmentData.tower ? "Présentes" : "Absentes"}</p>
          <p>Zones industrielles : {environmentData.industrial ? "Présentes" : "Absentes"}</p>
          <p>Zones résidentielles : {environmentData.residential ? "Présentes" : "Absentes"}</p>
          <p>Routes : {environmentData.highway ? "Présentes" : "Absentes"}</p>
          <p>Voies ferrées : {environmentData.railway ? "Présentes" : "Absentes"}</p>
          <p>Barrage : {environmentData.dam ? "Présentes" : "Absentes"}</p>
          <p>Réservoirs : {environmentData.reservoir ? "Présentes" : "Absentes"}</p>
          <p>Décharges : {environmentData.landfill ? "Présentes" : "Absentes"}</p>
          <p>Zones inondables : {environmentData.floodplain ? "Présentes" : "Absentes"}</p>
        </div>
      </div>
    </div>
  );
};

export default MapComponent;