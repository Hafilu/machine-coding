import axios from "axios";
import React, { useEffect, useState } from "react";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [data, setData] = useState([]);
  const [cache, setCache] = useState({});
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const fetchData = async () => {
    if (cache[input]) {
      setData(cache[input]);
      return;
    }
    let result = await axios.get(
      "https://dummyjson.com/recipes/search?q=" + input
    );
    setData(result?.data?.recipes);
    setCache((prev) => ({ ...prev, [input]: result?.data?.recipes }));
  };

  useEffect(() => {
    if (!input) {
      setData([]);
      return;
    }
    const timer = setTimeout(() => {
      fetchData();
    }, 400);
    return () => clearTimeout(timer);
  }, [input]);

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      setSelectedIndex((prev) => (prev < data.length - 1 ? prev + 1 : 0));
    } else if (e.key === "ArrowUp") {
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : data.length - 1));
    } else if (e.key === "Enter" && selectedIndex !== -1) {
      setInput(data[selectedIndex].name);
    } else if (e.key === "Escape") {
      setShowResult(false);
    }
  };

  return (
    <div className="mx-auto w-[80%] mt-10">
      <h1 className="text-4xl text-center my-6">Search Bar</h1>
      <div className="text-center">
        <input
          type="text"
          className="w-[500px] p-3 border-[1px] border-black rounded-md"
          onBlur={() => setTimeout(() => setShowResult(false), 200)}
          onFocus={() => setShowResult(true)}
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setSelectedIndex(-1);
          }}
          onKeyDown={handleKeyDown}
        />
      </div>
      {showResult && data.length > 0 && (
        <div className="mx-auto w-[500px] max-h-[500px] overflow-y-auto p-3 border-[1px] border-black rounded-md">
          {data.map((item, index) => (
            <span
              key={item.id}
              className={`block p-1 cursor-pointer ${
                selectedIndex === index ? "bg-slate-200" : "hover:bg-slate-100"
              }`}
              onMouseEnter={() => setSelectedIndex(index)}
              onMouseDown={() => {
                setInput(item.name);
              }}
            >
              {item.name}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
