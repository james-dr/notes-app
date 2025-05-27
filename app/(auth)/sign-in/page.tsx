"use client";
import React, { useState } from "react";

const SignIn = () => {
  const styles = {
    input: {
      shared: "absolute z-0 pointer-events-none transition-all duration-200",
      offSelect: "left-5 top-3 text-gray-400",
      onSelect: "left-2 -top-2.5 text-xs font-semi-bold",
    },
  };
  const [logInCredentials, setLogInCredentials] = useState({
    username: "",
    password: "",
  })
  const [labelStyle, setLabelStyle] = useState({
    username: `${styles.input.offSelect}`,
    password: `${styles.input.offSelect}`,
  });
  const changeStyle = (eventType: string, field: string) => {
    if (logInCredentials[`${field}`] !== "") {
      return
    }
    let style =
      eventType === "focused"
        ? styles.input.onSelect
        : styles.input.offSelect;
    setLabelStyle((prev) => ({
      ...prev,
      [`${field}`]: style,
    }));
    console.log(style);
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target
    const value = target.value 
    const name = target.name

    setLogInCredentials((prev) => ({
      ...prev,
      [name]: value

    }))
    console.log(logInCredentials)
  }
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-white">
      <div className="h-fit flex flex-col">
        <h1 className="text-lg font-bold">Sign In</h1>
        <div className="my-4">
          <div className="relative px-2 py-1">
            <input
              className="border rounded-sm m-1 p-1 z-10"
              type="text"
              onBlur={() => changeStyle("unfocused", "username")}
              onFocus={() => changeStyle("focused", "username")}
              onChange={handleChange}
              name="username"

            />
            <p className={`${labelStyle.username} ${styles.input.shared}`}>Username</p>
          </div>
          <div className="relative px-2 py-1">
            <input
              className="border rounded-sm m-1 p-1 z-10"
              type="password"
              name="password"
              id=""
              onBlur={() => changeStyle("unfocused", "password")}
              onChange={handleChange}
              onFocus={() => changeStyle("focused", "password")}
            />
            <p className={`${labelStyle.password} ${styles.input.shared}`}>Password</p>
          </div>
        </div>
        <button className="cursor-pointer bg-gray-400 hover:opacity-80 p-2 font-bold text-sm rounded-sm">Sign in</button>
        <div className="flex w-full justify-center items-center my-5">
          <hr className="grow"/>
          <span className="mx-2 text-xs">or</span>
          <hr className="grow"/>
        </div>
        <button className="hover:bg-black hover:text-white cursor-pointer border-1 p-2 font-bold text-sm rounded-sm flex justify-center items-center gap-2">
            <img className="w-5 h-5" src={"./google-icon.svg"}/>
            Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default SignIn;
