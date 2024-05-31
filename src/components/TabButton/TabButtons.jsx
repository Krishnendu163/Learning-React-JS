import { useState } from "react";
import { EXAMPLES } from "../../data";
import TabButton from "./TabButton";
import Sections from "../Wrapper/Section.jsx";
import Tabs from "../Wrapper/Tabs.jsx";

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
    <Sections className="full_width tab cmn_pad" title="Examples">
      <Tabs
        ButtonContrainer="menu"
        button={
          <>
            <TabButton
              onClick={() => handleSelect("components")}
              isActive={tabContent === "components"}>
              Components
            </TabButton>

            <TabButton
              onClick={() => handleSelect("jsx")}
              isActive={tabContent === "jsx"}>
              JSX
            </TabButton>

            <TabButton
              onClick={() => handleSelect("props")}
              isActive={tabContent === "props"}>
              Props
            </TabButton>
            <TabButton
              onClick={() => handleSelect("state")}
              isActive={tabContent === "state"}>
              State
            </TabButton>
            <TabButton
              onClick={() => handleSelect("hotel")}
              isActive={tabContent === "hotel"}>
              Hotels
            </TabButton>
          </>
        }>
        {dfltContnt}
      </Tabs>

      {/*dfltContnt  {!tabContent && (
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
            )} */}
    </Sections>
  );
}
