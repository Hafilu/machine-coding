import React from "react";
import WithAnime from "./WithAnime";

const Paragraph = () => {
  return (
    <div>
      <p className="py-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis natus
        soluta ullam sint recusandae quod tenetur impedit inventore corrupti
        repellat ipsa magni blanditiis fuga, deserunt libero, amet reiciendis
        enim? Illum!
      </p>
    </div>
  );
};

export default Paragraph;


export const ParagraphWithAnim = WithAnime(Paragraph)