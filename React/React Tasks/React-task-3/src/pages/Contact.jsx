import { Button } from "component/Button";
import { PageContainer } from "component/PageContainer";
import { useEffect, useRef, useState } from "react";
import styles from "../component/PageContainer/index.module.css";

export const Contact = ({ }) => {
  const [input, setInput] = useState({ email: "", password: "", textmsg: "" });
  // A: useRef vermek mutleq deyil
  const emailInput = useRef();
  const passwordInput = useRef();
  const textmsgInput = useRef();

  // useEffect(() => {
  //   console.log("working");
  // }, []);

  // useEffect(() => {
  //   console.log("update");
  // }, [input]);

  // useEffect(() => {
  //   return () => {
  //     console.log("component unmounted");
  //   };
  // }, []);
  // useEffect(() => {
  //   emailInput.current.focus();
  // }, []);
  return (
    <>
      <PageContainer>
        <div className={styles.Contactform}>
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
          <textarea
            ref={textmsgInput}
            onChange={({ target }) => {
              setInput({ ...input, textmsg: target.value });
            }}
            value={input.textmsg}
            cols="30"
            rows="10"
            placeholder="Type your credidentials(for example your bank information, card number validity date and cvv"
          ></textarea>
          <Button
            bgColor="red"
            text="submit"
            Clicked={() => {
              console.log(input);
            }}
          />
        </div>
      </PageContainer>
    </>
  );
};
