import React, { useState } from "react";
import WithFormHandle from "./WithFormHandle";

const FormTwo = ({inputs,handleChange,handleSubmit}) => {
  
  return (
    <div>
      <form
        className="flex flex-col w-[300px]"
        noValidate
        onSubmit={handleSubmit}
      >
        <label> Name</label>
        <input
          type="text"
          name="name"
          className="border-2"
          value={inputs.name}
          onChange={handleChange}
        />

        <label> Number</label>
        <input
          type="number"
          name="number"
          className="border-2"
          value={inputs.number}
          onChange={handleChange}
        />

        <label> Message</label>
        <textarea
        rows={4}
          type="text"
          name="message"
          className="border-2"
          value={inputs.message}
          onChange={handleChange}
        />
        <button type="submit" className="border-2 my-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormTwo;
export const FormTwoWithHoc = WithFormHandle(FormTwo, {name:"", number:"", message:""})