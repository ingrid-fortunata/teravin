import React from "react";

function Timeline({ data, activeForm }) {
  return (
    <div className="flex justify-around items-center">
      {data.map((obj) => {
        return (
          <div
            key={obj.id}
            className={
              activeForm === obj.id
                ? "text-blue-600 font-semibold"
                : "text-black font-semibold"
            }
          >
            {obj.title}
          </div>
        );
      })}
    </div>
  );
}

export default Timeline;
