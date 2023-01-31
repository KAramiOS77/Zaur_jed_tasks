import axios from "axios";
import { PageContainer } from "component/PageContainer";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export const Starwars = ({}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://www.swapi.tech/api/people").then(({ data }) => {
      const newData = data.results.map(({ uid, name }) => ({ name, uid }));
      setData(newData);
    });
  }, []);

  return (
    <>
      <PageContainer
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 10,
          justifyContent: "center",
          padding: "20px 0",
        }}
      >
        {data.map(({ uid, url, name }) => {
          return (
            <Link
              key={uid}
              to={uid}
              style={{
                display: "block",
                width: "170px",
                height: "200px",
                color: "black",
                boxShadow: "0 0 10px black",
                textDecoration: "none",
                textAlign: "center",
                borderRadius: 20,
              }}
            >
              <p>{uid}</p>
              <h1>{name}</h1>
            </Link>
          );
        })}
      </PageContainer>
    </>
  );
};
