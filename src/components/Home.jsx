import React, { useState } from "react";
const INITIAL_URL = import.meta.env.VITE_APP_BACKEND_URL;
const host = INITIAL_URL;

const Home = () => {
  const [text, settext] = useState(" ");
  const [values, setvalues] = useState({ p1: "", p2: "", p3: "", p4: "" });

  const HandleChange = (e) => {
    setvalues({ ...values, [e.target.name]: e.target.value });
    // console.log(values)
  };
  const HandleClick = (e) => {
    e.preventDefault();
    Predict();
    console.log(values);
    setvalues({ p1: "", p2: "", p3: "", p4: "" });
  };

  const Predict = async () => {
    //  TODO:MAKE API CALLS
    const url = `${host}/predict`;
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(values),
    });

    const result = await response.json();
    // console.log(result);

    if (result.TaskSuccess) {
      settext(result.name);
    } else {
      settext(" ");
      alert(result.error);
    }
  };
  return (
    <>
      <div className="container my-2">
        <h1> Iris prediction</h1>
      </div>
      <div className="w-full max-w-sm ">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="Input_p1"
              >
                sepal length (cm)
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 form-control"
                type="text"
                id="Input_p1"
                aria-describedby="Help_p1"
                name="p1"
                onChange={HandleChange}
                value={values.p1}
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="Input_p2"
              >
                sepal width (cm)
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 form-control"
                type="text"
                id="Input_p2"
                aria-describedby="Help_p2"
                name="p2"
                onChange={HandleChange}
                value={values.p2}
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="Input_p3"
              >
                petal length (cm)
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 form-control"
                type="text"
                id="Input_p3"
                aria-describedby="Help_p3"
                name="p3"
                onChange={HandleChange}
                value={values.p3}
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="Input_p4"
              >
                petal width (cm)
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 form-control"
                type="text"
                id="Input_p4"
                aria-describedby="Help_p4"
                name="p4"
                onChange={HandleChange}
                value={values.p4}
              />
            </div>
          </div>

          <div className="md:flex md:items-center">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3">
              <button
                className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="submit"
                onClick={HandleClick}
              >
                predict
              </button>
            </div>
          </div>
        </form>
      </div>
      <div>
        <h1>Result</h1>
        <p>{text}</p>
      </div>
    </>
  );
};

export default Home;
