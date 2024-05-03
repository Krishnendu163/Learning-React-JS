import Header from "./components/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";

function App() {
  return (
    <div>
      <Header />
      <main>
        <section className="full_width Usp_sec">
          <div className="container">
            <ul>
              <CoreConcept
                img={uspImg}
                title="Title 1"
                para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, tempora."
              />
              <CoreConcept
                img={components}
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
