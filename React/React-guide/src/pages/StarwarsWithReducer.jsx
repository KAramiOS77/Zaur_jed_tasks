import axios from "axios";
import { PageContainer } from "component/PageContainer";
import { useReducer } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const reducer = (state, action) => {
  if (action.type === "GetData") {
    return action.payload;
  } else if (action.type === "RemoveElement") {
    let newState = state.filter((elem) => elem.uid !== action.payload);
    return newState;
  } else if (action.type === "AddElement") {
    return [...state, action.payload];
  } else if (action.type === "EditElement") {
    return state.map((elem) => {
      if (elem.uid === action.payload.uid) {
        return { ...elem, name: action.payload.name };
      }
      return elem;
    });
  }
};

export const StarwarsWithReducer = ({}) => {
  // const [data, setData] = useState([]);

  const [data, dispatch] = useReducer(reducer, []);
  useEffect(() => {
    axios.get("https://www.swapi.tech/api/people").then(({ data }) => {
      const newData = data.results.map(({ uid, name }) => ({ name, uid }));
      // setData(newData);
      dispatch({ type: "GetData", payload: newData });
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
        <h1>StarWarsWithReducer</h1>
        {data.map(({ uid, url, name }) => {
          return (
            <Link
              key={uid}
              // to={uid}
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
              <button
                onClick={() => {
                  dispatch({ type: "RemoveElement", payload: uid });
                }}
              >
                X
              </button>
              <button
                onClick={() => {
                  let name = prompt("Edit Name");
                  dispatch({ type: "EditElement", payload: { name, uid } });
                }}
              >
                Edit
              </button>
            </Link>
          );
        })}
        <button
          onClick={() => {
            let name = prompt("Enter your name");
            let uid = prompt("Enter your uid");
            let newObj = {
              name,
              uid,
            };
            dispatch({ type: "AddElement", payload: newObj });
          }}
        ></button>
      </PageContainer>
    </>
  );
};
