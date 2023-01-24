import axios from "axios";
import { PageContainer } from "component/PageContainer";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";

export const Starwars = ({}) => {
  const { peopleId } = useParams();
  const [name, setName] = useState("");

  useEffect(() => {
    axios
      .get(`https://www.swapi.tech/api/people/${peopleId}`)
      .then(({ data }) => {
        console.log(data.result);
        setName(data.result.properties.name);
      });
  }, []);
  return (
    <>
      <PageContainer>
        <div>{name}</div>
      </PageContainer>
    </>
  );
};
