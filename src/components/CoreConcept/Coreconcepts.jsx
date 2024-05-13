import { CORE_CONCEPTS } from "../../data";
import CoreConcept from "./CoreConcept.jsx";

export default function CoreConcepts() {
  return (
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
  );
}
