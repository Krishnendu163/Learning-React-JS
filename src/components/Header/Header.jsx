import logoReact from "../../assets/react-core-concepts.png";
import "./header.scss";

const getDescriptions = ["Fundamental", "Fundamental", "Fundamental3"];
const getRandomInt = (max) => Math.floor(Math.random() * (max + 1));

export default function Header() {
  const getdes = getDescriptions[getRandomInt(2)];

  return (
    <>
      <header>
        <img src={logoReact} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {getdes} React concepts you will need for almost any app you are going
          to build!
        </p>
      </header>
    </>
  );
}
