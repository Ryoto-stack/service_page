import React from "react";

function Divider() {
  return (
    <div className="my-10">
      <div className="flex items-center">
        <span className="h-px flex-1 bg-black"></span>
        <span className="shrink-0 px-6">
          <img src="/jhsereno-dark.png" alt="divider" className="h-4 w-full" />
        </span>
        <span className="h-px flex-1 bg-black"></span>
      </div>
    </div>
  );
}

export default Divider;
