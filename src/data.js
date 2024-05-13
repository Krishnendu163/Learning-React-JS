import componentsImg from "./assets/components.png";
import propsImg from "./assets/config.png";
import jsxImg from "./assets/jsx-ui.png";
import stateImg from "./assets/state-mgmt.png";

export const CORE_CONCEPTS = [
  {
    img: componentsImg,
    title: "Components",
    para: "The core UI building block - compose the user interface by combining multiple components. ",
  },
  {
    img: jsxImg,
    title: "JSX",
    para: "Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered. ",
  },
  {
    img: propsImg,
    title: "Props",
    para: "Make components configurable (and therefore reusable) by passing input data to them. ",
  },
  {
    img: stateImg,
    title: "State",
    para: "React-managed data which, when changed, causes the component to re-render & the UI to update.",
  },
  {
    img: propsImg,
    title: "Hotel",
    para: "Hotels In Sea beach, Get premium hotels in low budget. Also if you want room with swiming pool you can check out the last two hotels",
  },
];

export const EXAMPLES = {
  components: {
    title: "Components",
    para: "Components are the building blocks of React applications. A component is a self-contained module (HTML + optional CSS + JS) that renders some output.",
    code: `
      function Welcome() {
        return <h1>Hello, World!</h1>;
      }`,
  },
  jsx: {
    title: "JSX",
    para: "JSX is a syntax extension to JavaScript. It is similar to a template language, but it has full power of JavaScript (e.g., it may output dynamic content).",
    code: `
      <div>
        <h1>Welcome {userName}</h1>
        <p>Time to learn React!</p>
      </div>`,
  },
  props: {
    title: "Props",
    para: "Components accept arbitrary inputs called props. They are like function arguments.",
    code: `
      function Welcome(props) {
        return <h1>Hello, {props.name}</h1>;
      }`,
  },
  state: {
    title: "State",
    para: "State allows React components to change their output over time in response to user actions, network responses, and anything else.",
    code: `
      function Counter() {
        const [isVisible, setIsVisible] = useState(false);

        function handleClick() {
          setIsVisible(true);
        }

        return (
          <div>
            <button onClick={handleClick}>Show Details</button>
            {isVisible && <p>Amazing details!</p>}
          </div>
        );
      }`,
  },
  hotel: {
    title: "Hotel Rooms",
    para: " ",
    code: `
        Ishan Guest House
        Hotel Riyadh
        Hotel Banasri
        Hotel Avibsha
        Hotel BasataPia
        Ranikutir,  
        Hotel Swarna
        New Classic
       `,
  },
};
