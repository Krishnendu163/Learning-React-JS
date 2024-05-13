export default function CoreConcept({ img, title, para }) {
  return (
    <li>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <p>{para}</p>
    </li>
  );
}
