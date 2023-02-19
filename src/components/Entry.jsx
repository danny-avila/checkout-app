import React from 'react';

export default function Entry({ name, value }) {
  return (
    <>
      <strong>{name}:    </strong>
      <span>{value}</span>
    </>
  );
}