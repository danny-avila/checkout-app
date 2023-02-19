import React from 'react';

export default function Form2({ data, inputProps, changeHandler }) {
  return (
    <form>
      <div>
        <label
          htmlFor="addr_1"
          className="m-2"
        >
          Address
        </label>
        <input
          className={"m-2 " + inputProps}
          type="text"
          name="addr_1"
          value={data.addr_1}
          onChange={changeHandler}
        />
        <label
          className="m-2"
          htmlFor="addr_2"
        >
          Line 2
        </label>
        <input
          className={"m-2 " + inputProps}
          type="text"
          name="addr_2"
          value={data.addr_2}
          onChange={changeHandler}
        />
        <label
          className="m-2"
          htmlFor="city"
        >
          City
        </label>
        <input
          className={"m-2 " + inputProps}
          type="text"
          name="city"
          value={data.city}
          onChange={changeHandler}
        />
      </div>
      <div>
        <label
          htmlFor="state"
          className="m-2"
        >
          State
        </label>
        <input
          className={"m-2 " + inputProps}
          type="text"
          name="state"
          value={data.state}
          onChange={changeHandler}
        />
        <label
          className="m-2"
          htmlFor="zip"
        >
          Zip Code
        </label>
        <input
          className={"m-2 " + inputProps}
          type="text"
          name="zip"
          value={data.zip}
          onChange={changeHandler}
        />
        <label
          className="m-2"
          htmlFor="phone"
        >
          Phone #
        </label>
        <input
          className={"m-2 " + inputProps}
          type="text"
          name="phone"
          value={data.phone}
          onChange={changeHandler}
        />
      </div>
    </form>
  );
}
