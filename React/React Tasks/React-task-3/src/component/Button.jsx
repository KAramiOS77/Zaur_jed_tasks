export function Button({ bgColor, text, Clicked }) {
  // A:  props adlarini da camelCase verek z.o
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
