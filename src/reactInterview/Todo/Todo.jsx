import React, { useState } from "react";

const Todo = () => {
  const [item, setItem] = useState("");
  const [data, setData] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editvalue, setEditValue] = useState({});

  const handleAdd = () => {
    if (!item.trim()) return;

    setData((prev) => [...prev, { id: Date.now().toString(), item: item }]);
    setItem("");
  };

  const handleEdit = () => {
    if (!editvalue.item.trim()) return;
    setData((prev) =>
      prev.map((i) =>
        i.id === editvalue.id ? { ...i, item: editvalue.item } : i
      )
    );

    setEditValue({});
    setIsEditing(false);
  };

  const handleDelete = (id) => {
    setData((prev) => prev.filter((i) => i.id !== id));
  };

  return (
    <div className="  my-4">
      <h1 className="text-4xl text-center my-3 pb-4">Todo List</h1>
      <div className="flex justify-center">
        <div className="flex justify-center   w-[400px]">
          {isEditing ? (
            <>
              {" "}
              <input
                type="text"
                className="border-2 border-black p-3 w-full"
                value={editvalue.item}
                onChange={(e) =>
                  setEditValue((prev) => ({ ...prev, item: e.target.value }))
                }
              />
              <button
                className="p-3 rounded-md bg-blue-700 text-white ml-3"
                onClick={handleEdit}
              >
                Save
              </button>
            </>
          ) : (
            <>
              <input
                type="text"
                className="border-2 border-black p-3 w-full"
                value={item}
                onChange={(e) => setItem(e.target.value)}
              />

              <button
                className="p-3 rounded-md bg-blue-700 text-white ml-3"
                onClick={handleAdd}
              >
                Add
              </button>
            </>
          )}
        </div>
      </div>
      <div className="mt-4 flex justify-center flex-col items-center  mx-auto">
        {data.map((item, i) => (
          <div key={item.id} className="flex justify-center w-[400px]">
            <p className="p-3 bg-gray-400  w-full my-2 ">{item.item}</p>
            <span
              className="p-3 rounded-md bg-blue-700 text-white ml-3 my-2"
              onClick={() => {
                setEditValue(item);
                setIsEditing(true);
              }}
            >
              Edit
            </span>
            <span
              className="p-3 rounded-md bg-red-700 text-white ml-3 my-2"
              onClick={() => handleDelete(item.id)}
            >
              Delete
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
