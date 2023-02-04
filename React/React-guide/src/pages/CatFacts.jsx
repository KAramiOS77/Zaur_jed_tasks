import axios from "axios";
import { PageContainer } from "component/PageContainer";
import { useEffect } from "react";
import { useReducer } from "react";
import { CatFactsReducer } from "reducer/CatFactsReducer";

const url = "https://catfact.ninja/facts?max_length=60";

export const CatFacts = () => {
  const [facts, dispatch] = useReducer(CatFactsReducer, []);

  useEffect(() => {
    axios.get(url).then(({ data }) => {
      console.log(data.data);
      dispatch({ type: "GetFacts", payload: data.data });
    });
  }, []);
  const removeFact = (fact) => {
    dispatch({ type: "RemoveFact", payload: fact });
  };
  return (
    <>
      <PageContainer>
        {
        facts.map(({ fact }) => {
          return (
            <p key={fact}>
              {fact}
              <button
                onClick={() => {
                  removeFact(fact);
                }}
              >
                X
              </button>
            </p>
          );
        })
        }
      </PageContainer>
    </>
  );
};
