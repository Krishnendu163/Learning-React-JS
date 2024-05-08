import Header from "./components/Header/Header.jsx";
import { CORE_CONCEPTS } from "./data.js";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/tabButton.jsx";

function App() {
  let tabContent = "Please Click a Button";

  function handleSelect(selectedButton) {
    tabContent = selectedButton;
  }
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

        <section className="full_width tab cmn_pad">
          <div className="container">
            <div className="text_controller">
              <h2>Example</h2>
            </div>
            <menu>
              <TabButton onSelect={() => handleSelect("Components")}>
                Components
              </TabButton>
              <TabButton onSelect={() => handleSelect("JSX")}>JSX</TabButton>
              <TabButton onSelect={() => handleSelect("Props")}>
                Props
              </TabButton>
              <TabButton onSelect={() => handleSelect("State")}>
                State
              </TabButton>
            </menu>
            <p>{tabContent}</p>
          </div>
        </section>
      </main>
    </div>
  );
}
export default App;
