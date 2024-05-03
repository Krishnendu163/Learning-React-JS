import Header from "./components/Header/Header.jsx";
import { CORE_CONCEPTS } from "./data.js";
import CoreConcept from "./components/CoreConcept.jsx";

function App() {
  return (
    <div>
      <Header />
      <main>
        <section className="full_width Usp_sec">
          <div className="container">
            <ul>
              <CoreConcept {...CORE_CONCEPTS[0]} />
              <CoreConcept
                img={CORE_CONCEPTS[2].img}
                title={CORE_CONCEPTS[2].title}
                para={CORE_CONCEPTS[2].para}
              />
              <CoreConcept {...CORE_CONCEPTS[2]} />
              <CoreConcept
                img={CORE_CONCEPTS[3].img}
                title={CORE_CONCEPTS[3].title}
                para={CORE_CONCEPTS[3].para}
              />
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
export default App;
