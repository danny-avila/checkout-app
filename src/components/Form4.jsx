import React from 'react';
import Entry from './Entry';

export default function Form4({ data }) {
  return (
    <>
      <h1 className="flex justify-center">Confirm</h1>
      <div >
        {Object.keys(data).map((key, i) => (
          <div className="ml-40 mr-40">
            <Entry
              key={i}
              name={key}
              value={data[key]}
            />
          </div>
        ))}
      </div>
    </>
  );
}
