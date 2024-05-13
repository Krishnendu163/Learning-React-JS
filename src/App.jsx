import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcept/Coreconcepts.jsx";
import Tabbuttons from "./components/TabButton/TabButtons.jsx";

function App() {
  return (
    <div>
      <Header />
      <main>
        <CoreConcepts />
        <Tabbuttons />
      </main>
    </div>
  );
}
export default App;
