import "./App.css";
import NavBar from "./components/NavBar.js";
import PhotoGrid from "./components/PhotoGrid.js";
import OnlineExperiencesText from "./components/OnlineExperiencesText.js";
import CardComponent from "./components/CardComponent.js";
import dataElements from "./data.js";

function App() {
  const CardComponents = dataElements.map((dataElement) => {
    return (
      <CardComponent
        key={dataElement.id}
        dataElement={dataElement}
        // image={dataElement.coverImg}
        // rating={dataElement.stats.rating}
        // reviewCount={dataElement.stats.reviewCount}
        // location={dataElement.location}
        // title={dataElement.title}
        // price={dataElement.price}
        // openSpots={dataElement.openSpots}
      />
    );
  });
  return (
    <div className="App">
      <NavBar />
      <PhotoGrid />
      <OnlineExperiencesText />
      <div className="Card">{CardComponents}</div>
    </div>
  );
}

export default App;
