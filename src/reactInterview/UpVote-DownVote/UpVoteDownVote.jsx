import React, { useState } from "react";

const UpVoteDownVote = () => {
  const [vote, setVote] = useState(null);
  const [upvotes, setUpvotes] = useState(0);
  const [downvotes, setDownvotes] = useState(0);

  const handleClick = (type) => {
    if (vote === type) {
      setVote(null);
      type === "upvote"
        ? setUpvotes((prev) => prev - 1)
        : setDownvotes((prev) => prev - 1);
    } else {
      if (vote === "upvote") setUpvotes((prev) => prev - 1);
      if (vote === "downvote") setDownvotes((prev) => prev - 1);

      setVote(type);
      type === "upvote"
        ? setUpvotes((prev) => prev + 1)
        : setDownvotes((prev) => prev + 1);
    }
  };

  return (
    <div className="m-6">
      <p className="border-2 border-black p-3 w-max bg-gray-200 my-3">
        React is the best frontend framework!{" "}
      </p>

      <button className="mr-3 " onClick={() => handleClick("upvote")}>
        👍{" "}
        <span className={`${vote === "upvote" ? "text-green-700" : " "}`}>
          Upvotes
        </span> 
        : {upvotes}
      </button>
      <button onClick={() => handleClick("downvote")}>
        👎{" "}
        <span className={`${vote === "downvote" ? "text-red-700" : " "}`}>
          Downvotes
        </span>
        : {downvotes}
      </button>
    </div>
  );
};

export default UpVoteDownVote;
