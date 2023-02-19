import React from 'react';

export default function Form1({ data, inputProps, changeHandler }) {
  return (
    <form>
      <label
        htmlFor="name"
        className="m-2"
      >
        Name
      </label>
      <input
        className={"m-2 " + inputProps}
        type="text"
        name="name"
        value={data.name}
        onChange={changeHandler}
      />
      <label
        className="m-2"
        htmlFor="email"
      >
        Email
      </label>
      <input
        className={"m-2 " + inputProps}
        type="text"
        name="email"
        value={data.email}
        onChange={changeHandler}
      />
      <label
        className="m-2"
        htmlFor="password"
      >
        Password
      </label>
      <input
        className={"m-2 " + inputProps}
        type="text"
        name="password"
        value={data.password}
        onChange={changeHandler}
      />
    </form>
  );
}
