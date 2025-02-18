import React from "react";

const Interest = ({ data, setData, err }) => {
  const handleChange = (e, name) => {
    setData((prev) =>
      e.target.checked
        ? { ...prev, interest: [...data.interest, name] }
        : { ...prev, interest: data.interest.filter((i) => i !== name) }
    );
  };
  return (
    <div>
      <div>
        <label>
          <input
            type="checkbox"
            name="code"
            checked={data.interest.includes("code")}
            onChange={(e) => handleChange(e, "code")}
          />
          Code
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="play"
            checked={data.interest.includes("play")}
            onChange={(e) => handleChange(e, "play")}
          />
          Play
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="read"
            checked={data.interest.includes("read")}
            onChange={(e) => handleChange(e, "read")}
          />
          Read
        </label>
      </div>
      <div>{err.interest && <span className="text-red-700">{err.interest}</span>}</div>
    </div>
  );
};

export default Interest;
