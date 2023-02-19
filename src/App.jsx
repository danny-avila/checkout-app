import React from 'react';
import Form1 from './components/Form1';
import Form2 from './components/Form2';
import Form3 from './components/Form3';
import Form4 from './components/Form4';
import axios from 'axios';
const inputProps = `p-1 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
invalid:border-pink-500 invalid:text-pink-600
focus:invalid:border-pink-500 focus:invalid:ring-pink-500`;

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
      inputProps={inputProps}
      changeHandler={changeHandler}
    />,
    <Form2
      data={formData}
      inputProps={inputProps}
      changeHandler={changeHandler}
    />,
    <Form3
      data={formData}
      inputProps={inputProps}
      changeHandler={changeHandler}
    />,
    <Form4 data={formData} />
  ];

  const setNext = async (e) => {
    e.preventDefault();
    setProgress((prev) => prev + 1);
  };

  const submit = async (e) => {
    e.preventDefault();
    setProgress((prev) => prev + 1);
    const res = await axios.post('http://localhost:5000/users', formData);
    console.log(res);
    console.log('ALL DONE!', formData);
  };

  const onClick = async (e) => {
    e.preventDefault();
    const res = await axios.get('http://localhost:5000/checkout');
    console.log(res);
    if (progress > 3) {
      setProgress(0);
    } else {
      setProgress((prev) => prev + 1);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center">
      {progress < 0 || progress >= 4 ? (
        <button
          onClick={onClick}
          className="rounded border-2 border-black p-2"
        >
          Checkout
        </button>
      ) : (
        <div className="m-8 flex w-screen flex-col">
          {progress === 0 && forms[progress]}
          {progress === 1 && forms[progress]}
          {progress === 2 && forms[progress]}
          {progress === 3 && forms[progress]}
          <div className="flex">
            <button
              className="m-2 mt-4 ml-auto w-1/4 rounded border-2 border-black p-1"
              onClick={progress < 3 ? setNext : submit}
            >
              {progress < 3 ? 'Next' : 'Purchase'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
