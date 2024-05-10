export default function tabButton({ children, isActive, onSelect }) {
  return (
    <li className={isActive ? "active" : ""}>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}
