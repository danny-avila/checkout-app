import React, { useState } from 'react';
import axios from 'axios';

export default function Checkout() {
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
    // console.log(e.target);

    console.log(name, email, password);

    // const res = await axios.post('http://localhost:5000/users', {
    //   name,
    //   email,
    //   password
    // });

    // console.log(res);
  };

  return (
    <>
      <div>CHECKOUT PAGE</div>

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
