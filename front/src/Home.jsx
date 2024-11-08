import React, { useRef } from "react";
import PageArticles from "./component/PageArticles";
import ArticleMap from "./component/articleMap";
import PageAccueil from "./component/PageAccueil";
import "./Home.css";
import PagePartenaires from "./component/partenaires";
import "./Home.css";

function Home() {
  const articlesRef = useRef(null);
  const mapRef = useRef(null);
  const partenairesRef = useRef(null);

  const scrollToRef = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div style={{ paddingTop: "80px" }}>
      <PageAccueil />
      <div style={{ marginTop : "40px",top: "10px", right: "10px", display:"flex", justifyContent:"space-around", alignItems:""}}>
        <button style={{width:"12em"}} onClick={() => scrollToRef(articlesRef)}>
          Scroll to Articles
        </button>
        <button style={{width:"12em"}} onClick={() => scrollToRef(mapRef)}>Scroll to Map</button>
        <button style={{width:"12em"}} onClick={() => scrollToRef(partenairesRef)}>
          Scroll to Partenaires
        </button>
      </div>
      <div ref={articlesRef}>
        <PageArticles />
      </div>
      <div ref={mapRef}>
        <ArticleMap />
      </div>
      <div ref={partenairesRef}>
        <PagePartenaires />
      </div>
    </div>
  );
}

export default Home;
