import React, { useState } from "react";
import { checkboxData } from "./data";

const Checkbox = ({ data, checked, setChecked }) => {
  const handleChange = (isChecked, node) => {
    setChecked((prev) => {
      const newState = { ...prev, [node.id]: isChecked };

      //if we check a parent box then check all the nested child
      const checkChildren = (node) => {
        if (node.children) {
          node.children.forEach((item) => {
            newState[item.id] = isChecked;

            item.children && checkChildren(item);
          });
        }
      };

      checkChildren(node);

      //if all the child get checked , check the parent aswell
      const verifyChecked = (node) => {
        if (!node.children) {     
          return newState[node.id];
        }
        const allChecked = node.children.map((item) => verifyChecked(item)).every(Boolean);
        newState[node.id] = allChecked;
        return allChecked;
      };

      checkboxData.forEach((item) => verifyChecked(item));

      return newState;
    });
  };

 
  return (
    <div className="pl-4">
      {data?.map((item) => (
        <div key={item.id}>
          <input
            type="checkbox"
            checked={checked[item.id] || false}
            onChange={(e) => handleChange(e.target.checked, item)}
            className="mx-1"
          />
          <span>{item.name}</span>
          {item.children && (
            <Checkbox
              data={item.children}
              checked={checked}
              setChecked={setChecked}
            />
          )}
        </div>
      ))}
    </div>
  );
};

const NestedCheckbox = () => {
  const [checked, setChecked] = useState({});
  return (
    <div>
      <h3 className="text-4xl font-medium text-center my-4">Nested Checkboxes</h3>

      <Checkbox data={checkboxData} checked={checked} setChecked={setChecked} />
    </div>
  );
};

export default NestedCheckbox;
