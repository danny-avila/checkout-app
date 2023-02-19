import React from 'react';

export default function Form3({ data, inputProps, changeHandler }) {
  return (
    <form>
      <div>
        <label
          htmlFor="credit_card"
          className="m-2"
        >
          Credit Card #
        </label>
        <input
          className={"m-2 w-1/2 " + inputProps}
          type="text"
          name="credit_card"
          value={data.credit_card}
          onChange={changeHandler}
        />
      </div>
      <div>
        <label
          className="m-2"
          htmlFor="cc_expiry"
        >
          Expiry Date
        </label>
        <input
          className={"m-2 " + inputProps}
          type="text"
          name="cc_expiry"
          value={data.cc_expiry}
          onChange={changeHandler}
        />
        <label
          htmlFor="cc_cvv"
          className="m-2"
        >
          CVV
        </label>
        <input
          className={"m-2 " + inputProps}
          type="text"
          name="cc_cvv"
          value={data.cc_cvv}
          onChange={changeHandler}
        />
        <label
          className="m-2"
          htmlFor="cc_zip"
        >
          Billing Zip Code
        </label>
        <input
          className={"m-2 " + inputProps}
          type="text"
          name="cc_zip"
          value={data.cc_zip}
          onChange={changeHandler}
        />
      </div>
    </form>
  );
}
