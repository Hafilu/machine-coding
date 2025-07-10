import React, { useState } from "react";

const WithFormHandle = (WrappedComponent, initialValues) => {
  const HOC = (props) => {
    const [inputs, setInputs] = useState(initialValues);

    const handleChange = (e) => {
      const { value, name } = e.target;
      setInputs((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      for (let key in inputs) {
        if (!inputs[key]) {
          alert("Please fill all the field");
          return;
        }
      }
      console.log(inputs);
      setInputs(initialValues);
    };

    return (
      <WrappedComponent
        {...props}
        inputs={inputs}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    );
  };
  return HOC;
};

export default WithFormHandle;
