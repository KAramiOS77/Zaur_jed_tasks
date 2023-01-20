export function Header({ bgColor, text }) {
  return (
    <header
      style={{
        color: "white",
        backgroundColor: bgColor,
        textAlign: "center",
        fontWeight: 800,
        fontSize: "30px",
        padding: "20px",
      }}
    >
      {text}
    </header>
  );
}
