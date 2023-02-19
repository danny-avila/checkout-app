import React from 'react';
import Form1 from './components/Form1';
import Form2 from './components/Form2';
import Form3 from './components/Form3';
import axios from 'axios';

function App() {
  const [progress, setProgress] = React.useState(-1);
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    password: '',
    addr_1: '',
    addr_2: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
    credit_card: '',
    cc_expiry: '',
    cc_cvv: '',
    cc_zip: ''
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const forms = [
    <Form1
      data={formData}
      changeHandler={changeHandler}
    />,
    <Form2
      data={formData}
      changeHandler={changeHandler}
    />,
    <Form3
      data={formData}
      changeHandler={changeHandler}
    />
  ];

  const setNext = async (e) => {
    e.preventDefault();
    setProgress((prev) => prev + 1);
  };

  const submit = async (e) => {
    e.preventDefault();
    // setProgress((prev) => prev + 1);
    // const res = await axios.post(
    //   'http://localhost:5000/users',
    //   formData
    // );
    // console.log(res);

    console.log('ALL DONE!', formData);
  };

  const onClick = async (e) => {
    e.preventDefault();
    const res = await axios.get('http://localhost:5000/checkout');
    console.log(res);
    setProgress((prev) => prev + 1);
  };

  return (
    <div className="flex h-screen items-center justify-center">
      {progress < 0 ? (
        <button
          onClick={onClick}
          className="rounded border-2 border-black p-4"
        >
          Checkout
        </button>
      ) : (
        <div className="flex flex-col">
          {progress === 0 && forms[progress]}
          {progress === 1 && forms[progress]}
          {progress === 2 && forms[progress]}
          <div className="flex">
            <button
              className="m-2 mt-4 ml-auto w-1/4 rounded border-2 border-black p-1"
              onClick={progress < 2 ? setNext : submit}
            >
              {progress < 2 ? 'Next' : 'Submit'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
