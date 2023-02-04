import axios from "axios";
import { PageContainer } from "component/PageContainer";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export const StarwarsPeople = ({}) => {
  const [properties, setProperties] = useState("");
  const { peopleId } = useParams();

  useEffect(() => {
    axios
      .get(`https://www.swapi.tech/api/people/${peopleId}`)
      .then(({ data }) => {
        let { birth_year, mass, name, eye_color } = data.result.properties;
        setProperties({ birth_year, mass, name, eye_color });
      });
  }, []);
  return (
    <>
      <PageContainer>
        <h1>Name: {properties.name}</h1>
        <h2>Mass: {properties.mass}</h2>
        <h3>
          Eye color: {properties.eye_color}{" "}
          <span
            style={{
              display: "inline-block",
              width: 30,
              height: 30,
              backgroundColor: properties.eye_color,
              borderRadius: "50%",
              border: "1px solid grey",
            }}
          ></span>
        </h3>
        <h4> Birth Year: {properties.birth_year}</h4>
        <Link to="/starwars">Go back</Link>
      </PageContainer>
    </>
  );
};
