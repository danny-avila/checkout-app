import React, { useState } from 'react';
import { redirect } from "react-router-dom";
import axios from 'axios';

export default function Home() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const changeHandler = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(name, email, password);

    const res = await axios.post('http://localhost:5000/users', {
      name,
      email,
      password
    });

    console.log(res);

    if (res.status === 201) {
      redirect('/checkout');
    }
  };

  return (
    <>
      <div>Home is where the heart is</div>

      <form>
        <label
          htmlFor="name"
          className="m-2"
        >
          Name
        </label>
        <input
          className="m-2"
          type="text"
          name="name"
          value={name}
          onChange={changeHandler}
        />
        <label
          className="m-2"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="m-2"
          type="text"
          name="email"
          value={email}
          onChange={changeHandler}
        />
        <label
          className="m-2"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className="m-2"
          type="text"
          name="password"
          value={password}
          onChange={changeHandler}
        />
        <button
          className="m-2"
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </>
  );
}
