import React, { useState } from "react";
import Profile from "./Profile";
import Interest from "./Interest";
import Settings from "./Settings";

const TabForm = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [data, setData] = useState({
    name: "Hf",
    age: "23",
    email: "hf@gmail.com",
    interest: ["play", "read", "code"],
    theme: "dark",
  });
  const [err, setErr] = useState({});
  const tabs = [
    {
      name: "profile",
      component: Profile,
      validate: () => {
        const err = {};
        if (!data.name || data.name.length < 2) {
          err.name = "Enter a valid name";
        }
        if (!data.age || data.age < 18) {
          err.age = "Enter a valid age";
        }
        if (
          !data.email ||
          !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(data.email)
        ) {
          err.email = "Enter a valid email";
        }
        setErr(err);
        return err.name || err.age || err.email ? false : true;
      },
    },
    {
      name: "interest",
      component: Interest,
      validate: () => {
        const err = {};

        if (data.interest.length === 0) {
          err.interest = "Select atleast one";
        }

        setErr(err);
        return err.interest ? false : true;
      },
    },
    {
      name: "settings",
      component: Settings,
      validate: () => {
        return true;
      },
    },
  ];

  const handlePrev = () => {
    if (tabs[activeTab].validate()) {
      setActiveTab((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (tabs[activeTab].validate()) {
      setActiveTab((prev) => prev + 1);
    }
  };

  const handleSubmit = () => {
    if (tabs[activeTab].validate()) {
      console.log(data);
    }
  };

  const ActiveTab = tabs[activeTab].component;

  return (
    <div className="m-5">
      <h1 className="text-4xl text-center my-6">Tab Form</h1>
      <div className="flex ">
        {" "}
        {tabs.map((tab, index) => (
          <div
            key={index}
            onClick={() => tabs[activeTab].validate() && setActiveTab(index)}
            className={`border p-3 ${
              index === activeTab ? "border-yellow-500" : "border-black"
            }`}
          >
            {tab.name}
          </div>
        ))}
      </div>
      <div className="w-full border h-[300px] p-6">
        <ActiveTab data={data} setData={setData} err={err} />
      </div>

      <div>
        {activeTab > 0 && (
          <button onClick={handlePrev} className="border p-3  mr-2">
            prev
          </button>
        )}
        {activeTab < tabs.length - 1 && (
          <button onClick={handleNext} className="border p-3  mr-2">
            next
          </button>
        )}
        {activeTab === tabs.length - 1 && (
          <button onClick={handleSubmit} className="border p-3  mr-2">
            submit
          </button>
        )}
      </div>
    </div>
  );
};

export default TabForm;
