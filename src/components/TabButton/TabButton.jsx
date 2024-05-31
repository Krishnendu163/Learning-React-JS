export default function TabButton({ children, isActive, ...props }) {
  return (
    <li className={isActive ? "active" : ""}>
      <button {...props}>{children}</button>
    </li>
  );
}
