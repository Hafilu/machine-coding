import React, { useEffect, useRef, useState } from "react";

const otp_count = 5;
const Otp = () => {
  const inputRef = useRef([]);
  const [otpArr, setOtpArr] = useState(new Array(otp_count).fill(""));

  useEffect(() => {
    inputRef.current[0]?.focus();
  }, []);

  const handleonChange = (e, index) => {
    const { value } = e.target;
    if (isNaN(value)) return;
    const newarr = [...otpArr];
    newarr[index] = value.slice(-1);
    setOtpArr(newarr);
    value.trim() && inputRef.current[index + 1]?.focus();
  };

  const handleKeypress = (e, index) => {
    if (e.key === "Backspace" && !e.target.value.trim()) {
      inputRef.current[index - 1]?.focus();
    }
  };
  return (
    <div className="text-center">
      <h1 className="text-3xl font-medium my-6">Validate OTP</h1>
      <div className="w-[60%] mx-auto ">
        {otpArr.map((item, index) => (
          <input
            ref={(element) => (inputRef.current[index] = element)}
            key={index}
            type="text"
            value={item}
            onChange={(e) => handleonChange(e, index)}
            onKeyDown={(e) => handleKeypress(e, index)}
            className="border-2 border-black border-collapse w-[50px] mx-1 px-2 py-1 text-center focus:outline-none"
          />
        ))}
      </div>
    </div>
  );
};

export default Otp;
