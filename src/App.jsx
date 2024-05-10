import Header from "./components/Header/Header.jsx";
import { CORE_CONCEPTS } from "./data.js";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/tabButton.jsx";
import { EXAMPLES } from "./data.js";
import { useState } from "react";

function App() {
  const [tabContent, updateval] = useState();

  function handleSelect(selectedButton) {
    updateval(selectedButton);
  }
  let dfltContnt = <div className="tab-content">Please select a topic.</div>;

  if (tabContent) {
    dfltContnt = (
      <div className="tab-content">
        <h3>{EXAMPLES[tabContent].title}</h3>
        <p>{EXAMPLES[tabContent].para}</p>
        <pre>
          <code>{EXAMPLES[tabContent].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <div>
      <Header />
      <main>
        <section className="full_width Usp_sec">
          <div className="container">
            <ul>
              {CORE_CONCEPTS.map((uspitem) => (
                <CoreConcept {...uspitem} />
              ))}
              {/* <CoreConcept
                img={CORE_CONCEPTS[2].img}
                title={CORE_CONCEPTS[2].title}
                para={CORE_CONCEPTS[2].para}
              />
              <CoreConcept {...CORE_CONCEPTS[2]} />
              <CoreConcept {...CORE_CONCEPTS[3]} /> */}
            </ul>
          </div>
        </section>

        <section className="full_width tab cmn_pad">
          <div className="container">
            <div className="text_controller">
              <h2>Example</h2>
            </div>
            <menu>
              <TabButton
                onSelect={() => handleSelect("components")}
                isActive={tabContent === "components"}>
                Components
              </TabButton>
              <TabButton
                onSelect={() => handleSelect("jsx")}
                isActive={tabContent === "jsx"}>
                JSX
              </TabButton>
              <TabButton
                onSelect={() => handleSelect("props")}
                isActive={tabContent === "props"}>
                Props
              </TabButton>
              <TabButton
                onSelect={() => handleSelect("state")}
                isActive={tabContent === "state"}>
                State
              </TabButton>
            </menu>
            {
              dfltContnt /* {!tabContent && (
              <div className="tab-content">Please select a topic.</div>
            )}
            {tabContent && (
              <div className="tab-content">
                <h3>{EXAMPLES[tabContent].title}</h3>
                <p>{EXAMPLES[tabContent].para}</p>
                <pre>
                  <code>{EXAMPLES[tabContent].code}</code>
                </pre>
              </div>
            )} */
            }
          </div>
        </section>
      </main>
    </div>
  );
}
export default App;
