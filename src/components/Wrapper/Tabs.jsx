export default function Tabs({ button, children, ButtonContrainer = "menu" }) {
  return (
    <>
      <ButtonContrainer>{button}</ButtonContrainer>
      {children}
    </>
  );
}
