export function Button({ bgColor, text, Clicked }) {
  return (
    <button
      style={{
        backgroundColor: bgColor,
      }}
      onClick={Clicked}
    >
      {text}
    </button>
  );
}
