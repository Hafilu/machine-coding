import React, { useState } from "react";
import WithFormHandle from "./WithFormHandle";

const FormOne = ({handleChange,handleSubmit,inputs}) => {
  

  
  return (
    <div>
      <form
        className="flex flex-col w-[300px]"
        noValidate
        onSubmit={handleSubmit}
      >
        <label htmlFor="name"> Name</label>
        <input
          type="text"
          id="name"
          name="name"
          className="border-2"
          value={inputs.name}
          onChange={handleChange}
        />

        <label> Age</label>
        <input
          type="number"
          name="age"
          className="border-2"
          value={inputs.age}
          onChange={handleChange}
        />

        <label> Email</label>
        <input
          type="email"
          name="email"
          className="border-2"
          value={inputs.email}
          onChange={handleChange}
        />
        <button type="submit" className="border-2 my-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormOne;


export const FormOneWithHoc = WithFormHandle(FormOne, {name:"", age:"", email:""})