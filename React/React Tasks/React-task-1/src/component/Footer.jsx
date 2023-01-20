export function Footer({ bgColor, text }) {
  return (
    <footer
      style={{
        color: "white",
        textAlign: "center",
        fontWeight: 600,
        fontSize: "15px",
        padding: "20px",
        backgroundColor: bgColor,
      }}
    >
      {text}
    </footer>
  );
}
