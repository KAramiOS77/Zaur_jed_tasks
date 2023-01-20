import benzfoto from "../img/1.webp";
export function Main({ heading, text, width, height }) {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>{heading}</h1>
        <img src={benzfoto} alt="" width={width} height={height} />
        <p>{text}</p>{" "}
      </div>
    </>
  );
}
