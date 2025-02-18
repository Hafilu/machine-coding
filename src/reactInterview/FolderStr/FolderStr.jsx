import React, { useState } from "react";
import { fileSystem } from "./data";

const TreeStr = ({ list, handleAddNode, handleDeleteNode, handleEditNode }) => {
  const [expanded, setExpanded] = useState({});
  return (
    <div className="pl-3">
      {list.map((node) => (
        <div key={node.id} className="w-[300px] p-1 ">
          {node.isFolder && (
            <span
              onClick={() =>
                setExpanded((prev) => ({
                  ...prev,
                  [node.name]: !prev[node.name],
                }))
              }
              className="cursor-pointer"
            >
              {expanded[node.name] ? "-" : "+"}
            </span>
          )}
          <span>{node.name}</span>
          {node.isFolder && (
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfMt43f5llkF5OgPwtIozkZk38jQu2r-3XCg&s"
              alt="add icon"
              className="w-[20px] inline ml-2 cursor-pointer"
              onClick={() => handleAddNode(node.id)}
            />
          )}

          <img
            src="https://cdn-icons-png.flaticon.com/512/3161/3161358.png"
            alt="add icon"
            className="w-[20px] inline ml-2 cursor-pointer"
            onClick={() => handleDeleteNode(node.id)}
          />

          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwfCYJZooXUxEEzGXtHy8WxSHw6jhvjv5o3A&s"
            alt="add icon"
            className="w-[15px] inline ml-2 cursor-pointer"
            onClick={() => handleEditNode(node.id, node.name)}
          />
          {node?.children?.length > 0 && expanded[node?.name] && (
            <TreeStr
              list={node.children}
              handleAddNode={handleAddNode}
              handleDeleteNode={handleDeleteNode}
              handleEditNode={handleEditNode}
            />
          )}
        </div>
      ))}
    </div>
  );
};

const FolderStr = () => {
  const [data, setData] = useState(fileSystem);

  const handleAddNode = (id) => {
    const name = prompt("Enter Name");
    const updateData = (data) => {
      return data.map((node) => {
        if (node.id === id) {
          return {
            ...node,
            children: [
              ...node.children,
              {
                name: name? name : "test",
                id: Date.now().toString(),
                isFolder: true,
                children: [],
              },
            ],
          };
        }

        if (node.children) {
          return { ...node, children: updateData(node.children) };
        }
        return node;
      });
    };

    setData((prev) => updateData(prev));
  };

  const handleDeleteNode = (id) => {
    const updateData = (data) => {
      return data
        .filter((node) => node.id !== id)
        .map((item) => {
          if (item.children) {
            return { ...item, children: updateData(item.children) };
          }
          return item;
        });
    };

    setData((prev) => updateData(prev));
  };

  const handleEditNode = (id, oldname) => {
    const name = prompt("Enter new name", oldname);
    const updateData = (data) => {
      return data.map((node) => {
        if (node.id === id) {
          return { ...node, name: name ? name : oldname };
        }

        if (node.children) {
          return { ...node, children: updateData(node.children) };
        }

        return node;
      });
    };

    setData((prev) => updateData(prev));
  };
  return (
    <div>
      <h1 className="text-center text-4xl my-4">File/Folder Structure</h1>
      <div className="border-[1px] border-black w-min">
        <TreeStr
          list={data}
          handleAddNode={handleAddNode}
          handleDeleteNode={handleDeleteNode}
          handleEditNode={handleEditNode}
        />
      </div>
    </div>
  );
};

export default FolderStr;
