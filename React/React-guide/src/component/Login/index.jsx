import { useEffect, useRef, useState } from "react";
import { Button } from "../Button";
import { addGmail } from "../utils";
import styles from "./index.module.css";

export function Login() {
  const [input, setInput] = useState({ email: "", password: "" });
  const emailInput = useRef();
  const passwordInput = useRef();

  useEffect(() => {
    console.log("working");
  }, []);

  useEffect(() => {
    console.log("update");
  }, [input]);

  useEffect(() => {
    return () => {
      console.log("component unmounted");
    };
  }, []);
  useEffect(() => {
    emailInput.current.focus();
  }, []);

  return (
    <div className={styles.form}>
      <input
        ref={emailInput}
        onChange={({ target }) => {
          setInput({ ...input, email: target.value });
        }}
        value={input.email}
        type="email"
        placeholder="Enter your email"
      />
      <input
        ref={passwordInput}
        onChange={({ target }) => {
          setInput({ ...input, password: target.value });
        }}
        value={input.password}
        type="Password"
        placeholder="Enter your password"
      />
      <Button
        bgColor="red"
        text="submit"
        Clicked={() => {
          console.log(input);
        }}
      />
      <Button
        bgColor="red"
        text="addgmail "
        Clicked={() => {
          setInput({ ...input, email: addGmail(input.email) });
        }}
      />
    </div>
  );
}
