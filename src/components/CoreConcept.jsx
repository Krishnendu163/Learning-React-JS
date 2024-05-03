import uspImg from "../assets/state-mgmt.png";
import { CORE_CONCEPTS } from "../data.js";

export default function CoreConcept({ img, title, para }) {
  return (
    <li>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <p>{para}</p>
    </li>
  );
}
