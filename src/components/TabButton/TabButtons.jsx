import { useState } from "react";
import { EXAMPLES } from "../../data";
import TabButton from "./TabButton";

export default function Tabbuttons() {
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
          <TabButton
            onSelect={() => handleSelect("hotel")}
            isActive={tabContent === "hotel"}>
            Hotels
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
  );
}
