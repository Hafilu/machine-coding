import React, { forwardRef } from "react";

const Note = forwardRef(({ content,initialPos,...props },ref) => {
  console.log(initialPos);
  return (
    
      <div
      ref={ref}
        style={{
          width: "200px",
          position: "absolute",
          left: `${initialPos?.x}px`,
          top: `${initialPos?.y}px`,
          userSelect: "none",
          cursor: "move",
          border: "1px solid black",
          backgroundColor: "lightyellow",
        }}

        {...props}
      >
        {content}
      </div>
     
  );
});

export default Note;
