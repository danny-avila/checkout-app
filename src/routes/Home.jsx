import React from 'react';
import axios from 'axios';

export default function Home() {
  return (
    <>
      <div>Home is where the heart is</div>

      <form action="/api/users" method="POST">
        <input type="text" name="name" />
        <input type="text" name="email" />
        <input type="text" name="password" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
