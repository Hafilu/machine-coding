import React, { useState, useMemo } from "react";

const usersList = [
  { id: 1, name: "Alice Johnson" },
  { id: 2, name: "Bob Smith" },
  { id: 3, name: "Charlie Brown" },
  { id: 4, name: "David Williams" },
];

const SearchFilter = () => {
  const [input, setInput] = useState("");

  // Optimize filtering with useMemo
  const filteredUsers = useMemo(() => {
    return usersList.filter((item) =>
      item.name.toLowerCase().includes(input.toLowerCase())
    );
  }, [input]);

  return (
    <div className="p-4">
      <label htmlFor="search" className="block mb-2 font-semibold">
        Search Users:
      </label>
      <input
        id="search"
        type="text"
        className="border-2 border-black p-2 mb-4 w-full"
        placeholder="Type a name..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <ul className="list-disc pl-5">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((item) => <li key={item.id}>{item.name}</li>)
        ) : (
          <li className="text-gray-500">No users found</li>
        )}
      </ul>
    </div>
  );
};

export default SearchFilter;
