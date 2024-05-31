export default function Sections({ title, children, ...attrbt }) {
  return (
    <section {...attrbt}>
      <div className="container">
        <div className="text_controller">
          <h2>{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}
